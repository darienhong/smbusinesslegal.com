import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import ConsultingDocument from './ConsultingDocument.jsx';


export default class ConsultingInfo extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();

  }
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
    this.props.decreasePercentage();

  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        {/* <Progress percent={values.percentage} indicating /> */}

        <div class='col height'>
          <form>
            <p>What is the total compensation?</p>
            <input
              type='text'
              onChange={this.props.handleChange('compensation')}
            />
          </form>
          <br />

          <form>
            <p>What is the payment schedule of that compensation?</p>
            <input
              type='text'
              onChange={this.props.handleChange('compSched')}
            />
          </form>
          <br />


          <form>
            <p>Does the Company agree to reimburse the consultant for any expenses?</p>
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

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <ConsultingDocument class='doc' values={values} />
        </div>

      </div>

    );
  }


}