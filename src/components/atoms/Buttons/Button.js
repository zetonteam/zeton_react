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
`;

export default Button;
