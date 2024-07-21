import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "small" | "medium";
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  icon,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease;

  ${({ fullWidth }) => fullWidth && `width: 100%;`}

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          padding: 0.25rem 0.875rem;
          font-size: 0.875rem;
          @media (max-width: 426px) {
            padding: .2rem .6rem;
            font-size: .75rem;
          }
        `;
      default:
        return `
          padding: 0.5rem 1rem;
          font-size: 1rem;
          @media (max-width: 426px) {
            padding: .4rem .8rem;
            font-size: .875rem;
          }
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case "ghost":
        return `
          background-color: transparent;
          color: ${theme.text};
          border: none;
          &:hover {
            background-color: ${theme.hover};
          }
          &:active {
            box-shadow: ${theme.boxShadow};
          }
        `;
      default:
        return `
          background-color: transparent;
          color: ${theme.text};
          border: none;
          box-shadow: ${theme.boxShadow};
          &:hover {
            background-color: ${theme.hover};
          }
          &:active {
            box-shadow: 0 0 1px 1px ${theme.text} inset;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;
