import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import EmploymentDocument from './EmploymentDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



export default class EmploymentInfo2 extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <Navbar2 />

        <div class='col height'>

          <form>
            <p>Does this job include payment via commission?</p>
            <input
              type='radio' id="yes" name="comm" value="Yes"
              onChange={this.props.handleChange('commission')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="comm" value="No"
              onChange={this.props.handleChange('commission')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {(values.commission === 'Yes') && (
            <div>
              <form onChange={this.props.handleChange('comProcedure')}>
                <p>Enter the commission procedure:</p>
                <textarea name="message" rows="2" cols="30"></textarea>
              </form>
              <br />
            </div>
          )}

          <form>
            <p>Does the employee have any reimbursable expenses?</p>
            <input
              type='radio' id="yes" name="exp" value="Yes"
              onChange={this.props.handleChange('expenses')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="exp" value="No"
              onChange={this.props.handleChange('expenses')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {values.expenses === 'Yes' && (
            <div>
              <form onChange={this.props.handleExpenseChange}>
                <div class='listExp'>
                  <p>Enter expenses:</p>
                </div>
                <div class='expButton'>
                  <button class='add' onClick={this.props.addExpense}>+</button>
                </div>
                <br />
                <div class='listExp'>
                  {
                    (values.expenseList).map((val, idx) => {
                      let expenseId = `expense-${idx}`
                      return (
                        <div key={idx}>
                          <label htmlFor={expenseId}>{`Expense #${idx + 1}`}</label>
                          <input
                            type="text"
                            name={expenseId}
                            data-id={idx}
                            id={expenseId}
                            value={(values.expenseList)[idx].name}
                            className="name"
                          />
                          {" "}
                        </div>

                      )
                    })
                  }
                </div>
              </form>
              <br />
            </div>
          )
          }

          <form>
            <p>Is the company indemnifying the employee for any liability incurred via the employment?</p>
            <input
              type='radio' id="yes" name="lia" value="Yes"
              onChange={this.props.handleChange('liability')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="lia" value="No"
              onChange={this.props.handleChange('liability')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />
          <form>
            <p>Does the company want to include a non-compete provision in the employment agreement?</p>
            <input
              type='radio' id="yes" name="comp" value="Yes"
              onChange={this.props.handleChange('compete')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="comp" value="No"
              onChange={this.props.handleChange('compete')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {(values.compete === 'Yes') && (
            <div>
              <form>
                <p>How long should the non-compete provision last?</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('competeTime')}
                />
              </form>
              <br />
            </div>
          )}

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div >
        <div class='col right'>
          <EmploymentDocument class='doc' values={values}
          />
        </div>
      </div >

    );
  }


}