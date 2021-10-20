/*
 * @Author: janasluo
 * @Date: 2020-02-22 09:55:08
 * @LastEditTime: 2021-10-20 11:02:45
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/components/Button/Button.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps } from './button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  btnType: 'default'
}

export const Secondary = Template.bind({})
Secondary.args = {
  btnType: 'primary'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  btnType: 'default'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  btnType: 'primary'
}
