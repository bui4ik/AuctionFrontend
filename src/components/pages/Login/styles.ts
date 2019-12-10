import styled from "styled-components";

export const RegisterLink = styled.div`
  width: 300px;
  padding: 10px;
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid #d8dee2;
  text-align: center;
`;

export const FormContainer = styled.form`
  width: 300px;
  padding: 10px;
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid #d8dee2;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-weight: bold;
  background-color: #2185d0;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  min-height: 1em;
  padding: .78571429em 1.5em .78571429em;
  border-radius: .28571429rem;
  transition: 0.7s ease;
  
  &:hover{
    background-color: #0d71bb;
  }
  
  &:disabled{
    background: rgba(0,0,0,.25);
    color: rgba(0,0,0,.6);
  }
`;

