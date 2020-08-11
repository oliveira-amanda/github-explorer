import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 547px;

  margin-top: 80px;

  font-size: 48px;
  line-height: 56px;

  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;

    height: 70px;

    padding: 0 24px;

    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;

    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}


  }

  button {
    width: 210px;
    height: 70px;

    border-radius: 0px 5px 5px 0px;
    border: 0;

    font-weight: bold;

    background: #04d361;
    transition: background-color 0.2s;
    color: #fff;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 24px;

    text-decoration: none;

    border-radius: 5px;

    background: #fff;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;

      margin-right: 20px;

      border-radius: 50%;
    }

    div {
      flex: 1;

      margin-left: 0 16px;

      strong {
        font-size: 20px;

        color: #3d3d4d;
      }

      p {
        margin-top: 4px;

        font-size: 18px;

        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;

  margin-top: 8px;

  color: #c53030;
`;
