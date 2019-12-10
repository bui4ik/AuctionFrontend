import React from 'react'
import { Button } from "antd";

const SubmitButton = ({getFieldsError, text}: any) => {

  const hasErrors = (fieldsError: any) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  return(
    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>{text}</Button>
  )
};

export default SubmitButton;
