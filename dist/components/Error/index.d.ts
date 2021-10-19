import React from 'react'
declare class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any)
  /**
   * 方案一：生命周期函数
   * 子元素发生错误时触发
   */
  componentDidCatch(error: any, errorInfo: any): void
  componentWillUnmount(): void
  back: () => void
  render(): {} | null | undefined
}
declare const _default: React.ComponentClass<
  Pick<any, string | number | symbol> & {
    wrappedComponentRef?:
      | ((instance: ErrorBoundary | null) => void)
      | React.RefObject<ErrorBoundary>
      | null
      | undefined
  },
  any
> &
  import('react-router').WithRouterStatics<typeof ErrorBoundary>
export default _default
