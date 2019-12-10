import React, { ReactNode } from 'react';
import * as S from './styles';

interface IProps {
  children: ReactNode;
  title: string;
}

const AuthenticationLayout = ({ children, title }: IProps) => (
  <S.Container>
    <S.Content>
      <S.Logo type="fire" />
      <S.Heading level={4}>{title}</S.Heading>
      {children}
    </S.Content>
  </S.Container>
);

export default AuthenticationLayout;
