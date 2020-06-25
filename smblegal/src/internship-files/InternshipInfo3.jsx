import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Document from './Document.jsx';


export default class InternshipInfo3 extends Component {
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
        <div class='col height'>

          <form>
            <p>Does your internship need employment verification?</p>
            <input
              type='radio' id="yes" name="ver" value="Yes"
              onChange={this.props.handleChange('verification')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="ver" value="No"
              onChange={this.props.handleChange('verification')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          <form>
            <p>Is the company reimbursing the intern for any expenses?</p>
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
            <p>Is the company indemnifying the intern for any liability incurred via the internship?</p>
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
          {/* <form>
            <p>Non-Compete Clause</p>
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

          </form> */}

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div >
        <div class='col right'>
          <Document class='doc' values={values}
          />
        </div>
      </div >

    );
  }


}