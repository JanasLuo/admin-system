import { __extends } from 'tslib'
import React from 'react'
import { Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'
/*
  调用方式：
  <ErrorBoundary render={ (error,errorInfo) => <p>{ '加载时发生错误' }</p> }>
      <Children />
  </ErrorBoundary>
*/
// interface ErrorProps {
//   render: (error: any, errorInfo: any) => React.ReactNode
// }
var ErrorBoundary = /** @class */ (function (_super) {
  __extends(ErrorBoundary, _super)
  function ErrorBoundary(props) {
    var _this = _super.call(this, props) || this
    _this.back = function () {
      _this.props.history.goBack()
    }
    _this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
    return _this
  }
  /**
   * 方案一：生命周期函数
   * 子元素发生错误时触发
   */
  ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }
  /* 方案二：静态函数 */
  // public static getDerivedStateFromError(error: any) {
  //   console.log('error', error)
  //   return {
  //     hasError: true,
  //     error
  //   }
  // }
  ErrorBoundary.prototype.componentWillUnmount = function () {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }
  ErrorBoundary.prototype.render = function () {
    if (this.state.hasError) {
      return (
        // <div>{this.props.render(this.state.error, this.state.errorInfo)}</div>
        React.createElement(Result, {
          status: '500',
          subTitle: '\u52A0\u8F7D\u65F6\u53D1\u751F\u9519\u8BEF',
          extra: React.createElement(
            Button,
            { onClick: this.back, type: 'primary' },
            '\u8FD4\u56DE'
          )
        })
      )
    }
    return this.props.children
  }
  return ErrorBoundary
})(React.Component)
export default withRouter(ErrorBoundary)
