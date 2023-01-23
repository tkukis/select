import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '.';
import { CustomToggleRender } from './samples/CustomToggleRender';
import { CustomStyle } from './samples/CustomStyle';
import { OpenClose } from './samples/OpenClose';
import { YouCanPickOnlyOne } from './samples/YouCanPickOnlyOne';
import { Disabled as DisabledSample } from './samples/Disabled';
import { CustomRender } from './samples/CustomRender';

export default {
  title: 'Select',

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <div>
  <p>It can be not working and just taking place by default:

  </p>
  <Select {...args} /></div>;

export const Plain = Template.bind({});
Plain.args = {

};

export const Open_Close_Events = (() => <OpenClose />).bind({});
export const Custom_Toggle_Render = (() => <CustomToggleRender />).bind({});
export const Custom_Render = (() => <CustomRender />).bind({});
export const Custom_Inline_Style_Render = (() => <CustomStyle />).bind({});
export const You_Can_Pick_Only_One = (() => <YouCanPickOnlyOne />).bind({})

const TemplateWithSelectedValue: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<any[]>([])
  return <><div>
    <div><label>Values in select are: {JSON.stringify(value)}</label></div>
    <Select value={value} disabled={args.disabled}
      options={args.options} onSelect={e => setValue(e.target.value)} />
  </div>
  </>
};

export const Basic = TemplateWithSelectedValue.bind({});
Basic.args = {
  disabled: false,
  options: [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
    { label: "Three", value: 3 }
  ]
};







