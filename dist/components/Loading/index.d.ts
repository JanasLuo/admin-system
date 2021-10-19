import * as React from 'react'
export default class Loading extends React.Component<{}, {}> {
  render(): JSX.Element
}
export declare class SuspenseLoading extends React.Component<{}, {}> {
  render(): React.ReactElement<
    any,
    | string
    | ((
        props: any
      ) => React.ReactElement<
        any,
        string | any | (new (props: any) => React.Component<any, any, any>)
      > | null)
    | (new (props: any) => React.Component<any, any, any>)
  >
}
