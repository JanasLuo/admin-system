/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 19:22:41
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-28 18:21:06
 */
/** @format */

import React from 'react'
import { Row, Col, Divider, Button } from 'antd'
import HzNotifications from 'src/components/HzNotifications'
import HzMessage from 'src/components/HzMessage'

const NotificationsPage = () => {
  return (
    <div>
      <h3>Message</h3>
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.info({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Normal
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Caution</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.warning({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Caution
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Error</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.error({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Error
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Success</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.success({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Success
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Loading</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.loading({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Loading
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Progress</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.progress({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Progress
          </Button>
        </Col>
      </Row>
      <Divider />

      <h3>Multi line message</h3>
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzNotifications.open({
                description:
                  'Informational Notes with additional description and information about copywriting.'
              })
            }
          >
            Normal
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>With button</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzNotifications.open({
                description:
                  'Informational Notes with additional description and information about copywriting.',
                showOkBtn: true,
                btnText: 'I know'
              })
            }
          >
            With button
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>With title</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzNotifications.open({
                message: 'Informational Notes',
                description:
                  'Informational Notes with additional description and information about copywriting.'
              })
            }
          >
            With title
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>With title & button</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzNotifications.open({
                message: 'Informational Notes',
                description:
                  'Informational Notes with additional description and information about copywriting.',
                showOkBtn: true,
                btnText: 'I know'
              })
            }
          >
            With title & button
          </Button>
        </Col>
      </Row>
      <Divider />

      <h3>Cross row message</h3>
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.systemInfo({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Normal
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Caution</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.systemSuccess({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Caution
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Error</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.systemWarning({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Error
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Success</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.systemSuccess({
                duration: 1000000,
                content: 'Single line message'
              })
            }
          >
            Success
          </Button>
        </Col>
      </Row>
      <Divider />

      <h3>Message</h3>
      <Row>
        <Col span={4}>Normal</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.info({
                duration: 1000000,
                content: 'Single line message',
                showViewDetail: true
              })
            }
          >
            Normal
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Caution</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.warning({
                duration: 1000000,
                content: 'Single line message',
                showViewDetail: true
              })
            }
          >
            Caution
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Error</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.error({
                duration: 1000000,
                content: 'Single line message',
                showViewDetail: true
              })
            }
          >
            Error
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Success</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.success({
                duration: 1000000,
                content: 'Single line message',
                showViewDetail: true
              })
            }
          >
            Success
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Loading</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.loading({
                duration: 1000000,
                content: 'Single line message',
                showViewDetail: true
              })
            }
          >
            Loading
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Progress</Col>
        <Col span={4}>
          <Button
            onClick={() =>
              HzMessage.progress({
                duration: 1000000,
                content: 'Single line message',
                showViewDetail: true
              })
            }
          >
            Progress
          </Button>
        </Col>
      </Row>
      <Divider />
    </div>
  )
}
export default NotificationsPage
