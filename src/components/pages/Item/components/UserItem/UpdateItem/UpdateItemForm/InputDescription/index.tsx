import React from "react";
import { Form, Input } from "antd";

const InputDescription = ({form:{isFieldTouched, getFieldError, getFieldDecorator}, description}: any) => {
  const descriptionError = isFieldTouched('description') && getFieldError('description');
  return (
    <Form.Item label='Item description' validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
      {getFieldDecorator('description', {
        rules: [{ required: true, min: 3}],
        initialValue: description
      })(
        <Input placeholder="description" />
      )}
    </Form.Item>
  )
};

export default InputDescription
