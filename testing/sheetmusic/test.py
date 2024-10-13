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
            # Ensure we only take note values that fit into the remaining duration
            if value <= duration + 1e-9:  # Adding a small epsilon to avoid floating point issues
                tied_notes.append(value)
                duration -= value
                break
        else:
            # This happens if none of the note values fit the remaining duration
            raise ValueError(f"Cannot split duration {duration} into standard note values")

    return tied_notes

def process_notes(part, notes, clef):
    m_number = 1
    max_length = 4
    measure = Measure(number=m_number)
    current_time = 0
    measure.clef = clef

    notes_by_start = {}
    for note in notes:
        if note.start not in notes_by_start:
            notes_by_start[note.start] = []
        notes_by_start[note.start].append(note)

    start_times = sorted(notes_by_start.keys())

    for start_time in start_times:
        current_notes = notes_by_start[start_time]

        if len(current_notes) > 1:
            pitches = []
            duration = min(note.duration for note in current_notes)

            for note in current_notes:
                if note.name == "rest":
                    continue
                alteration = 1 if note.sharp else 0
                pitch = Pitch(step=note.name, octave=note.octave, alteration=alteration)
                pitches.append(pitch)

            if pitches:
                chord_to_add = Chord(pitches=pitches, duration=Duration(note_type=get_note_type(duration)))
                add_to_measure(part, measure, chord_to_add, current_time, max_length)
                current_time += duration
        else:
            note = current_notes[0]
            if note.name == "rest":
                rest_to_add = Rest(duration=Duration(note_type=get_note_type(note.duration)))
                add_to_measure(part, measure, rest_to_add, current_time, max_length)
                current_time += note.duration
            else:
                alteration = 1 if note.sharp else 0
                pitch = Pitch(step=note.name, octave=note.octave, alteration=alteration)
                note_to_add = Note(pitch=pitch, duration=Duration(note_type=get_note_type(note.duration)))
                add_to_measure(part, measure, note_to_add, current_time, max_length)
                current_time += note.duration

        while current_time >= max_length:
            part.append(measure)
            m_number += 1
            measure = Measure(number=m_number)
            current_time -= max_length

    if len(measure) > 0:
        if current_time < max_length:
            rest_duration = max_length - current_time
            rest_to_add = Rest(duration=Duration(note_type=get_note_type(rest_duration)))
            measure.append(rest_to_add)
        part.append(measure)
def add_to_measure(part, measure, item, current_time, max_length):
    remaining_duration = item.duration.duration_in_beats()
    while remaining_duration > 0:
        if current_time + remaining_duration <= max_length:
            measure.append(item)
            return
        else:
            split_duration = max_length - current_time
            if isinstance(item, Note):
                split_note = Note(pitch=item.pitch, duration=Duration(note_type=get_note_type(split_duration)))
                measure.append(split_note)
            elif isinstance(item, Rest):
                split_rest = Rest(duration=Duration(note_type=get_note_type(split_duration)))
                measure.append(split_rest)
            elif isinstance(item, Chord):
                split_chord = Chord(pitches=item.pitches, duration=Duration(note_type=get_note_type(split_duration)))
                measure.append(split_chord)
            
            part.append(measure)
            measure = Measure(number=measure.number + 1)
            current_time = 0
            remaining_duration -= split_duration
            if isinstance(item, Note):
                item = Note(pitch=item.pitch, duration=Duration(note_type=get_note_type(remaining_duration)))
            elif isinstance(item, Rest):
                item = Rest(duration=Duration(note_type=get_note_type(remaining_duration)))
            elif isinstance(item, Chord):
                item = Chord(pitches=item.pitches, duration=Duration(note_type=get_note_type(remaining_duration)))

def get_note_type(duration):
    if duration >= 4.0:
        return "whole"
    elif duration >= 2.0:
        return "half"
    elif duration >= 1.0:
        return "quarter"
    elif duration >= 0.5:
        return "eighth"
    else:
        return "16th"

# Separate notes for each hand
right_hand_notes = [note for note in Notes if note.hand == "R"]
left_hand_notes = [note for note in Notes if note.hand == "L"]

# Process notes for each part, adding the clef to the first measure
process_notes(part1, right_hand_notes, part1clef)
process_notes(part2, left_hand_notes, part2clef)

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