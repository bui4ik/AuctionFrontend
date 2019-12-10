import React from 'react'
import { Form, Input } from "antd";

const InputTitle = ({form: {getFieldDecorator, isFieldTouched, getFieldError }, title}:any) => {
  const titleError = isFieldTouched('title') && getFieldError('title');
  return (
    <Form.Item label='Auction title' validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
      {getFieldDecorator('title', {
        rules: [{ required: true, min: 3}],
        initialValue: title ? title : null
      })(
        <Input placeholder="title" />
      )}
    </Form.Item>
  )
};

export default InputTitle;
