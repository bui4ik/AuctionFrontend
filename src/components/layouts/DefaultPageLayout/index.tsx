import React, { ReactNode } from 'react';
import { Layout, Menu, Icon } from 'antd';
import * as S from './styles';
import Sidebar from './components/Sidebar';
import { logout } from '../../../store/auth/actions';
import { connect } from 'react-redux';

interface IProps {
  children: ReactNode;
  logout: any;
}

const DefaultPageLayout = ({ logout, children }: IProps) => {
  return (
    <React.Fragment>
      <S.Wrapper>
        <Sidebar />
        <Layout>
          <S.Header>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
              <Menu.Item style={{ float: 'right' }} key="1" onClick={logout}>
                <Icon type="logout" />
                <span>Log out</span>
              </Menu.Item>
            </Menu>
          </S.Header>
          <S.Content>{children}</S.Content>
          <S.Footer>React Auction ©2019 Created by Max</S.Footer>
        </Layout>
      </S.Wrapper>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(DefaultPageLayout);
