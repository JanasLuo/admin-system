/*
 * @Author: janasluo
 * @Date: 2021-10-08 15:16:42
 * @LastEditTime: 2021-10-26 11:49:13
 * @LastEditors: janasluo
 * @Description:
 * @FilePath: /digital_police/Users/janas/work/project/frontend/admin-system/src/components/Empty/Empty.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Empty from './'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Example/Empty',
  component: Empty,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
} as ComponentMeta<typeof Empty>

const Template: ComponentStory<typeof Empty> = args => <Empty {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: '暂无数据'
}
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
  label: '暂无数据'
}
