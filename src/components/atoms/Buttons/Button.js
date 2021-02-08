import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme, outline }) =>
    outline ? "transparent" : theme.primary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  color: ${({ theme, outline }) => (outline ? theme.primary : "white")};
  border: solid 1px ${({ theme }) => theme.primary};
  width: 250px;
  height: 50px;
  padding: 17px;
  margin: 10px auto;
  line-height: 16px;
  border-radius: ${({ theme }) => theme.radius};
  letter-spacing: ${({ theme }) => theme.spacing};
  transition: 0.2s;

  @media only screen and (max-width: ${({ theme }) =>
  theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) =>
    theme.fontSize.xxs};
    width: 208px;
    height: 46px;
    padding: 12px;
  }
`;

export default Button;
