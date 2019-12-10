import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import AuthenticationLayout from '../../layouts/AuthenticationLayout';
import routes from '../../../config/routes';
import * as S from './styles';

const Login = () => (
  <AuthenticationLayout title="Sign in to React Auction">
    <LoginForm />
    <S.RegisterLink>
      New to React Auction? <NavLink to={routes.register}>Create an account.</NavLink>
    </S.RegisterLink>
  </AuthenticationLayout>
);

export default Login;
