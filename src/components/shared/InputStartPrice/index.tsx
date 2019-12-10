import React from 'react'
import { Form, InputNumber } from "antd";

const InputStartPrice = ({form: {getFieldDecorator, isFieldTouched, getFieldError }, price}: any) => {
  const startPriceError = isFieldTouched('startPrice') && getFieldError('startPrice');
  return (
    <Form.Item label='Start price' validateStatus={startPriceError ? 'error' : ''} help={startPriceError || ''}>
      {getFieldDecorator('startPrice', {
        rules: [{required: true}],
        initialValue: price && price
      })(
        <InputNumber
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
        />
      )}
    </Form.Item>
  )
};

export default InputStartPrice
