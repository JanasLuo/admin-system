/*
 * @Description:
 * @Author: zhengjinxing
 * @Date: 2021-08-03 11:39:37
 * @LastEditTime: 2021-08-12 16:58:55
 * @LastEditors:
 */
/** @format */

import React from 'react'
import moment from 'moment'
import { Button, DatePicker, Row, Col, Divider } from 'antd'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker
const DatePickerPage = () => {
  function onChange1(date: any, dateString: any) {
    console.log(date, dateString)
  }
  function onChange2(value: any, dateString: any) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  function onOk1(value: any) {
    console.log('onOk: ', value)
  }
  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current < moment().endOf('day')
  }

  return (
    <div>
      <h1>DatePicker</h1>
      <Row>
        <Col span={4}>day</Col>
        <Col span={4}>
          <DatePicker onChange={onChange1} />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['Start Time', 'End Time']}
            onChange={onChange2}
            onOk={onOk1}
          />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>

      <Divider />
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <DatePicker showTime placeholder="Select Time" />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>

      <Divider />
      <Row>
        <Col span={4}>day 禁用时间区间</Col>
        <Col span={4}>
          <DatePicker onChange={onChange1} disabledDate={disabledDate} />
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
      <Divider />
    </div>
  )
}

export default DatePickerPage
