import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import ScrollToTop from './components/scroll-top.jsx';

import Formation from './document types/Formation.jsx';
import Governance from './document types/Governance.jsx';
import Employment from './document types/Employment.jsx';
import Covid_19 from './document types/COVID-19.jsx';
import Questions from './internship-files/Questions.jsx';
import EmploymentQuestions from './employment-files/EmploymentQuestions';
import ConsultingQuestions from './consulting-files/ConsultingQuestions';
import DisciplinaryQuestions from './disciplinary-files/DisciplinaryQuestions';
import TerminationQuestions from './termination-files/TerminationQuestions';
import MutualNDAQuestions from './mutualnda-files/MutualNDAQuestions';
import RecipientNDAQuestions from './recipientNDA-files/RecipientNDAQuestions';
import DisclosureNDAQuestions from './disclosurenda-files/DisclosureNDAQuestions';
import CovidRentQuestions from './covidrent-files/CovidRentQuestions';
import FormationQuestions from './formation-files/FormationQuestions';
import IncorporationQuestions from './incorporation-files/IncorporationQuestions';
import StatementQuestions from './statement-files/StatementQuestions';
import SecretaryQuestions from './secretary-files/SecretaryQuestions';
import DirectorsQuestions from './directors-files/DirectorsQuestions';
import WFHQuestions from './wfh-files/WFHQuestions';
import BoardMinutesQuestions from './boardminutes-files/BoardMinutesQuestions';
import BoardResolutionQuestions from './boardresolution-files/BoardResolutionQuestions';
import ShareholderResolutionQuestions from './shareholderresolution-files/ShareholderResolutionQuestions';
import WaiverDirectorsQuestions from './waiverdirectors-files/WaiverDirectorsQuestions';
import WaiverShareholdersQuestions from './waivershareholders-files/WaiverShareholdersQuestions';
import LLCResolutionQuestions from './llcresolution-files/LLCResolutionQuestions';
import ShareholderMinutesQuestions from './shareholderminutes-files/ShareholderMinutesQuestions';













// import Solutions from './Solutions.jsx';
import CorporateGov from './why-feature-subsection/CorporateGov.jsx';
import LimitedLiability from './why-feature-subsection/LimitedLiability.jsx';
import Lawsuits from './why-feature-subsection/Lawsuits.jsx';
import DifficultCapital from './why-feature-subsection/DifficultCapital.jsx';
import SMBAutomate from './why-feature-subsection/SMBAutomate.jsx';

import AutomateGov from './AutomateGovernance.jsx';
import CompanyID from './CompanyID.jsx';
import AutomatedDocs from './AutomatedDocs.jsx';
import Tools from './Tools.jsx';
import AboutUs from './aboutus.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import CreateAccount from './CreateAccount.jsx';
import Pricing from './Pricing.jsx';
import Homepage from './Homepage.jsx';
import BoardMinuteQuestions from './boardminutes-files/BoardMinutesQuestions';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#245CA6',
    }
  },
  typography: {
    fontFamily: [
      'WorkSans',
      'DM Sans'
    ].join(','),
  }
});

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/Formation">
              <Formation />
            </Route>
            <Route path="/Governance">
              <Governance />
            </Route>
            <Route path="/Employment">
              <Employment />
            </Route>
            <Route path="/Covid_19">
              <Covid_19 />
            </Route>
            <Route path="/Questions">
              <Questions />
            </Route>
            <Route path="/EmploymentQuestions">
              <EmploymentQuestions />
            </Route>
            <Route path="/ConsultingQuestions">
              <ConsultingQuestions />
            </Route>
            <Route path="/DisciplinaryQuestions">
              <DisciplinaryQuestions />
            </Route>
            <Route path="/TerminationQuestions">
              <TerminationQuestions />
            </Route>
            <Route path="/MutualNDAQuestions">
              <MutualNDAQuestions />
            </Route>
            <Route path="/RecipientNDAQuestions">
              <RecipientNDAQuestions />
            </Route>
            <Route path="/DisclosureNDAQuestions">
              <DisclosureNDAQuestions />
            </Route>
            <Route path="/CovidRentQuestions">
              <CovidRentQuestions />
            </Route>
            <Route path="/FormationQuestions">
              <FormationQuestions />
            </Route>
            <Route path="/IncorporationQuestions">
              <IncorporationQuestions />
            </Route>
            <Route path="/StatementQuestions">
              <StatementQuestions />
            </Route>
            <Route path="/SecretaryQuestions">
              <SecretaryQuestions />
            </Route>
            <Route path="/DirectorsQuestions">
              <DirectorsQuestions />
            </Route>
            <Route path="/WFHQuestions">
              <WFHQuestions />
            </Route>
            <Route path="/BoardMinutesQuestions">
              <BoardMinutesQuestions />
            </Route>
            <Route path="/BoardResolutionQuestions">
              <BoardResolutionQuestions />
            </Route>
            <Route path="/ShareholderResolutionQuestions">
              <ShareholderResolutionQuestions />
            </Route>
            <Route path="/WaiverDirectorsQuestions">
              <WaiverDirectorsQuestions />
            </Route>
            <Route path="/WaiverShareholdersQuestions">
              <WaiverShareholdersQuestions />
            </Route>
            <Route path="/LLCResolutionQuestions">
              <LLCResolutionQuestions />
            </Route>
            <Route path="/ShareholderMinutesQuestions">
              <ShareholderMinutesQuestions />
            </Route>



          <Route path="/CorporateGov">
            <CorporateGov />
          </Route>
          <Route path="/LimitedLiability">
            <LimitedLiability />
          </Route>
          <Route path="/Lawsuits">
            <Lawsuits />
          </Route>
          <Route path="/DifficultCapital">
            <DifficultCapital />
          </Route>
          <Route path="/SMBAutomate">
            <SMBAutomate />
          </Route>

          

            <Route path="/AutomateGovernance">
              <AutomateGov />
            </Route>
            <Route path="/CompanyID">
              <CompanyID />
            </Route>
            <Route path="/AutomatedDocs">
              <AutomatedDocs />
            </Route>
            <Route path="/Tools">
              <Tools />
            </Route>
            <Route path="/Questions">
              <Questions />
            </Route>
            <Route path="/Pricing">
              <Pricing />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/CreateAccount">
              <CreateAccount />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

