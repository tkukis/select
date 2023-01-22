import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropDowButton } from '../components/Dropdown/view/DropDowButton';

export default {
  title: 'Drop/Button',

} as ComponentMeta<typeof DropDowButton>;

const Template: ComponentStory<typeof DropDowButton> = (args) => <DropDowButton {...args} />;

export const Plain = Template.bind({});
Plain.args = {

};

const TemplateWithSelectedValue: ComponentStory<typeof DropDowButton> = (args) => {
  const [value, setValue] = useState<any[]>([])
  return <><div>
    <div><label>Values in select are: {JSON.stringify(value)}</label></div>
    <DropDowButton value={value} disabled={args.disabled}
      options={args.options} onSelect={e => setValue(e.target.value)} />
  </div>
  </>
};

export const Primary = TemplateWithSelectedValue.bind({});
Primary.args = {
  disabled: false,
  options: [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
    { label: "Three", value: 3 }
  ]
};

