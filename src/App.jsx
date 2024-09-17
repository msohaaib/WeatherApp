import { IoIosSearch } from "react-icons/io"
import { MdOutlineWaves } from "react-icons/md"
import { TiWeatherSunny } from "react-icons/ti"
import { WiStrongWind } from "react-icons/wi"



function App() {
  

  return (
    <>
      <div className=" w-1/4 bg-blue-500 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-8 text-center rounded-3xl text-white">
        <div className="flex py-4">
          <input type="text" placeholder="search" 
          className="py-1 px-2 rounded relative left-1/2 -translate-x-1/2"
          />
          <IoIosSearch 
          className="text-2xl relative text-black left-16 top-1"
          />
        </div>
        <div className="py-4">
        <TiWeatherSunny className="relative left-1/2 -translate-x-1/2 text-yellow-400 text-6xl my-4" />
        <h1 className="text-3xl font-bold">21 <sup>o</sup>C</h1>
        <p className="text-3xl font-semibold">New York</p>
        </div>
        <div className="flex flex-row py-4 relative left-28 gap-8">
          <div className="flex flex-row">
            <div>
            <MdOutlineWaves 
            className="text-2xl"
            />
            </div>
            <div className="flex flex-col">
              <p>67%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <WiStrongWind 
              className="text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <p>2.06 Km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
