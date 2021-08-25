/** @format */
import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const FromPage = () => {
  const [form] = Form.useForm()
  return (
    <div>
      <Form form={form} name="horizontal_login" layout="inline">
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          <Button type="primary" size="small">
            Log in
          </Button>
        </Form.Item>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remind me</Checkbox>
          </Form.Item>
          <span className="login-form-forgot">
            Forgot password
          </span>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          New user?<span>register now!</span>
        </Form.Item>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <Form
        form={form}
        name="register"
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86'
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(_: any, value: any) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                )
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col>
              <Form.Item
                name="captcha"
                label="Captcha"
                rules={[
                  {
                    required: true,
                    message: 'Please input the captcha you got!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Button>CAPTCHA</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('Should accept agreement')
            }
          ]}
        >
          <Checkbox>
            I have read the <span>agreement</span>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            button
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default FromPage
