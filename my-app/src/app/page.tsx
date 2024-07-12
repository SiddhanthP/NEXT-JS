import React from "react";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/images/b1.jpg')",  // Adjusted path to the image
      }}
    >
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to Your Homepage</h1>
        <p className="text-lg">Some introductory text here.</p>
      </div>
      {/* Optional: Add additional content below */}
      <div className="mt-12">
        <p className="text-lg text-white">Additional content...</p>
      </div>
    </div>
  );
};

export default Home;
