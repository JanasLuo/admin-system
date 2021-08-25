import React, { useState } from 'react'
import { Row, Col, Button, Divider, message, Upload } from 'antd'
import {
  // UploadOutlined,
  LoadingOutlined,
  PlusOutlined
} from '@ant-design/icons'
import Icon from '@ant-design/icons'

const { Dragger } = Upload
const UploadPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<any>()
  const uploadIcon1 = () => (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // fill-rule="evenodd"
        // clip-rule="evenodd"
        d="M7.85355 1.14652L7.5 0.792969L7.14645 1.14652L3.14645 5.14652L3.85355 5.85363L7 2.70718V12.0001H8V2.70718L11.1464 5.85363L11.8536 5.14652L7.85355 1.14652ZM1 10.0001V13.5001V14.0001H1.5H13.5H14V13.5001V10.0001H13V13.0001H2V10.0001H1Z"
        fill="currentColor"
        width="1em"
        height="1em"
        // fillOpacity="0.48"
      />
    </svg>
  )
  const UploadIcon = (props: any) => <Icon component={uploadIcon1} {...props} />
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
  const props1: any = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }: any) {
      if (file.status !== 'uploading') {
        console.log(file, fileList)
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png'
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png'
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png'
      }
    ]
  }
  function getBase64(img: any, callback: any) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  function beforeUpload(file: any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }
  function handleChange(info: any) {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url: any) => {
        setImageUrl(url)
        setLoading(false)
      })
    }
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  const props2 = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
  return (
    <div>
      <h1>Upload</h1>
      <Divider />
      <h1>Components</h1>
      <Divider />

      <Row>
        <Col span={4}>Upload button</Col>
        <Col span={4}>
          <Upload {...props}>
            <Button icon={<UploadIcon />}>Click to Upload</Button>
          </Upload>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Upload Normal</Col>
        <Col span={12}>
          <Upload {...props1}>
            <Button icon={<UploadIcon />}> Upload</Button>
          </Upload>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Upload</Col>
        <Col span={12}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>Upload</Col>
        <Col span={12}>
          <Dragger {...props2}>
            <p className="ant-upload-drag-icon">
              <UploadIcon />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Dragger>
        </Col>
      </Row>
      <Divider />
    </div>
  )
}
export default UploadPage
