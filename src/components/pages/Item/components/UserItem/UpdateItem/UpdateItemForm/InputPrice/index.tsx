import React from "react";
import { Form, InputNumber } from "antd";


const InputPrice = ({form:{isFieldTouched, getFieldError, getFieldDecorator}, price}: any) => {
  const priceError = isFieldTouched('price') && getFieldError('price');
  return (
    <Form.Item label="Price" validateStatus={priceError ? 'error' : ''} help={priceError || ''}>
      {getFieldDecorator('price', {
        rules: [{ required: true }],
        initialValue: price
      })(
        <InputNumber
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          // @ts-ignore
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
        />,
      )}
    </Form.Item>
  )
};

export default InputPrice
