import React, { useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { DropDowButton } from "./components/Dropdown/view/DropDowButton";

const App = () => {
  const [value, setValue] = useState<any[]>([])

  return (

    <div>
      <DropDowButton
        value={value}
        onSelect={e => setValue(e.target.value)}
        options={[
          { value: "a", label: "a value" },
          { value: "b", label: "b value" },
          { value: "c", label: "c value" },
        ]} /> <select >
      </select>
    </div>
  );
}

export default App;
