import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import clear_icon from "../public/Assets/clear.png";
import cloud_icon from "../public/Assets/cloud.png";
import drizzle_icon from "../public/Assets/drizzle.png";
import rain_icon from "../public/Assets/rain.png";
import snow_icon from "../public/Assets/snow.png";
import wind_icon from "../public/Assets/wind.png";
import humidity_icon from "../public/Assets/humidity.png";

function App() {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Please Enter City Name!");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      const icons = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        location: data.name,
        icon: icons,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("Islamabad");
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(inputRef.current.value);
    }
  };

  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-2xl rounded-3xl p-8 text-center w-96">

          <div className="flex items-center justify-center gap-2 mb-6">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search City..."
              className="py-2 px-4 w-full rounded-l-md border border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-200"
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-all duration-200"
              onClick={() => search(inputRef.current.value)}
            >
              <IoIosSearch className="text-2xl" />
            </button>
          </div>

          {weatherData ? (
            <>
              <div className="py-4">
                <img
                  src={weatherData.icon}
                  alt="weather icon"
                  className="w-32 mx-auto mb-4"
                />
                <h1 className="text-4xl font-semibold text-white">
                  {weatherData.temprature}°C
                </h1>
                <p className="text-2xl font-medium text-slate-200">
                  {weatherData.location}
                </p>
              </div>

              <div className="flex justify-between items-center text-slate-100 mt-6">
                <div className="flex flex-col items-center">
                  <img
                    src={humidity_icon}
                    alt="humidity icon"
                    className="w-8 mb-1"
                  />
                  <p className="text-xl font-medium">{weatherData.humidity}%</p>
                  <span className="text-sm">Humidity</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={wind_icon} alt="wind icon" className="w-8 mb-1" />
                  <p className="text-xl font-medium">
                    {weatherData.windSpeed} Km/h
                  </p>
                  <span className="text-sm">Wind Speed</span>
                </div>
              </div>
            </>
          ) : (
            <p>Something Went Wrong</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
