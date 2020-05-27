import React, { Fragment, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";


const App = (props) => {
  const Home = React.lazy(() => import('./components/Home/index'));
  const namePage=React.lazy(()=>import('./components/personalInfo/index'));
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Home} />
            <Route path="/personalInformation" exact component={namePage} />
            
          </Suspense>
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
