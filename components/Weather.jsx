import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-black/50 rounded-md relative flex flex-col justify-between max-w-[480px] w-full m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <p className="text-3xl text-center pb-6">Weather in {data.name}</p>
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="currentweather icon"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <div>
          <p className="text-6xl">{data.main.temp.toFixed(0)}&#8451;</p>
          <p className="text-6xl">{((data.main.temp * 9) / 5 + 32).toFixed(0)}&#8457;</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
