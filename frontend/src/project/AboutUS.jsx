import React from "react";
import Farmer from "./farmer.jpeg";
import Anjali from "./A.jpg";
import Mitali from "./profile.png";
import Rujul from "./r.jpg";
import Rakhi from "./r1.jpg";
import Vide from "./temp.mp4";

const AboutUS = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="bg-white p-8 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-8" style={{padding: '4px'}}>
          <div className="flex items-center justify-center">
            {/* Video player goes here */}
            <iframe
              width="100%"
              height="100%"
              src={Vide}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-center">
            <h1
              className="text-4xl font-bold mb-6 text-center"
              style={{ color: "#4CAF50" }}
            >
              About Us!
            </h1>

            <p className="text-gray-700 mb-4 text-lg">
              Welcome to our Gerbera Flower Counting System, a groundbreaking
              project that harnesses the power of drones, computer vision, and
              image processing to revolutionize flower counting in the field of
              floriculture.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Our system automates the process of counting Gerbera flowers using
              drones equipped with cameras, offering unparalleled accuracy and
              efficiency. By eliminating labor-intensive manual counting
              methods, we aim to streamline production management for
              floriculturists and enhance overall productivity.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              With our innovative solution, growers can achieve precise,
              real-time flower counting, significantly reducing manual labor and
              potential errors. This not only saves time and resources but also
              provides growers with valuable insights for better production
              planning and management. Join us in ushering in a new era of
              floriculture, where advanced technology meets the beauty of nature
              to optimize efficiency and sustainability in flower cultivation.
            </p>
          </div>
        </div>
        <div className="mt-8 bg-gray-100 rounded p-4 shadow-md text-center">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="flex flex-col items-center bg-green-100 rounded-lg p-4 shadow-md transition-all duration-500 transform hover:scale-105">
              <img
                src={Anjali}
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-center font-semibold text-lg mb-2">
                Anjali Bhawari
              </p>
              <p className="text-center text-gray-700">
                Anjali is passionate about computer vision and has expertise in drone technology.
              </p>
            </div>
            <div className="flex flex-col items-center bg-green-100 rounded-lg p-4 shadow-md transition-all duration-500 transform hover:scale-105">
              <img
                src={Rujul}
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-center font-semibold text-lg mb-2">Rujul Modi</p>
              <p className="text-center text-gray-700">
                Rujul is an expert in image processing algorithms and has a keen interest in AI.
              </p>
            </div>
            <div className="flex flex-col items-center bg-green-100 rounded-lg p-4 shadow-md transition-all duration-500 transform hover:scale-105">
              <img
                src={Mitali}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-center font-semibold text-lg mb-2">Mitali Bafna</p>
              <p className="text-center text-gray-700">
                Mitali specializes in software development and has experience in web technologies.
              </p>
            </div>
            <div className="flex flex-col items-center bg-green-100 rounded-lg p-4 shadow-md transition-all duration-500 transform hover:scale-105">
              <img
                src={Rakhi}
                alt="Team Member 4"
                className="w-32 h-32 rounded-full mb-2"
              />
              <p className="text-center font-semibold text-lg mb-2">Rakhi Bhagwat</p>
              <p className="text-center text-gray-700">
                Rakhi is an expert in project management and has a background in business analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
