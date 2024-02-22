import { useState } from "react";

export default function MyButton() {
  const [List, setList] = useState([]);
  const [Color, setColor] = useState("yellow");

  function Func() {
    if (Color === "blue") {
      setColor("yellow");
    } else {
      setColor("blue");
    }

    setList([...List, List.length + 1]);
    console.log(List)
  }

  return (
    <>
      <button onClick={Func} style={{ backgroundColor: Color }}>
        click
      </button>
      <button>click</button>
      <button>click</button>
    </>
  );
}
