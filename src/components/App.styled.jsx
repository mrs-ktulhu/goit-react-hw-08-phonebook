import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .error {
    padding: 20px;
    font-size: 24px;
    border: 1px solid black;
    background-color: red;
    color: white;
  }

  .header-link {
    color: black;
    display: inline-block;
    padding: 20px;
    font-size: 22px;
    text-decoration: none;
    margin-right: 15px;

    transition: all 0.3s;

    &.hover,
    &.focus {
      text-decoration: line-through double;
      color: black;
    }

    &.active {
      color: #c90e97;
    }
  }
  .header-container {
    margin: 0 auto;
    -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.17);
    box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.17);
  }

  .goBack {
    margin-bottom: 10px;
  }
`;
