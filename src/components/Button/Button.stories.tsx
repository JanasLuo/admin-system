/*
 * @Author: janasluo
 * @Date: 2021-10-08 15:16:42
 * @LastEditTime: 2021-10-26 11:59:16
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/components/Button/button.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      // defaultValue: 'red',
      control: 'color'
    }
  },
  args: {
    type: 'primary',
    size: 'default',
    onClick: () => {}
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>button</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  // type: 'primary',
  // size: 'large',
  // onClick: () => {}
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  type: 'default'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  type: 'default'
}
