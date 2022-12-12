import React, { useState, useEffect } from "react";

const World = () => {
  const [data, setdata] = useState([]);
  const [time, setTime] = useState();

  const getTime = async () => {
    try {
      const res = await fetch("http://worldtimeapi.org/api/timezone");
      const actual = await res.json();
      setdata(actual);
      console.log(actual[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTime();

    setInterval(async () => {
      myfun(data[0]);
    }, 1000);
  }, []);

  function myfun(da) {
    setTime(
      new Date().toLocaleString("en-US", {
        timeZone: da,
        timeStyle: "medium",
        hourCycle: "h24",
      })
    );
  }
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default World;
