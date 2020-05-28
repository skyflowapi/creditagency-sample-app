import React, { Fragment, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Route,
  Router,
  BrowserRouter,
  Switch,
  HashRouter,
} from "react-router-dom";
import theme from "./utils/theme";
import DobPage from "./components/personalInfo/dobPage/index";
import Header from "./components/layout/header";
import sideBar from "./components/layout/sidebar";
import MainPage from "./components/layout/mainContent";
import PhoneNumberComponent from "./components/contactInfo/phoneNumberComponent";
import Footer from "./components/layout/footer";
import AddressComponent from "./components/contactInfo/addressComponent";
import EmpComponent from "./components/academicInfo/jobStatus";
import ResidenceInfo from "./components/financialInfo/residenceInfo";
import IncomeInfo from "./components/financialInfo/incomeInfo";
import SSNInfo from "./components/financialInfo/ssnInfo";
import WizardSteps from "./components";
import { Wizard, Steps, Step } from "react-albus";
import Navigation from "./components/navigation/index";
import NumberIcon from "./components/numberIcon";
import Summary from "./components/summary";
import FinalPage from "./components/finalPage";
import Information from "./components/information";

const App = (props) => {
  const Home = React.lazy(() => import("./components/Home/index"));
  const NamePage = React.lazy(() =>
    import("./components/personalInfo/namePage/index")
  );

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
            {/* <BrowserRouter> */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/done" exact component={FinalPage} />
              <Route path="/summary" exact component={Summary} />
              <Route
                path="/skyflow"
                component={() => {
                  window.location.href = "https://skyflow.com";
                  return null;
                }}
              />
              <Route
                render={({ history }) => (
                  <Wizard history={history}>
                    <Steps>
                      {/* <Step id="Home">
            <Home/>
          </Step> */}
                      <Step id="personalInformation">
                        <NamePage />
                      </Step>
                      <Step id="personalInformation/dob">
                        <DobPage />
                      </Step>
                      <Step id="contactInformation">
                        <PhoneNumberComponent />
                      </Step>
                      <Step id="contactInformation/address">
                        <AddressComponent />
                      </Step>
                      <Step id="academicInformation">
                        <EmpComponent />
                      </Step>
                      <Step id="financialInformation">
                        <IncomeInfo />
                      </Step>
                      <Step id="financialInformation/residence">
                        <ResidenceInfo />
                      </Step>
                      <Step id="SSNInfo">
                        <SSNInfo />
                      </Step>
                    </Steps>
                    <Navigation />
                  </Wizard>
                )}
              />
              {/* <Route path="/personalInformation" exact component={WizardSteps} /> */}
              {/* <Route path="/personalInformation/dob" exact component={DobPage} />
            <Route path="/contactInformation" exact component={PhoneNumberComponent} />
            <Route path="/contactInformation/address" exact component={AddressComponent} />
            <Route path="/academicInformation" exact component={EmpComponent}/>
            <Route path="/financialInformation" exact component={IncomeInfo}/>
            <Route path="/financialInformation/residence" exact component={ResidenceInfo}/>
            <Route path="/financialInformation/SSN" exact component={SSNInfo}/> */}
            </Switch>
            {/* </BrowserRouter> */}
          </Suspense>
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
