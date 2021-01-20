import css from 'styled-jsx/css';
import * as vars from 'styles/vars';

export default css`
  .current-wave {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 3px solid white;
    border-radius: 50%;
    overflow: hidden;

    &__size {
      flex: 2;
      font-size: ${vars.waveSizeFontSize}px;
      color: ${vars.numberFontColor};
      width: 100%;
      text-align: center;
      line-height: 100%;
    }

    &__air-temp {
      flex: 1;
      font-size: ${vars.numberFontSize}px;
      color: ${vars.numberFontColor};
      width: 100%;
      text-align: center;
      line-height: 100%;
      background-color: ${vars.airColor};
    }

    &__sea-temp {
      flex: 1;
      font-size: ${vars.numberFontSize}px;
      color: ${vars.numberFontColor};
      width: 100%;
      text-align: center;
      line-height: 100%;
      background-color: ${vars.seaColor};
    }
  }
`;
