import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  // console.table(data);
  console.log(data);

  let d = new Date()
  console.log(d)
  let localTime = d.getTime()
  console.log(localTime)
  let localOffset = d.getTimezoneOffset() * 60000
  console.log(localOffset)
  let utc = localTime + localOffset
  console.log(utc)
  let dateAndTime = utc + (1000 * data.timezone)
  console.log(dateAndTime)
  const nd = new Date(dateAndTime)
  console.log(nd)
  // let dt = nd.slice(0, 24);
  // console.log(nd.substring(0, 24))
  

  return (
    <div className="relative flex justify-between pt-12">
      <div className="bg-black/50 rounded-md relative flex flex-col justify-between max-w-[480px] w-full m-auto p-8 text-gray-300 z-10">
        {/* Top */}
        <p className="text-3xl text-center pb-6">{data.name}</p>
        <p className="text-3xl text-center pb-6">{data.sys.country}</p>
        <p className="text-2xl text-center pb-6">{nd}</p>
        <div className="flex flex-col items-center m-8">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="currentweather icon"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
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
