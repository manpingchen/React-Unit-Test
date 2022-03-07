import { useState } from "react";

const Greeting = () => {
  const [greetingText, setGreetingText] = useState("Nice to meet you!");
  const sayHiHandler = () => {
    setGreetingText("Hi! Nice to meet you too!");
  };
  return (
    <div>
      <h2>Hello World</h2>
      <p>{greetingText}</p>
      <button onClick={sayHiHandler}>Say Hi!</button>
    </div>
  );
};

export default Greeting;
