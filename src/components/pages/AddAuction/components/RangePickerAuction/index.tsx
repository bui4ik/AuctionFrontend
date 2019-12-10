import React from 'react'
import { DatePicker, Form } from "antd";
const { RangePicker } = DatePicker;

const RangePickerAuction = ({form: {getFieldDecorator, isFieldTouched, getFieldError }}:any) => {
  const auctionTimeError = isFieldTouched('auctionTime') && getFieldError('auctionTime');
  return (
    <Form.Item label='Auction time' validateStatus={auctionTimeError ? 'error' : ''} help={auctionTimeError || ''}>
      {getFieldDecorator('auctionTime', {
        rules: [
          {
            required: true,
          },
        ],
      })( <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        placeholder={['Start Time', 'End Time']}
      />)}
    </Form.Item>
  )
};

export default RangePickerAuction
