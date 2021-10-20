/*
 * @Author: janasluo
 * @Date: 2021-10-08 15:16:42
 * @LastEditTime: 2021-10-12 11:13:28
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/components/Button/Button.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Example/Button',
  component: Button,
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'red', value: '#f00' },
  //       { name: 'green', value: '#0f0' },
  //       { name: 'blue', value: '#00f' }
  //     ]
  //   }
  // },
  argTypes: {
    backgroundColor: {
      // defaultValue: 'red',
      control: 'color'
    }
  }
  // decorators: [
  //   Story => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   )
  // ]
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
Primary.argTypes = {
  backgroundColor: {
    defaultValue: 'red',
    control: 'color'
  }
}
Primary.decorators = [
  Story => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
]
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' }
    ]
  }
}
export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
