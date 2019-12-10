import React, { Component } from 'react';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import { Typography } from 'antd';
import AddItemForm from './AddItemForm';
const { Title } = Typography;

class AddItem extends Component {
  render() {
    return (
      <DefaultPageLayout>
        <Title>Add item</Title>
        <AddItemForm />
      </DefaultPageLayout>
    );
  }
}

export default AddItem;
