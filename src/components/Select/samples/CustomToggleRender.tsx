import React, { useState } from "react";
import { Select } from "..";
import { sampleOptions } from "./sampleOptions";

export const CustomToggleRender = () => {
    const [value, setValue] = useState<any[]>(["supper"]);
    return <><Select
        value={value}
        toggleIcon={({ open }) => value.length === 0 ? <span>☹</span> : <span>{open ? "?" : "☺"}</span>}
        onSelect={e => setValue(e.target.value)}
        options={sampleOptions} />
        <div><p /><i>* no vibe- no smile :)</i></div>
    </>;
};

