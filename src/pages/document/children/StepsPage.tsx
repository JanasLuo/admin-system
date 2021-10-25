/** @format */

import React from 'react'
import { Steps, message, Row, Col, Divider } from 'antd'
const { Step } = Steps
const StepPage = () => {
  return (
    <div>
      <h1>Steps</h1>
      <h3>Normal</h3>
      <div>
        <Steps current={1}>
          <Step
            title="Finished"
            // description="This is a description."
          />
          <Step
            title="In Progress"
            // subTitle="Left 00:00:08"
            // description="This is a description."
          />
          <Step
            title="Waiting"
            // description="This is a description."
          />
        </Steps>
      </div>
      {/* <h6>Small</h6>
      <div>
        <Steps current={1} size="small">
          <Step title="Finished" description="This is a description." />
          <Step
            title="In Progress"
            subTitle="Left 00:00:08"
            description="This is a description."
          />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div> */}
    </div>
  )
}
export default StepPage
