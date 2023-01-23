import React, { useState } from "react";
import { Select } from "..";
import { sampleOptions } from "./sampleOptions";

export const OpenClose = () => {
    const [value, setValue] = useState<any[]>(["supper"]);
    return <div>
        <p>
            You can attach to open and close events to rise scary alerts.
        </p>
        <Select
            value={value}
            onClose={() => alert("Closed!")}
            onOpen={() => alert("Opened!")}
            onSelect={e => setValue(e.target.value)}
            options={sampleOptions} />
    </div>;
};
