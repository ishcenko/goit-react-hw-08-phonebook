import styled from 'styled-components';

export const StyledForm = styled.form`
  background: #fff;
  padding: 2em 2em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
  @media (min-width: 768px) {
    padding: 4em 4em 2em;
  }

  .form-title {
    margin: 0 0 50px 0;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    color: darken(#e5e5e5, 50%);
    border-bottom: solid 1px #e5e5e5;
  }
`;
export const Paragraph = styled.p`
  margin: 0 0 3em 0;
  position: relative;
  font-family: sans-serif;
  font-size: 14px;
`;
export const Floatlabel = styled.label`
  position: absolute;
  left: 8px;
  top: 12px;
  color: #999;
  font-size: 16px;
  display: inline-block;
  padding: 4px 10px;
  font-weight: 400;
  background-color: transparent;
  @include transition(color 0.3s, top 0.3s, background-color 0.8s);
  &.floatLabel {
    top: -11px;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }
`;
export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  margin: 0;
  background: #fff;
  border: 1px solid #dbdbdb;
  font-size: 1.2em;
  padding: 0.8em 0.5em;
  border-radius: 2px;
  @media (min-width: 768px) {
    font-size: 1.6em;
  }
`;
export const Button = styled.button`
  background: green;
  box-shadow: 0 3px 0 0 grey;
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  outline: none;
  padding: 10px 15px;
  text-shadow: 0 1px #3616ef;

  &:hover {
    background: blue;
    color: #fff;
  }
`;
