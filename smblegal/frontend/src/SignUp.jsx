import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));


export default class SignUp extends Component {

    render() {
   
   {/*    const classes = useStyles();
        const [values, setValues] = React.useState({
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
        });

        const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
          };

         const handleClickShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
          };
        
          const  handleMouseDownPassword = (event) => {
            event.preventDefault();
          };

        */}
  
        return (
          <div class="full-page"> 
            <Navbar />
            <div class="sign-up-page">
              
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{color: "#245CA6"}}> Sign Up </h1>
              <br></br>
            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br></br>
            <div class="sign-up-info"> 
            <p style={{ textAlign: "center", fontWeight: 500}}> Join the thousands of small business owners 
                  who are using SMB Legal’s self-help tools to automate and power their business to run efficiently 
                  and avoid potential legal pitfalls. <br></br> <br></br>  Sign Up for our Newsletter! </p>
            <br></br>
        
                <div class="sign-up-form">
                    <div class="email-input" style={{textAlign: "center"}}>
              <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: "500px"}} /> 
                </div> 
                </div>
                <br></br>
                <br></br>

                <center>
            <div class="create-acc-button" >
                 <p style={{textAlign: "center"}}> Sign Up </p>
                </div>
            </center>

                <br></br>
                <br></br>
            
            </div>
            </div>
                <Footer />

            </div>

        );
    }
}