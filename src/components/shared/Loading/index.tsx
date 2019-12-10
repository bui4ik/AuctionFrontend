import React from 'react';
import { Icon, Spin } from 'antd';
import * as S from './styles'
const antIcon = <Icon type="loading" style={{ fontSize: 58 }} spin />;

const Loading = () => (
  <S.SpinWrapper>
    <Spin indicator={antIcon} />
  </S.SpinWrapper>
);

export default Loading;
