import React, { useState } from 'react';

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="text-center bg-white p-10 rounded-xl shadow-2xl max-w-md w-full">
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
    </div>
  );
}

export default App;