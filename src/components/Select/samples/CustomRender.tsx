import React, { useState } from "react";
import { Select } from "..";
import { sampleOptions } from "./sampleOptions";

export const CustomRender = () => {
    const [value, setValue] = useState<any[]>([]);
    return <Select
        style={{ minWidth: 600, backgroundColor: "#00B1E1" }}
        value={value}
        valuesRender={props => {
            return <>{props.options.map(op => {
                return props.value.includes(op.value) ? <span>{op.label} </span> : <s>{op.label} </s>;
            })}!!!</>;
        }}
        onSelect={e => setValue(e.target.value)}
        options={sampleOptions} />;
};
