import React, { useState } from "react";
import { Select } from "..";
import { sampleOptions } from "./sampleOptions";

export const Disabled = () => {
    const [value, setValue] = useState<any[]>(["amazed"]);
    const [disabled, setDisabled] = useState<boolean>(true);
    return <div>
        <Select
            disabled={!disabled}
            value={value}
            onSelect={e => setValue(e.target.value)}
            options={sampleOptions} />
        <div>
            <input type="checkbox" checked={!disabled} onClick={() => setDisabled(!disabled)} /> Disabled
        </div>
    </div>
};
