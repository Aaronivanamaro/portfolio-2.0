import React, { Fragment } from 'react';
import Header from './styledContainers/header'
import Footer from './styledContainers/footer'
import Main from './styledContainers/main'
import { GlobalStyles } from './Theme/globalStyle'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme/themes'
import { useDarkMode } from './Theme/useDarkMode'

function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <Fragment>
        <GlobalStyles />
        <div>
          <Header theme={theme} toggleTheme={themeToggler}/>
          <Main />
          <Footer />
        </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
