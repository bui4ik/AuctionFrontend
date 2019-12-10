import styled from "styled-components";
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title } = Typography;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const TableName = styled(Title)`
  margin-bottom: 0 !important;
`;

export const AddItemLink = styled(NavLink)`
  margin-right: 0;
  margin-left: auto;
`;
