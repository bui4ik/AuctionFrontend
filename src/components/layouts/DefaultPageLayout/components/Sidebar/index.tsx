import React, { Component } from 'react';
import * as S from '../../styles';
import { Icon, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../../../../config/routes';
import * as selectors from '../../../../../store/view/selectors';
import { toggleSidebarRequest } from '../../../../../store/view/actions';
import { connect } from 'react-redux';

class Sidebar extends Component<any> {
  state = {
    collapsed: false,
  };

  onCollapse = () => {
    this.props.toggleSidebar();
  };

  render() {
    const { location, isSidebarOpen } = this.props;
    return (
      <S.Sidebar collapsible collapsed={isSidebarOpen} onCollapse={this.onCollapse}>
        <S.LogoContainer>
          <S.Logo type="qq" />
        </S.LogoContainer>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Icon type="appstore" />
            <span>Main</span>
            <NavLink to={routes.root} />
          </Menu.Item>
          <Menu.Item key="/items">
            <Icon type="profile" />
            <span>Items</span>
            <NavLink to={routes.items} />
          </Menu.Item>
          <Menu.Item key="/auctions">
            <Icon type="dollar" />
            <span>Auctions</span>
            <NavLink to={routes.auctions} />
          </Menu.Item>
        </Menu>
      </S.Sidebar>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isSidebarOpen: selectors.isSidebarOpenSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleSidebar: () => dispatch(toggleSidebarRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Sidebar));
