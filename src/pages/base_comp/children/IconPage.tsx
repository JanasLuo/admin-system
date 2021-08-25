/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-25 14:10:20
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-25 17:58:01
 */

/** @format */

import React from 'react'
import { Row, Col, Divider } from 'antd'
import settings from 'src/utils/selection.json'
import HzMessage from 'src/components/HzMessage'
import HzIcon from 'src/components/HzIcon'

const IconPage = () => {
  const iconMap = {}
  settings.icons.forEach((i) => {
    const { name } = i.properties;
    const key = name.replace(/-(.*)?/, '')
    if (iconMap[key]) {
      iconMap[key].push(name)
    } else {
      iconMap[key] = []
    }
  })

  const onSelect = async (name: string) => {
    const text = `<HzIcon type="hz-icon-${name}" />`
    await navigator.clipboard.writeText(text)
    HzMessage.success({
      content: `${text} copied`
    })
  }

  return (
    <div>
      {
        Object.keys(iconMap).map(key => {
          return <>
            <h3>{key}</h3>
            <Row>
              {
                iconMap[key].map((j: string) => {
                  return (
                    <Col span={4} key={j}>
                      <div className="hz-icon-demo-wrapper">
                        <HzIcon type={`hz-icon-${j} hz-icon-demo-icon`} />
                        <span className="hz-icon-demo-name" title={j} onClick={() => onSelect(j)}>{j}</span>
                      </div>
                    </Col>
                  )
                })
              }

            </Row>
            <Divider />
          </>
        })
      }
    </div>
  )
}

export default IconPage
