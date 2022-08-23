import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import TbTemperatureFahrenheit from "react-icons/tb";
import TbTemperatureCelsius from "react-icons/tb";

export function Weather ({ data }) {
  // console.table(data);
  // calculate time and date at location
  let d = new Date();
  let localTime = d.getTime();
  let localOffset = d.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let dt = utc + 1000 * data.timezone;
  const dateAndTime = new Date(dt).toString();

  // toggle
  const [enabled, setEnabled] = useState(false);

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
          <p className="text-5xl flex flex-row">{data.main.temp.toFixed(0)}<TbTemperatureCelsius/></p>
          <p className="text-5xl flex flex-row">
            {((data.main.temp * 9) / 5 + 32).toFixed(0)}<TbTemperatureFahrenheit/>
          </p>
        </div>

        {/* toggle */}
        <Switch.Group>
          <div className="flex items-center justify-center">
            <Switch.Label className="mr-4">&#8451;</Switch.Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-teal-300" : "bg-purple-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <Switch.Label className="ml-4">&#8457;</Switch.Label>
          </div>
        </Switch.Group>
      </div>
    </div>
  );
};

