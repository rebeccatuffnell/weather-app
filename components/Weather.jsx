import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  // console.table(data);
  let d = new Date();
  let localTime = d.getTime();
  let localOffset = d.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let dt = utc + 1000 * data.timezone;
  const dateAndTime = new Date(dt).toString();

  return (
    
    <div className="relative flex justify-between mt-12 rounded-md mx-auto max-w-[475px] bg-gradient-to-r p-[10px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <div className="bg-black/50 rounded-md relative flex flex-col justify-between w-full m-auto p-8 text-gray-300 z-10">
        {/* city, country, and date & time */}
        <p className="text-3xl text-center pb-6">{data.name}</p>
        <p className="text-3xl text-center pb-6">{data.sys.country}</p>
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
        <div className="relative flex flex-row justify-between m-4">
          <p className="text-5xl">{data.main.temp.toFixed(0)}&#8451;</p>
          <p className="text-5xl">
            {((data.main.temp * 9) / 5 + 32).toFixed(0)}&#8457;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
