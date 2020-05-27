import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import theme from './utils/theme';
import DobPage from './components/personalInfo/dobPage/index';
import Header from './components/layout/header';
import sideBar from './components/layout/sidebar';
import MainPage from './components/layout/mainContent';
import PhoneNumberComponent from './components/contactInfo/phoneNumberComponent';

const App = (props) => {
  const Home = React.lazy(() => import('./components/Home/index'));
  const namePage=React.lazy(()=>import('./components/personalInfo/namePage/index'));
  
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Home} />
            <Route path="/personalInformation" exact component={namePage} />
            <Route path="/personalInformation/dob" exact component={DobPage} />
          </Suspense>
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
