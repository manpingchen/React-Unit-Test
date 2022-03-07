import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [greetingText, setGreetingText] = useState("Nice to meet you!");
  const sayHiHandler = () => {
    setGreetingText("Hi! Nice to meet you too!");
  };
  return (
    <div>
      <h2>Hello World</h2>
      <Output>{greetingText}</Output>
      <button onClick={sayHiHandler}>Say Hi!</button>
    </div>
  );
};

export default Greeting;
