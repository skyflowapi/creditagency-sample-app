import React, {Fragment} from "react";
import { ThemeProvider } from '@material-ui/styles';
import theme from './utils/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from "react-router-dom";
import Home from './components/Home/index';
import Page1 from './components/personalInfo/index';

const App = props => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <Route path="/" exact component={Home}/>
        <Route  path="/personalInformation" exact component={Page1}/>
          {/* ZeMoSo React Starter */}
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>

  );
};

export default App;