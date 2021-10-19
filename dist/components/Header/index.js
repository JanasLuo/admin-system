/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-15 11:35:57
 * @LastEditors: janasluo
 * @LastEditTime: 2021-09-30 17:04:35
 */
import React from 'react'
// import { observer } from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0
import styles from './index.styl'
import UserStore from 'src/stores/modules/user'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
var Header = function (props) {
  var header = styles.header,
    right_box = styles.right_box,
    user_name = styles.user_name,
    notification = styles.notification,
    setting = styles.setting,
    help = styles.help,
    logout = styles.logout,
    user_header = styles.user_header
  return React.createElement(
    'div',
    { className: 'header-main ' + header + ' ' },
    React.createElement(
      Button,
      {
        type: 'primary',
        onClick: function () {
          return props.history.push('/base_comp')
        }
      },
      '\u57FA\u7840\u7EC4\u4EF6'
    ),
    React.createElement(
      'div',
      { className: right_box },
      React.createElement('span', { className: user_header }),
      React.createElement(
        'span',
        { className: user_name },
        UserStore.getAccount().name || '警官'
      ),
      React.createElement('span', { className: notification }),
      React.createElement('span', { className: setting }),
      React.createElement('span', { className: help }),
      React.createElement('a', {
        className: logout,
        href: '/api/cube_base/userInfo/user_logout'
      })
    )
  )
}
export default withRouter(Header)
