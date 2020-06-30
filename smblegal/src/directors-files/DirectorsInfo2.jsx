import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import DirectorsDocument from './DirectorsDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class DirectorsInfo2 extends Component {
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
        <Navbar />

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col height'>

          <form>
            <p>When was the Certificate of Incorporation filed? </p>
            <input
              type='date'
              onChange={this.props.handleChange('date')}
            />
          </form>
          <br />

          <form>
            <p>Are you going to issue common stock to someone right away?</p>
            <input
              type='radio' id="yes" name="st" value="Yes"
              onChange={this.props.handleChange('stock')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="st" value="No"
              onChange={this.props.handleChange('stock')}
            />
            <label for="no"> No </label><br />

          </form>


          {values.stock === 'Yes' && (
            <div>
              <form>
                <p>How many shares of Common stock are <br />authorized to be sold and issued?</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('shares')}
                />
              </form>
              <br />
              <form onChange={this.props.handlePurchasersChange} >
                <div class='listExp'>
                  <p>Enter a purchaser of Common stock: </p>
                </div>
                <div class='expButton'>
                  <button class='add' onClick={this.props.addPurchaser}>+</button>
                </div>

                {
                  (values.purchasersList).map((val, idx) => {
                    let nameId = `name-${idx}`, shareId = `shares-${idx}`, priceId = `price-${idx}`
                    return (
                      <div key={idx}>
                        <label htmlFor={nameId}>Name of Purchaser</label>
                        <input
                          type="text"
                          name={nameId}
                          data-id={idx}
                          id={nameId}
                          value={(values.purchasersList)[idx].name}
                          className="name"
                        />
                        <br />
                        <label htmlFor={shareId}>Number of Shares</label>
                        <input
                          type="text"
                          name={shareId}
                          data-id={idx}
                          id={shareId}
                          value={(values.purchasersList)[idx].shares}
                          className="shares"
                        />
                        <br />
                        <label htmlFor={priceId}>Total Purchase Price</label>
                        <input
                          type="text"
                          name={priceId}
                          data-id={idx}
                          id={priceId}
                          value={(values.purchasersList)[idx].price}
                          className="price"
                        />
                      </div>
                    )
                  })
                }
                <br /><br />

              </form>

            </div>
          )}


          <br />
          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <DirectorsDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}