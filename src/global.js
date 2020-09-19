import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
  }
  /* .theme,.new, .topbar,.seacrh-input,.search,.filter-button, .dropdown-menu,.dropdown-item, .btn:hover,.country-card,.border-button,a:hover {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.color};
  } */
  .theme,.theme:hover {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.color};
  }
  .regular-text{
    color:${({ theme }) => theme.regtext};
  }
  ::placeholder,input:focus,input,select{
    color: ${({ theme }) => theme.color};
  }
  `;
