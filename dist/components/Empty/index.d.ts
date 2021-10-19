/// <reference types="react" />
interface EmptyProps {
  /**
   * 名称
   */
  label?: string
}
/**
 * 空数据
 */
declare const Empty: {
  (props: EmptyProps): JSX.Element
  defaultProps: {
    label: string
  }
}
export default Empty
