import styled from 'styled-components';
import { Field } from 'react-final-form';
import { Alert } from 'antd';

export const Content = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  margin-right: 20px;
`;

export const ErrorMessage = styled(Alert)`
  margin-bottom: 20px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  color: black;
  margin-right: 20px;
  width: 100px;
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  color: #fff;
  background-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid transparent;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  min-width: 100px;
  max-width: 150px;
  transition: 0.7s ease;
  cursor: pointer;
  
  &:hover{
    background-color: #40a9ff;
  }
  
  &:disabled{
    background: #e8e8e8;
    color: #8c8c8c;
    border: 1px solid #d9d9d9;
    cursor: not-allowed;
  }
`;


export const DeleteButton = styled.button`
  margin-top: 20px;
  color: #fff;
  background-color: #ff4d4f;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid transparent;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  min-width: 100px;
  max-width: 150px;
  transition: 0.7s ease;
  cursor: pointer;
  
  &:hover{
    background-color: #ff7875;
  }
`;

export const ChangePhotoContainer = styled.div`
  display: flex;
`;

export const PhotoLoaderContainer = styled.div`
  height: 350px;
  width: 350px;
`;
