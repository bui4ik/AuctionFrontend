import styled from 'styled-components';
import { Icon, Layout } from "antd";

export const Wrapper = styled(Layout)`
  min-height: 100vh;
  background-color: #f0f2f5;
`;

export const Sidebar = styled(Layout.Sider)`
`;

export const LogoContainer = styled.div`
  margin: 10px 15px;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const Logo = styled(Icon)`
  font-size: 40px;
  color: #64b5f6;
`;

export const Header = styled(Layout.Header)`
`;

export const Content = styled(Layout.Content)`
  margin: 16px 16px 0 16px;
  padding: 16px;
  background-color: #fff;
`;

export const Footer = styled(Layout.Footer)`
  text-align: center;
`;
