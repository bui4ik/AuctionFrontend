import React from 'react';
import { Form, InputNumber } from 'antd';

const InputMinBid = ({ form: { getFieldDecorator, isFieldTouched, getFieldError }, price }: any) => {
  const minimalBidError = isFieldTouched('minBid') && getFieldError('minBid');
  return (
    <Form.Item
      label="Minimal bid"
      validateStatus={minimalBidError ? 'error' : ''}
      help={minimalBidError || ''}
    >
      {getFieldDecorator('minBid', {
        rules: [{ required: true }],
        initialValue: price && price
      })(
        <InputNumber
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
        />,
      )}
    </Form.Item>
  );
};

export default InputMinBid;
