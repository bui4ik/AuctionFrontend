import React from 'react';
import { Descriptions } from 'antd';
import * as selectors from '../../../../../store/user/selectors';
import { connect } from 'react-redux';

interface IProps {
  name: string;
  surname: string;
  email: string;
}

const ProfileInfo = ({ name, surname, email }: IProps) => (
  <Descriptions title="Profile Info">
    <Descriptions.Item label="Name">{name}</Descriptions.Item>
    <Descriptions.Item label="Surname">{surname}</Descriptions.Item>
    <Descriptions.Item label="Email">{email}</Descriptions.Item>
  </Descriptions>
);

const mapStateToProps = (state: any) => {
  return {
    name: selectors.nameSelector(state),
    surname: selectors.surnameSelector(state),
    email: selectors.emailSelector(state),
  };
};

export default connect(mapStateToProps)(ProfileInfo);
