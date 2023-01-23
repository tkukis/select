import React, { useState } from "react";
import { Select } from "..";
import { sampleOptions } from "./sampleOptions";


const Sample = (props: { style?: React.CSSProperties }) => {
    const [value, setValue] = useState<any[]>(["supper", "ultra", "mega", "amazed"]);
    return <div><Select
        style={props.style}
        value={value}
        onSelect={e => setValue(e.target.value)}
        options={sampleOptions} />
    </div>;
}


export const CustomStyle = () => {
    return <div>
        <h2>The '80s Are Back, Baby</h2>
        <i>And inline style for select is easy as never before</i>
        <p>
            <Sample
                style={{
                    minWidth: 300,
                    backgroundColor: "#f77722"
                }}

            />
        </p>
        <p>
            <Sample
                style={{
                    minWidth: 400,
                    backgroundColor: "#faf609"
                }}

            />
        </p>
        <p>
            <Sample
                style={{
                    minWidth: 500,
                    backgroundColor: "#10fdf1"
                }}

            />
        </p>
        <p>
            <Sample
                style={{
                    minWidth: 600,
                    color: "white",
                    backgroundColor: "#2622f7"
                }}


            />
        </p>
        <p>
            <Sample
                style={{
                    minWidth: 700,
                    backgroundColor: "#cf08e9"
                }}
            />
        </p>
        <p>
            <Sample
                style={{
                    minWidth: 800,
                    backgroundColor: "#f72234"
                }}
            />
        </p>
    </div>
};
