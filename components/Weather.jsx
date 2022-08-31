import Image from "next/image";
import { React, useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";

const Weather = ({ data }) => {
  // console.table(data);
  // to calculate current date and time at searched location
  let d = new Date();
  let localTime = d.getTime();
  let localOffset = d.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let dt = utc + 1000 * data.timezone;
  const dateAndTime = new Date(dt).toString();

  // toggle temperature unit
  const [unit, setUnit] = useState("c");
  const [temp, setTemp] = useState(data.main.temp.toFixed(0));
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
    const handleChange = () => {
        if (unit === "c") {
            setUnit("f");
            setTemp(((data.main.temp * 9) / 5 + 32).toFixed(0))
        } else {
            setUnit("c");
            setTemp(data.main.temp.toFixed(0))
        }
    };

  return (
    <div className="relative flex justify-between mt-12 rounded-md mx-auto max-w-[475px] bg-gradient-to-r p-[10px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <div className="bg-black/50 rounded-md relative flex flex-col justify-between w-full m-auto p-8 text-gray-300 z-10">
        {/* city, country flag, and date & time */}
        <div className="flex flex-row items-center mx-auto">
        <p className="text-3xl text-center p-6 pb-8">{data.name}</p>
        <Image src={`https://flagcdn.com/32x24/${data.sys.country.toLowerCase()}.png`} alt='flag' width="32" height="24" />
        </div>
        <p className="text-2xl text-center pb-6">{dateAndTime.slice(0, 21)}</p>
        {/* weather icon and weather type */}
        <div className="flex flex-col items-center m-8">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="currentweather icon"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        {/* temperature */}
        <div className="relative flex justify-between m-4">
          <p className="text-5xl flex flex-row">{data.main.temp.toFixed(0)}<span className="text-3xl"><TbTemperatureCelsius /></span></p>
          <p className="text-5xl flex flex-row">{temp}{unit}</p>
          <p className="text-5xl flex flex-row">
            {((data.main.temp * 9) / 5 + 32).toFixed(0)}<span className="text-3xl"><TbTemperatureFahrenheit /></span>
          </p>
        </div>


      <div className="flex flex-col justify-center items-center p-4">
        {/*   Switch Container */}

        <div
          className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
            handleChange()
          }}
        >
          {/* Switch */}
          <div
            className={
              "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Weather;
