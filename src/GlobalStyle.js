import { css, Global } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

      body {
        margin: 0;
        padding: 0;
      }

      #root {
        font-family: 'Noto Sans KR', sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
