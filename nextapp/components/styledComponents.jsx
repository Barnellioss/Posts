import styled from 'styled-components'

const Button = styled.button`
color: #fff;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #fff;
border-radius: 3px;
background-color: #00008B;
cursor: pointer;
outline: none;
`;

export const TomatoButton = styled(Button)`
  color: #fff;
  max-width: 200px;
  border-color: #00008B;
  margin: 10px auto 10px;
`;



export const DeleteBtn = styled(Button)`
  color: #fff;
  background-color: #F44336; 
  max-width: 100px;
  font-size: 18px;
  margin: 10px 10px;
`;



export const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
    border: 2px solid #00008B;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;


export const TextArea = styled.textarea.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
    border: 2px solid #00008B;
    margin: ${props => props.size};
    padding: ${props => props.size};
    resize: none;
  `;

  export const EditButton = styled(Button)`
  color: #3498DB;
  background-color: transparent;
  border-color: #3498DB;
`;


