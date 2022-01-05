
import styled from "@emotion/styled/";

// $dark-grey: #363636;
// $light-grey: #d8d8d8;

export const LoginMain = styled.div`
align-items: center;
background-color: #5c62c5;
display: flex;
justify-content: center;
margin: 0px;
height: 100vh;
width: 100vw;
`;

export const LoginBoxContainer =styled.div`
background-color: #fff;
box-shadow: 0px 3px #363636;
border-radius: 8px;
padding: 20px;
width: 300px;
`;
export const LoginTitle = styled.h3`
color: darken($color: #5c62c5, $amount: 20);
margin-bottom: 20px;
`;
export const LoginForm = styled.form`
`;

export const LoginInput = styled.input`
color: #363636;
border: 0px;
border-bottom: 1px solid #d8d8d8;
font-size: 16px;
height: 20px;
width: 100%;
margin-bottom: 10px;

transition: border-bottom 0.3s ease;
&:focus {
  outline: none;
  border-bottom: 1px solid #5c62c5;
}
`;
export const LoginButton = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 7px 10px 7px 10px;
  background-color: #5c62c5;
  border-radius: 3px;
  margin-top:5px;

  // transition: background-color 0.3s ease;
  // &:focus {
  //   outline: none;
  // }
  &:hover {
   //background-color: darken($color: #5c62c5, $amount: 15);
   background-color:#3e44ad;
  }

  // &:disabled {
  //   background-color: lighten($color: #5c62c5, $amount: 1);
  // }

`;