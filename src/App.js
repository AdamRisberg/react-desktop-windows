import React from "react";
import Window from "./Window/Window";
import Windows from "./Windows/Windows";

import DemoForm from "./demo/DemoForm";
import DemoText from "./demo/DemoText";
import DemoHeader from "./demo/DemoHeader";
import DemoImage from "./demo/DemoImage";

const smallImage1 =
  "https://images.pexels.com/photos/2217365/pexels-photo-2217365.jpeg?auto=compress&cs=tinysrgb&w=50";
const largeImage1 =
  "https://images.pexels.com/photos/2217365/pexels-photo-2217365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
const smallImage2 =
  "https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&w=50";
const largeImage2 =
  "https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

function App() {
  return (
    <React.Fragment>
      <Windows>
        <DemoHeader />
        <Window name="Beach Image" iconImageSrc={smallImage2}>
          <DemoImage src={largeImage2} alt="Beach" />
        </Window>
        <Window name="Lorem Ipsum" iconImageSrc="images/notepad.png">
          <DemoText />
        </Window>
        <Window name="River Image" iconImageSrc={smallImage1}>
          <DemoImage src={largeImage1} alt="River" />
        </Window>
        <Window name="Demo Form" iconImageSrc="images/form.png">
          <DemoForm />
        </Window>
      </Windows>
    </React.Fragment>
  );
}

export default App;
