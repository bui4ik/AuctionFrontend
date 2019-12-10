import styled from 'styled-components';
import {Icon, Typography} from "antd";
const { Title } = Typography;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #e3f2fd;
`;

export const Content = styled.div`
  margin: auto 0 auto 0;
  padding: 10px;
  border-radius: 20px;
  border: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled(Icon)`
  font-size: 50px;
  color: #ff5722;
  margin-bottom: 10px;
`;

export const Heading = styled(Title)`

`;
