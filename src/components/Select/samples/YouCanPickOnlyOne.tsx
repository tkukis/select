import React, { useState } from "react";
import { Select } from "..";
import { sampleOptions } from "./sampleOptions";

export const YouCanPickOnlyOne = () => {
    const [value, setValue] = useState<any[]>([]);
    const skirt = value[0];
    const src = `/skirts/${skirt}.png`;
    return <>
        <h2>Ability to select only one option can bring some fun</h2>
        My favorite skirt is <Select
            value={value}
            onSelect={e => setValue(e.target.value)}
            onlyOneSelect={true}
            options={[
                { value: "above", label: "above" },
                { value: "below", label: "below" },
                { value: "knee", label: "knee" },
                { value: "maxi", label: "maxi" },
                { value: "micro", label: "micro" },
                { value: "midi", label: "midi" },
                { value: "mini", label: "mini" },
            ]} />
        <p>{skirt && <img src={src} />}</p>
    </>;
};
