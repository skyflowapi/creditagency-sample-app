import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import theme from './utils/theme';
import DobPage from './components/personalInfo/dobPage/index';
import Header from './components/layout/header';
import sideBar from './components/layout/sidebar';
import MainPage from './components/layout/mainContent';
import PhoneNumberComponent from './components/contactInfo/phoneNumberComponent';
import Home from './components/Home/index'
import namePage from './components/personalInfo/namePage/index';

const App = (props) => {

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/personalInformation" exact component={namePage} />
              <Route path="/personalInformation/dob" exact component={DobPage} />
            </Router>
          </Suspense>
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
