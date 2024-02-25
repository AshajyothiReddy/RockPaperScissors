import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 14px;
  font-family: bree serif;
`

export const Paragraph = styled.p`
  color: #223a5f;
  font-size: 14px;
  font-family: ${props => props.fontFamily};
`

export const Button = styled.button`
  height: 70px;
  width: 70px;
  background-color: transparent;
  border-width: 0px;
`
export const RulesButton = styled.button`
  height: 40px;
  width: 70px;
  background-color: transparent;
  border: 1px #ffffff solid;
  color: #ffffff;
`
