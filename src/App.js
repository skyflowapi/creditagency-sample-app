import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React, { Fragment, Suspense } from "react";
import { Step, Steps, Wizard } from "react-albus";
import { Route, Switch } from "react-router-dom";
import EmpComponent from "./components/academicInfo/jobStatus";
import AddressComponent from "./components/contactInfo/addressComponent";
import PhoneNumberComponent from "./components/contactInfo/phoneNumberComponent";
import FinalPage from "./components/finalPage";
import IncomeInfo from "./components/financialInfo/incomeInfo";
import SSNInfo from "./components/financialInfo/ssnInfo";
import Navigation from "./components/navigation/index";
import DobPage from "./components/personalInfo/dobPage/index";
import MailPage from "./components/personalInfo/emailPage/index";
import Summary from "./components/summary";
import ThankYouPage from "./components/thankyouPage";
import UploadPage from "./components/uploadDocs";
import theme from "./utils/theme";
import defaultData from "./utils/TokenizedDataSample.json";
import { localStorageKey } from "./utils/constants";

const Home = React.lazy(() => import("./components/Home/index"));
const NamePage = React.lazy(() => import("./components/personalInfo/namePage/index"));
const Analytics = React.lazy(() => import("./pages/Analytics"));

const Next = React.createContext();

export const useNextHook = () => React.useContext(Next);

const App = (props) => {
  const [next, setNext] = React.useState(false);
  const [email, setEmail] = React.useState("");
  if (localStorage.getItem("set") !== "true") {
    if (!localStorage.getItem(localStorageKey)) {
      localStorage.setItem(localStorageKey, JSON.stringify(defaultData));
      localStorage.setItem("set", true);
    } else {
      const localData = JSON.parse(localStorage.getItem(localStorageKey));
      if (localData && localData[0]) {
        try {
          const test = localData[0].experian_response.credit_score;
        } catch (e) {
          localStorage.setItem(localStorageKey, JSON.stringify(defaultData));
          localStorage.setItem("set", true);
        }
      }
    }
  }
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
              <Route path="/summary" exact>
                <Summary setEmail={setEmail} />
              </Route>
              <Route path="/upload" exact component={UploadPage} />
              <Route path="/analytics" exact component={Analytics} />
              <Route path="/submit" exact>
                <ThankYouPage email={email} />
              </Route>
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
                    <Next.Provider value={{ next, setNext }}>
                      <Steps>
                        {/* <Step id="Home">
                        <Home/>
                        </Step> */}
                        <Step id="personalInformation">
                          <MailPage />
                        </Step>
                        <Step id="personalInformation/names">
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
                        {/* <Step id="financialInformation/residence">
                        <ResidenceInfo />
                      </Step> */}
                        <Step id="SSNInfo">
                          <SSNInfo />
                        </Step>
                      </Steps>
                      <Navigation />
                    </Next.Provider>
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
