import React from "react";
import Window from "./Window/Window";
import Windows from "./Windows/Windows";

import DemoForm from "./demo/DemoForm";
import DemoText from "./demo/DemoText";
import DemoHeader from "./demo/DemoHeader";
import DemoImage from "./demo/DemoImage";

function App() {
  return (
    <React.Fragment>
      <Windows>
        <DemoHeader />
        <Window name="Beach Image" iconImageSrc="images/beach-small.jpeg">
          <DemoImage src="images/beach.jpeg" alt="Beach" />
        </Window>
        <Window name="Lorem Ipsum" iconImageSrc="images/notepad.png">
          <DemoText />
        </Window>
        <Window name="River Image" iconImageSrc="images/river-small.jpeg">
          <DemoImage src="images/river.jpeg" alt="River" />
        </Window>
        <Window name="Demo Form" iconImageSrc="images/form.png">
          <DemoForm />
        </Window>
      </Windows>
    </React.Fragment>
  );
}

export default App;
