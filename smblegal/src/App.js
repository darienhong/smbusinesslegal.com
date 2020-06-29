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




import Solutions from './Solutions.jsx';
import AboutUs from './aboutus.jsx';
import SignUp from './SignUp.jsx';
import Pricing from './Pricing.jsx';
import Homepage from './Homepage.jsx';

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

          <Route path="/Solutions">
            <Solutions />
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
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      </ThemeProvider>
    );
  }
}

