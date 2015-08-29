# gigmate
Create song structures to playalong with. Use gigmate with a metronome, set a the same tempo, and you're good to go.

This is a simple app for musicians, to have a clear picture of the structure of the song they're playing.
I did for myself for now so it's very basic and has no UI. You'll have to edit the huge setLists object in
controllers.js in order to create your own setLists of songs. Add each song part (verse, chorus, bridge, etc.)
and set the tempo. Then use a metronome set at the tempo of the song, and start the app (index.html)
at the same tempo with the metronome. The app will playback in real time, showing you eaxctly where you are in the song.

Use the up / down arrow keys to navigate through selists, and left / right arrow keys to navigate through each song
in each playlist.

It's a bit hard to explain how it works, but if you're an amateur musician like, you should figure it out :)

I'll soon make a proper UI to edit the song structures, save them, etc., so stay tuned.

## Development
* Before you start, make sure you have git, NodeJS and NPM installed and configured
* clone the repo
```
$ git clone https://github.com/ionelh/gigmate
```
* cd to the gigmate folder
```
$ cd gigmate/
```
* run npm install to create the node_modules folder and install dependencies
```
$ npm install
```
* run the grunt command which creates the build folder
```
$ grunt copy
```
* serve gigmate/build/src/app/ in your preferred local server

## Build for production
