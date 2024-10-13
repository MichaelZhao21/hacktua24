from pymusicxml import *
from collections import namedtuple
from music21 import converter
import subprocess
import os
import note_data

Noted = namedtuple("Noted", ["name", "sharp", "octave", "hand", "start", "end", "duration"])

# Define the notes
Notes = note_data.notes

# Create a score
score = Score(title="My Composition")

# Create two parts
part1 = Part(part_name='P1')
part2 = Part(part_name='P2')

# Create clefs for part1 and part2
part1clef = Clef(sign="G", line=2)  # Treble clef for part1
part2clef = Clef(sign="F", line=4)  # Bass clef for part2

# Append the parts to the score
score.append(part1)
score.append(part2)

def split_duration_into_tied_notes(duration):
    # Define the note values for common durations
    note_values = [4, 2, 1, 0.5, 0.25]  # Whole, half, quarter, eighth, sixteenth notes
    tied_notes = []

    while duration > 0:
        for value in note_values:
            if value <= duration + 1e-9:  # Adding a small epsilon for floating-point comparisons
                tied_notes.append(value)
                duration -= value
                break
        else:
            # If we can't fit a whole note, we need to use smaller fractions
            # To handle fractions gracefully, we will take the smallest value possible (0.25)
            # but ensure we leave enough duration for larger notes if applicable
            if duration < 0.25:
                tied_notes.append(duration)  # Add the remainder as a tiny note
                duration = 0
            else:
                tied_notes.append(.5)  # Always add the smallest note value
                duration -= 0.5

    return tied_notes

def process_notes(part1, part2, right_hand_notes, left_hand_notes, part1clef, part2clef):
    m_number = 1
    max_length = 4
    measure1 = Measure(number=m_number)
    measure2 = Measure(number=m_number)
    current_time1 = 0
    current_time2 = 0

    measure1.clef = part1clef
    measure2.clef = part2clef

    all_notes = sorted(right_hand_notes + left_hand_notes, key=lambda x: x.start)

    for note in all_notes:
        if note in right_hand_notes:
            if note.name == "rest":
                tied_durations = split_duration_into_tied_notes(note.duration)

                for tied_duration in tied_durations:
                    rest_to_add = Rest(duration=tied_duration)

                    if current_time1 + tied_duration > max_length:
                        part1.append(measure1)
                        m_number += 1
                        measure1 = Measure(number=m_number)
                        current_time1 = 0

                    measure1.append(rest_to_add)
                    current_time1 += tied_duration

            else:
                alteration = 1 if note.sharp else 0
                pitch = Pitch(step=note.name, octave=note.octave, alteration=alteration)
                tied_durations = split_duration_into_tied_notes(note.duration)

                for tied_duration in tied_durations:
                    note_to_add = Note(
                        pitch=pitch,
                        duration=tied_duration
                    )

                    if current_time1 + tied_duration > max_length:
                        part1.append(measure1)
                        m_number += 1
                        measure1 = Measure(number=m_number)
                        current_time1 = 0

                    measure1.append(note_to_add)
                    current_time1 += tied_duration

        if note in left_hand_notes:
            if note.name == "rest":
                tied_durations = split_duration_into_tied_notes(note.duration)

                for tied_duration in tied_durations:
                    rest_to_add = Rest(duration=tied_duration)

                    if current_time2 + tied_duration > max_length:
                        part2.append(measure2)
                        m_number += 1
                        measure2 = Measure(number=m_number)
                        current_time2 = 0

                    measure2.append(rest_to_add)
                    current_time2 += tied_duration

            else:
                alteration = 1 if note.sharp else 0
                pitch = Pitch(step=note.name, octave=note.octave, alteration=alteration)
                tied_durations = split_duration_into_tied_notes(note.duration)

                for tied_duration in tied_durations:
                    note_to_add = Note(
                        pitch=pitch,
                        duration=tied_duration
                    )

                    if current_time2 + tied_duration > max_length:
                        part2.append(measure2)
                        m_number += 1
                        measure2 = Measure(number=m_number)
                        current_time2 = 0

                    measure2.append(note_to_add)
                    current_time2 += tied_duration

        if current_time1 >= max_length or current_time2 >= max_length:
            if current_time1 < max_length:
                rest_duration = max_length - current_time1
                measure1.append(Rest(duration=rest_duration))
                current_time1 = max_length

            if current_time2 < max_length:
                rest_duration = max_length - current_time2
                measure2.append(Rest(duration=rest_duration))
                current_time2 = max_length

            part1.append(measure1)
            part2.append(measure2)
            m_number += 1
            measure1 = Measure(number=m_number)
            measure2 = Measure(number=m_number)
            current_time1 = 0
            current_time2 = 0

    if len(measure1) > 0:
        part1.append(measure1)
    if len(measure2) > 0:
        part2.append(measure2)


# Separate notes for each hand
right_hand_notes = [note for note in Notes if note.hand == "R"]
left_hand_notes = [note for note in Notes if note.hand == "L"]

# Process notes for each part, adding the clef to the first measure
process_notes(part1, part2, right_hand_notes, left_hand_notes, part1clef, part2clef)

def convert_musicxml_to_pdf(musicxml_path, pdf_path, musescore_path):
    if not os.path.exists(musicxml_path):
        raise FileNotFoundError(f"MusicXML file not found: {musicxml_path}")
    
    if not os.path.exists(musescore_path):
        raise FileNotFoundError(f"MuseScore executable not found: {musescore_path}")
    
    try:
        subprocess.run([musescore_path, "-o", pdf_path, musicxml_path], check=True)
        print(f"Successfully converted {musicxml_path} to {pdf_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error converting MusicXML file to PDF: {e}")

# Export the score to a MusicXML file
score.export_to_file("my_music.xml")

musicxml_file = "my_music.xml"
pdf_file = "my_music.pdf"
musescore_executable = "C:/Program Files/MuseScore 3/bin/MuseScore3.exe"

convert_musicxml_to_pdf(musicxml_file, pdf_file, musescore_executable)
