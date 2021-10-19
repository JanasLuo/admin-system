import { __extends } from 'tslib'
import * as React from 'react'
import { Result, Button } from 'antd'
var NotFound = /** @class */ (function (_super) {
  __extends(NotFound, _super)
  function NotFound(props) {
    var _this = _super.call(this, props) || this
    _this.goBack = function () {
      _this.props.history.goBack()
    }
    _this.state = {}
    return _this
  }
  NotFound.prototype.render = function () {
    var _this = this
    return React.createElement(Result, {
      status: '404',
      title: '404',
      subTitle:
        '\u62B1\u6B49, \u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u7CFB\u7EDF\u7BA1\u7406\u5458\u3002',
      extra: React.createElement(
        Button,
        {
          onClick: function () {
            return _this.goBack()
          },
          type: 'primary'
        },
        '\u8FD4\u56DE'
      )
    })
  }
  return NotFound
})(React.Component)
export default NotFound
