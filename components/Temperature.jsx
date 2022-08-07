import React from "react";

const [fahrenheit, setFahrenheit] = useState(0);


const Temperature = ({ data }) => {
  return (
    setFahrenheit({data.main.temp.toFixed(0)} * (9 / 5) + 32)
    <div>
      <div>
        <p className="text-6xl">{data.main.temp.toFixed(0)}&#8451;</p>
        <p className="text-6xl">setFahrenheit &#8457;</p>
      </div>
    </div>
  );
};

export default Temperature;
