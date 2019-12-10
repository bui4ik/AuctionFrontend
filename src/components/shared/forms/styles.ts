import styled from "styled-components";

export const Error = styled.div`
  padding: 15px 20px;
  color: #86181d;
  background-color: #ffdce0;
  border: 1px solid rgba(27,31,35,.15);
  border-radius: 7px;
  width: 300px;
  text-align: center;
  font-size: 13px;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  margin-top: 5px;
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  width: 100%;
  
  & > input {
    margin-top: 5px;
    padding: 1em;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
`;


