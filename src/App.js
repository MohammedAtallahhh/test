import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

function App() {
  const [value, setValue] = useState(0);

  const seconds = 240;

  const text = () =>
    `0${Math.floor(value / 60)}:${
      value % 60 > 9 ? value % 10 : "0" + (value % 60)
    }`;

  useEffect(() => {
    const timer = setInterval(() => setValue((value) => value + 1), 1000);

    if (value >= seconds) {
      clearInterval(timer);
      setValue(0);
      return;
    }

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ value });
  return (
    <>
      <h1>Animated circular bar</h1>
      <div style={{ width: "100px" }}>
        <CircularProgressbar value={(value / seconds) * 100} text={text()} />
      </div>
    </>
  );
}

export default App;
