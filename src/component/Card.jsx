import React, { useEffect, useRef, useState } from "react";

const Card = () => {
  const inputcity = useRef(null);
  const [detail, setDetails] = useState({});

  const fetchApi = async () => {
    try {
      const apiKey = "ca45e1998b1f42714206f0b7fd817423";
      const city = inputcity.current.value || "jaipur";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      let res = await fetch(apiUrl);
      let data = await res.json();
      setDetails(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTask = (e) => {
    e.preventDefault();
    fetchApi();
    inputcity.current.value = "";
  };

  useEffect(() => {
    fetchApi();
  }, [inputcity]);

  return (
    <div
      className="border-4 rounded-lg
  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  text-white p-10 shadow-2xl shadow-black  "
    >
      <form className="flex gap-2" onSubmit={handleTask}>
        <input
          className=" border-2"
          type="text"
          placeholder="Type Your City Name"
          ref={inputcity}
        />
        <button
          className="border-1 p-1 bg-black text-white font-mono shadow-2xs shadow-black"
          type="submit"
        >
          Search
        </button>
      </form>
      <h1 className="p-2">City:{detail.name}</h1>

      <img
        className="animate-slide-x  "
        src={
          detail.weather && detail.weather.length > 0
            ? `https://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`
            : ""
        }
        alt="Weather Icon"
      />

      <div className="flex flex-col gap-1">
        <h1 className=" border-1 flex gap-10  text-yellow-300 p-2">
          Temperature : <span className="text-white font-extrabold"> {detail.main && (detail.main.temp - 273.15).toFixed(2)}
          °C </span>
        </h1>
        <h1 className=" border-1 flex gap-15 text-yellow-300 p-2">Humidity :  <span className="text-white font-extrabold ">{detail.main?.humidity}% </span></h1>
        <h1 className=" border-1 flex gap-10 text-yellow-300  p-2">
          Wind Speed :  <span className="text-white font-extrabold ">{detail.wind?.speed} m/s</span>
        </h1>
        <p className=" border-1 flex gap-15  text-yellow-300  p-2">
          
          Wheather :  <span className="text-white font-bold ">{detail.weather?.[0]?.main} </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
