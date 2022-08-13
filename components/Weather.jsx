import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);

  // create Date object for current location
  let d = new Date();
  console.log(d);

  // convert to msec since Jan 1 1970
  let localTime = d.getTime();
  console.log(localTime);

  // obtain local UTC offset and convert to msec
  let localOffset = d.getTimezoneOffset() * 60000;
  console.log(localOffset);

  // obtain UTC time in msec
  let utc = localTime + localOffset;
  console.log(utc);

  // obtain and add destination’s UTC time offset
  // for example, Bombay
  // which is UTC + 5.5 hours
  let offset = 5.5;
  let bombay = utc + 3600000 * offset;
  console.log(bombay);

  // convert msec value to date string
  let nd = new Date(bombay);

  return (
    <div className="relative flex justify-between pt-12">
      <div className="bg-black/50 rounded-md relative flex flex-col justify-between max-w-[480px] w-full m-auto p-8 text-gray-300 z-10">
        {/* Top */}
        <p className="text-3xl text-center pb-6">{data.name}</p>
        <p className="text-2xl text-center pb-6">{nd.toLocaleString()}</p>
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
