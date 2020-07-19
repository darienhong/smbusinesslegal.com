import React, { Component } from 'react';
import '../App.css';
import Logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
import ModalTest from '../components/modal.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import AOS from 'aos';
import Footer from '../components/footer.jsx';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactGA from 'react-ga';
import { ResponsiveEmbed } from 'react-bootstrap';
import { SearchResults } from 'semantic-ui-react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';


export default class HomepageLogin extends Component {

  state = {
    companyName: "[COMPANY NAME PLACEHOLDER]",
    companyType: "[COMPANY TYPE PLACEHOLDER]",
    lastMeeting: "[LAST MEETING PLACEHOLDER]",
    nextMeeting: "[NEXT MEETING PLACEHOLDER]",
    USState: "[STATE PLACEHOLDER]",
    company_id: 0,
    company: [],
    users: [],
    email: localStorage.getItem('email'),
    plan: localStorage.getItem('plan'),
    max_docs: 0,
    show: false,
    pay: false,
  }

  componentDidMount() {

    console.log(this.state.email);
    var that = this;
    Promise.all([
      fetch(`/api/getCompanyInfo?email=${this.state.email}`, {
        method: 'GET',
      }),
      fetch(`/api/getUserList?email=${this.state.email}`, {
        method: 'GET',
      })])


      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      //   .then(data1 => console.log(data1[0]))
      .then((data1, data2) => this.setState({
        company: data1[0][0].company_name,
        USState: data1[0][0].state,
        companyName: data1[0][0].company_name,
        companyType: data1[0][0].company_type,
        company_id: data1[0][0].company_id,
        users: data1[1],
        //     users: [data1[1][0].first_name, data1[1][0].last_name]


      }))

      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    if (this.state.plan === 'Freemium') {
      this.setState({ max_docs: 2 })
    } else if (this.state.plan === 'Premium') {
      this.setState({ max_docs: 15 })
    }

  }

  showModal = () => {
    this.setState({
      show: true,
    })
  }

  hideModal = () => {
    this.setState({
      show: false,
      pay: true,
    })
  }

  saveData = () => {
    localStorage.setItem('max_docs', this.state.max_docs);
  }


  render() {
    const {
      companyName,
      users,
      company_id,
      lastMeeting,
      nextMeeting,
      company,
      companyType,
      USState,
      email,
      plan,
      max_docs
    } = this.state

    return (
      <div class="full-page">

        <Navbar2 />

        <div class="homepage-login">
          {this.saveData()}
          <div>

            <Modal show={this.state.show} onHide={this.hideModal} dialogClassName="modal-custom" scrollable={true}>
              <ModalBody style={{ maxHeight: 'calc(80vh - 180px)', overflowY: 'auto', fontSize: "14px" }} >
                <br></br>
                <br></br>
                <center> <h1 style={{ fontSize: 30, fontWeight: 800 }}> Upgrade Your Plan </h1></center>
                <br></br>
                <h4 style={{ color: "#245CA6", fontSize: "20px" }}> OUR PREMIUM PLAN INCLUDES: </h4>
                < br />
                <p style={{ fontSize: "18px" }}> &bull; 15 Automated Documents per month </p>
                <p style={{ fontSize: "18px" }}> &bull; Free Formation Documents and Guides (only Delaware documents are available now </p>
                <p style={{ fontSize: "18px" }}> &bull; Governance Dashboard </p>
                <center> <p style={{ color: "#245CA6", fontSize: "20px" }}> PRICE: $10 / Month </p></center>

                <br></br>
              </ModalBody>
              <ModalFooter>

                <Button variant="light" onClick={this.hideModal} style={{ fontFamily: "DM Sans" }}> UPGRADE NOW </Button>
              </ModalFooter>
            </Modal>
          </div>


          <br />
          <br />
          <br />
          <br />
          <br></br>
          <h1 style={{ color: "#245CA6" }}> Welcome </h1>
          <br></br>

          <div style={{ textAlign: "center" }}>
            <svg height={50} width={400}>
              <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
            </svg>
          </div>
          <br />
          <br />
          <br />


          <center>
            <div style={{ width: "80%", height: "400px", justifyContent: "center" }}>
              <div class="company-info" style={{ width: "400px", float: "left", textAlign: "left" }}>
                <div class="name">
                  {companyName}
                </div>
                <br />
                <div class="type">
                  {companyType}
                </div>
                < br />
                <div class="US State">
                  {USState}
                </div>
                <br />
                <div class="users">
                  Users:
                  {users.map(user => <li>  {user.first_name} {user.last_name} </li>)}
                </div>
                < br />
                {/*  <div class="lastmeeting"> 
                  {lastMeeting}
              </div>
              <br />
              <div class="nextmeeting">
                  {nextMeeting}
              </div>
        */}
              </div>
              <div class="automated-docs" style={{ width: "300px", float: "right" }} >
                <div class="features-1">
                  <p class="homepage-text" style={{ left: "20px" }}> Automated Documents </p>
                  <br></br>
                  <center>
                    <div class="formation1">
                      <Link to="/FormationLogin" style={{ textDecoration: "none" }}><p style={{ fontWeight: "600", textAlign: "center" }}>Formation</p> </Link>
                    </div>
                    < br />

                    <div class="governance1">
                      <Link to="/GovernanceLogin" style={{ textDecoration: "none" }}><p style={{ fontWeight: "600", textAlign: "center" }}>  Governance </p></Link>
                    </div>
                    <br />

                    <div class="employment1">
                      <Link to="/EmploymentLogin" style={{ textDecoration: "none" }}><p style={{ fontWeight: "600", textAlign: "center" }}> Employment</p></Link>
                    </div>
                    < br />

                    <div class="covid-191">
                      <Link to="/Covid_19Login" style={{ textDecoration: "none" }}><p style={{ fontWeight: "600", textAlign: "center" }}> Covid-19  </p></Link>
                    </div>
                    <br />

                    <div class="covid-191">
                      <Link to="/OperationalLogin" style={{ textDecoration: "none" }}><p style={{ fontWeight: "600", textAlign: "center" }}> Operational  </p></Link>
                    </div>

                  </center>



                </div>



              </div>



            </div>
          </center>

          <br />
          <br />
          <br />
          <br />
          <br />


          <center>  <button class="upgrade-plan" onClick={this.showModal}> Upgrade Plan </button>  </center>
          <br />
          <br />
          <br />
          <br />

        </div>
        <Footer />
      </div>



    );
  }

}