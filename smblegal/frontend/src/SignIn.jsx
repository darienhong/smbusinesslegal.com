import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Alert } from 'react-alert'


export default function SignIn() {
    const [state, setStates] = React.useState({
        email: "",
        password: "",
    })
    const [emailStatus, setEmailStatus] = React.useState('');
    const [passwordStatus, setPasswordStatus] = React.useState('');
    const [plan, setPlan] = React.useState('');


    React.useEffect(() => {
        localStorage.setItem('email', state.email);
    }, [state.email]);

    const handleChange = e => {
        const { name, value } = e.target
        setStates(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleEmailStatusChange = (value) => {
        setEmailStatus(value);
    }

    const handlePasswordStatusChange = value => {
        setPasswordStatus(value);
    }

    const handlePlanChange = (value) => {
        setPlan(value);
    }

    const changingPlan = async () => {
        const response = await fetch(`/api/getPlan?email=${state.email}`, {
            method: 'GET'
        })
        // console.log(response);
        const data = await response.json();
        // console.log('went in!');
        // console.log(data);
        let p = data[0].plan_type;
        // console.log('p: ' + p);
        handlePlanChange(p);
        return p;
    }

    const switchPage = code => {
        let p = changingPlan();
        // console.log(p);
        let getP = ''
        p.then((value) => {
            getP = value
            localStorage.setItem('plan', getP);
            // console.log("get p: " + getP);

            const checkPassword = state.password.length === 0
            const checkEmail = state.email.length === 0
            // console.log('code: ' + code);
            // console.log("Plan now: " + getP);


            if (code === 200) {

                handleEmailStatusChange('')
                handlePasswordStatusChange('')
                if (getP === 'Premium') {
                    document.location = "/DashboardPremium"
                }
                else {
                    document.location = "/Dashboard"
                }
            }
            else if (code === 206) {

                console.log(code);
                if (checkEmail) {
                    handleEmailStatusChange('')
                    handleEmailStatusChange('Enter your email')
                }
                else {
                    handleEmailStatusChange('')
                    handleEmailStatusChange('This email does not exist.');
                }
                if (checkPassword) {
                    handlePasswordStatusChange('')
                    handlePasswordStatusChange('Enter your password')
                }
                else {
                    handlePasswordStatusChange('')
                    handlePasswordStatusChange('The password is incorrect')

                }

            }
            else if (code === 204) {

                if (checkPassword) {
                    handleEmailStatusChange('')
                    handlePasswordStatusChange('')
                    handlePasswordStatusChange('Enter your password')
                }
                else {
                    handleEmailStatusChange('')
                    handlePasswordStatusChange('')
                    handlePasswordStatusChange('The password is incorrect')

                }
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault();

        const data = {
            email: state.email,
            password: state.password
        }
        // console.log('email' + state.email);
        // console.log('password:  ' + state.password);
        // fetch(`/api/getPlan?email=${state.email}`, {
        //     method: 'GET'
        // })
        //     .then(response => {
        //         response.json()
        //             .then((data) => {
        //                 console.log('went in!');
        //                 console.log(data);
        //                 let p = data[0].plan_type;
        //                 console.log(p);
        //                 handlePlanChange(p);
        //             })

        //     })

        //     // .then(res => res.json())
        //     .catch(error => console.error('Error:', error))
        // // .then(response => console.log('Success:', plan));

        fetch('/api/getUser', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' }
        })

            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => switchPage(response.code));

    }
    return (
        <div class="full-page">
              <Navbar />
            <div class="login-page">
           
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{ color: "#245CA6" }}> Login </h1>
                <br></br>
                <div style={{ textAlign: "center" }}>
                    <svg height={50} width={400}>
                        <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
                    </svg>
                </div>
                <p style={{ textAlign: "center" }}> Welcome back! </p>
                <br></br>
                <div class="login-form">
                    <div class="email-input" style={{ textAlign: "center" }}>
                        <TextField value={state.email} name="email" onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" style={{ width: "500px" }} />
                    </div>
                    <br />
                    <center>
                        <div class='error'>
                            {emailStatus}
                        </div>
                    </center>

                    <br></br>
                    <br></br>
                    <div class="password-input" style={{ textAlign: "center" }}>
                        <TextField
                            value={state.password}
                            name="password"
                            onChange={handleChange}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            color="#245CA6"
                            style={{ width: "500px" }}
                        />
                    </div>
                    <br />
                    <center>
                        <div class='error'>
                            {passwordStatus}
                        </div>
                    </center>

                </div>
                <br></br>
                <br />
                <center>
                    {/* <Link to="/Dashboard"> */}
                    <div class="create-acc-button" onClick={handleClick}>
                        <p style={{ textAlign: "center" }}> Log In </p>
                    </div>
                    {/* </Link> */}
                </center>
                <br />
                <br />


                <p style={{ textAlign: "center" }}> Don't have an account? <Link to="/CreateAccount" style={{ color: "#245CA6" }}> Create Account </Link></p>

                <br></br>
                <br></br>
                <br />
            </div>
            <Footer />

        </div>
    );
}