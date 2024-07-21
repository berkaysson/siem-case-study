import styled from "styled-components";
export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 320px;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  h1 {
    color: ${(props) => props.theme.text};
    font-size: 1.2rem;
  }

  .link {
    color: ${(props) => props.theme.textAlt};
    font-size: 0.875rem;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 0.25rem;

    &:hover {
      color: ${(props) => props.theme.text};
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  label {
    color: ${(props) => props.theme.textAlt};
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  button {
    margin-top: 1rem;
  }
`;
