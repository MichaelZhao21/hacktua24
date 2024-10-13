## Inspiration

You start tapping your foot, you start bobbing your head, and you start hitting a little boogey. Finding a song you really vibe to is always great, but for a musician it spurs a desire to grab an instrument. Recently, the prices for music transcription services have significantly increased, creating a barrier for aspiring musicians from challenged socio-economic regions to learn. We aim to provide a service that closes the gap between musicians are varying background by making sheet music to trending and relevant songs available.

## What it does

ScoreSnag takes in a url for a MIDI piano Youtube video. The program then transcribes the _waterfall of falling notes_ into a pristine and accurate score. The user is then able to playback the transcribed music and download a PDF version which can be printed.

## How we built it

ScoreSnag's user-friendly frontend is built using **React.js**, **TailwindCSS**, and **MaterialUI**. While it's backend is powered by **Google Colab** and the **pymusicxml** library. The piano notes into the video are identified by their duration, key, and clef before being exported as an array of tuples. We then use the pymusicxml library to construct a **MusicXML** file that is converted into a PDF by **MuseScore3**.

## Challenges we ran into

Our biggest challenge was finding a way to identify music notes from a MIDI video. These videos use different **aspect ratios**, **visual affects**, and **coloring** which can hinder the transcribing process. We identified the unique ratio of black and white piano key to find the middle C note, thus allowing us to find the rest of the keys. We also were challenged by the **structure of MusicXML** coupled with **uncommon music transcription conventions**. Finally, we really wanted to make our UI as user-friendly and inviting as possible, so we spent a great deal of time designing and adjusting our frontend.

## Accomplishments that we're proud of

We are extremely proud of the fact that we were able to convert out Colab python code into an API. This allowed us perform POST requests on our web app to deliver high quality scores to our users.

## What we learned

In this project, we learned about MusicXML, a powerful format for representing musical scores in a structured, machine-readable way. We explored how to represent notes, rests, accidentals, and other musical elements using pymusicxml and learned how to encode the pitch, duration, and timing of each note.

## What's next for ScoreSnag

We hope to fine tune our algorithm for more extraneous video variables that could impede transcription. Additionally, we plan to integrate more advanced transcription techniques such as key signatures, trills, and grace notes which would allow us to further raise the quality and potential difficulty ceiling of the outputted scores.
