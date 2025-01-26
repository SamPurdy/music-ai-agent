import React, { useState } from 'react';

// Audio files for each note (these will be replaced with actual sound file paths)
const noteAudioFiles = {
  'C': '/notes/C.mp3',
  'C#': '/notes/C-sharp.mp3',
  'D': '/notes/D.mp3',
  'D#': '/notes/D-sharp.mp3',
  'E': '/notes/E.mp3',
  'F': '/notes/F.mp3',
  'F#': '/notes/F-sharp.mp3',
  'G': '/notes/G.mp3',
  'G#': '/notes/G-sharp.mp3',
  'A': '/notes/A.mp3',
  'A#': '/notes/A-sharp.mp3',
  'B': '/notes/B.mp3'
};

const musicTheoryTips = [
  "A major scale always follows the pattern: whole, whole, half, whole, whole, whole, half.",
  "The circle of fifths is a fundamental concept in understanding key relationships.",
  "Rhythm is the heartbeat of music - it defines the timing and groove of a piece.",
  "Chord inversions can add depth and variation to your musical progressions.",
  "Understanding intervals is key to building chords and understanding musical harmony."
];

function App() {
  const [currentTip, setCurrentTip] = useState(null);

  const generateRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * musicTheoryTips.length);
    setCurrentTip(musicTheoryTips[randomIndex]);
  };

  const playNote = (note) => {
    const audio = new Audio(noteAudioFiles[note]);
    audio.play().catch(error => console.error('Error playing audio:', error));
  };

  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = ['C#', 'D#', 'F#', 'G#', 'A#'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="text-center bg-white p-10 rounded-xl shadow-2xl max-w-md w-full mb-6">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Music AI Agent
        </h1>
        <p className="text-xl text-gray-700 mb-6">Your intelligent music companion</p>
        
        <div className="mb-6">
          <button 
            onClick={generateRandomTip}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300 mb-4"
          >
            Get Music Theory Tip
          </button>
          
          {currentTip && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-800 italic">"{currentTip}"</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-xl">
        <div className="relative h-48 w-[600px] piano-keyboard flex">
          {/* White Keys */}
          {whiteKeys.map((note, index) => (
            <button 
              key={note}
              onClick={() => playNote(note)}
              className="w-16 h-full bg-white border-2 border-gray-300 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
              style={{left: `${index * 3}rem`}}
            >
              <span className="text-xs text-gray-600 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                {note}
              </span>
            </button>
          ))}

          {/* Black Keys */}
          {blackKeys.map((note, index) => {
            const positions = [1, 2, 4, 5, 6];
            return (
              <button
                key={note}
                onClick={() => playNote(note)}
                className="absolute w-10 h-28 bg-black text-white border-2 border-gray-800 hover:bg-gray-800 active:bg-gray-900 transition-colors duration-200 z-10"
                style={{
                  left: `${positions[index] * 3 - 1}rem`,
                  top: '0',
                }}
              >
                <span className="text-xs absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  {note}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;