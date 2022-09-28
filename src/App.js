import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Message from "./components/Message";
import EventHandler from "./components/EventHandler";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div>
      <ParentComponent />

      {/* <EventHandler /> */}

      {/* <Message /> */}

      {/* <Greeting name='Nabeel' age='26'>
        <p>Web Developer</p>
        <button>Click Here</button>
      </Greeting>
      <Greeting name='Usama' age='30'>
        <p>Insurance Officer</p>
      </Greeting>
      <Greeting name='Saad' age='29'>
        <p>IT Network Assistance</p>
      </Greeting> */}
    </div>
  );
}

export default App;
