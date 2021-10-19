import { __extends } from 'tslib'
import * as React from 'react'
import { Spin } from 'antd'
var Loading = /** @class */ (function (_super) {
  __extends(Loading, _super)
  function Loading() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Loading.prototype.render = function () {
    return React.createElement(Spin, {
      tip: '\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E...',
      spinning: true
    })
  }
  return Loading
})(React.Component)
export default Loading
var SuspenseLoading = /** @class */ (function (_super) {
  __extends(SuspenseLoading, _super)
  function SuspenseLoading() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  SuspenseLoading.prototype.render = function () {
    var loadComponent = React.createElement(
      'div',
      { className: 'spin-main' },
      React.createElement(Spin, {
        tip: '\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E...',
        spinning: true,
        delay: 300
      })
    )
    return loadComponent
  }
  return SuspenseLoading
})(React.Component)
export { SuspenseLoading }
