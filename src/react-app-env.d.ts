/// <reference types="react-scripts" />

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.mp4'
declare module '*.mp3'

declare module '*.styl'
declare module '*.json' {
  const value: any
  export default value
}
declare module 'wangeditor' {
  const wangeditor: any
  export = wangeditor
}
declare module 'leaflet-heatmap' {
  const leafletHeatmap: any
  export = leafletHeatmap
}
