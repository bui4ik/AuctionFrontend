import React from 'react'
import * as S from "./styles";
import { Button } from "antd";

const ListsHeader = ({title, link, btnDisplay}: any) => (
  <S.Header>
    <S.TableName level={2}>{title}</S.TableName>
    <S.AddItemLink to={link ? link : '#'} style={{display: `${btnDisplay}`}}>
      <Button type="primary">Create new</Button>
    </S.AddItemLink>
  </S.Header>
);

export default ListsHeader
