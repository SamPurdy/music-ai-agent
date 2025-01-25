import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="text-center bg-white p-10 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Music AI Agent</h1>
        <p className="text-xl text-gray-700 mb-6">Your intelligent music companion</p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;