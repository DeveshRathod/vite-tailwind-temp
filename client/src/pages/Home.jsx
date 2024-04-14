import React, { useState } from "react";
import img from "../assets/image.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import Details from "../components/Table";

const Home = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [details, setDetails] = useState({});
  const submit = async () => {
    console.log(vehicleNumber);
    try {
      const response = await fetch("http://localhost:3000/api/v1/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vehicleNumber: vehicleNumber }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleChange = (event) => {
    setVehicleNumber(event.target.value);
  };

  return (
    <div className="flex justify-center bg-[#F7F7F7] h-screen w-screen p-10">
      <div className="flex-1">
        <img
          src={img}
          alt="hero_image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col items-center mt-20">
        <h1 className="text-5xl mb-4">Vehicle Information</h1>
        <h2 className="text-xl mb-4 text-gray-400">
          Enter Vehicle Registration Number
        </h2>
        <div className="flex items-center w-96">
          <input
            type="text"
            className="outline-none p-2 rounded-l-full border border-gray-300 w-full"
            placeholder="MH-XX-JK-XXXX"
            value={vehicleNumber}
            onChange={handleChange}
          />
          <button
            className="p-2 bg-red-500 text-white rounded-r-full"
            onClick={submit}
          >
            Go
          </button>
        </div>
        <div className="">
          <Details details={details} />
        </div>
      </div>
    </div>
  );
};

export default Home;
