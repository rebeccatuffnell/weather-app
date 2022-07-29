import React from "react";

const Weather = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
            width="100"
            height="100"
          />
          <p>{data.weather[0].main}</p>
        </div>
        <p>{data.main.temp.toFixed(0)}&#8451;</p>
      </div>
    </div>
  );
};

export default Weather;
