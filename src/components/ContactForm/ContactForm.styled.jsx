import styled from '@emotion/styled'

export const Container = styled.div`
  display: inline-flex;
  align-items:center;
  flex-direction: column;
  border: solid 1px black;
  padding: 15px;
  width: 300px;
`;

export const FormInput = styled.label`
  display: contents;
  input {
    margin: 5px 0 15px 0;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width:100%;
`;