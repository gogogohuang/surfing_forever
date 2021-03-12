import css from 'styled-jsx/css';

export default css`
  @keyframes pulse-animation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }

  .loading-skelton {
    height: 100%;
    width: 100%;
    animation: pulse-animation 1.5s ease-in-out 0.5s infinite;
    background-color: rgba(0, 0, 0, 0.11);
  }
`;
