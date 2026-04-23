import { useState } from "react";
import Radio from "./Radio";

const RadioDemo = () => {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex flex-col gap-3">
      <Radio
        label="Option 1"
        name="group"
        value="option1"
        selected={selected}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="Option 2"
        name="group"
        value="option2"
        selected={selected}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        label="Option 3"
        name="group"
        value="option3"
        selected={selected}
        onChange={(e) => setSelected(e.target.value)}
      />
    </div>
  );
};

export default RadioDemo;
