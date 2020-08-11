import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    color: #a8a8b3;

    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;

      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;

        color: #3d3d4d;
      }

      p{
        font-size: 18px;

        margin-top: 4px;

        color: #737380;
      }
    }

  }

  ul {
    display: flex;

    margin-top: 40px;

    list-style: none;

    li {
      strong {
        display: block;

        font-size: 36px;
      }

      span {
        display: block;

        margin-top: 4px;

        color: #6c6c80;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
