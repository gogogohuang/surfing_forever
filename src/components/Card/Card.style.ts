import css from 'styled-jsx/css';

export default css`
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    margin: 1em;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;

    h2 {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 0.5em;
      transition: 0.3s;
    }

    &:hover {
      box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;
