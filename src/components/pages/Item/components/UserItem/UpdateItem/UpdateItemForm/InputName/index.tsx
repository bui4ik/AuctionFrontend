import React from "react";
import { Form, Input } from "antd";

const InputName = ({form:{isFieldTouched, getFieldError, getFieldDecorator}, name}: any) => {
  const nameError = isFieldTouched('name') && getFieldError('name');
  return(
    <Form.Item label='Item name' validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
      {getFieldDecorator('name', {
        rules: [{ required: true, min: 3}],
        initialValue: name
      })(
        <Input placeholder="name" />
      )}
    </Form.Item>
  )
};

export default InputName
