import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

export default class ModalTest extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleClose (){
        this.setState({ show: false });
    };
    
    handleShow (){
        this.setState({ show: true });
    };
    
    render() {
        return(
            <div>

                <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="modal-custom">
                    <ModalBody style={{fontFamily: 'WorkSans'}}> 
                    <br></br>
                    <br></br>
                    <center> <h1 style={{ fontSize: 30, fontWeight: 800}}> Launching soon! </h1></center>
                    <br></br>
                     <center> <p style={{padding: 10}} >Welcome! At <span style={{ fontWeight: 700}}> SMB Legal </span>
                     we are as excited as you are that soon all the legal and document management 
                     needs of small businesses will be solved. Until then, sign up for our waitlist so that 
                     you are the first to know when we launch! </p> </center> 
                        
                        <a href="https://forms.gle/iNUd4My5DKTGHuAz8" target="_blank"><center> <Button variant="outline-dark" style={{fontFamily: 'WorkSans', 
                        fontWeight: 550, borderRadius: 0}}> SIGN UP </Button>{' '} </center></a>
                        <br></br>
                        </ModalBody>
                    <ModalFooter>
                        
                        <Button variant="light" onClick={this.handleClose}> x </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
