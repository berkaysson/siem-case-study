import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.hover};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.textAlt};
    font-size: 0.875rem;
    opacity: 0.8;
  }

  @media (max-width: 426px) {
    padding: .5rem;
    width: 200px
  }
`;

export const InputError = styled.p`
  color: #c75151b5;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;
