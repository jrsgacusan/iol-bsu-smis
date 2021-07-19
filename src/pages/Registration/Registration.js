import React from 'react';
import classes from '../Signin/Signin.module.css';
import loginBanner from '../Signin/login-banner.png';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Registration = () => {
  return (
    <>
      <section className={classes.section}>
        <div className={classes['left-content']}>
          <div className={classes['inner-panel']}>
            <img src={loginBanner} alt={loginBanner} />
          </div>
        </div>
        <div className={classes['right-content']}>
          <div className={classes.box}>
            <Row>
              <h1 style={{ fontWeight: 'bold' }}>SIGN UP</h1>
              <h3>Enter your details below</h3>
              <form className={classes.form}>
                <div className={classes.group}>
                  <input
                    type="text"
                    placeholder="LRN"
                    className={classes.input2}
                  />
                </div>
                <div className={classes.group}>
                  <select name="department" id="department">
                    <optgroup label="Choose Department">
                      <option value="sls">Secondary Laboratory School</option>
                      <option value="sls">Secondary Laboratory School</option>
                    </optgroup>
                  </select>
                </div>
                <div className={classes.group}>
                  <input
                    type="text"
                    placeholder="First name"
                    className={classes.input2}
                  />
                </div>
                <div className={classes.group}>
                  <input
                    type="text"
                    placeholder="Middle name"
                    className={classes.input2}
                  />
                </div>
                <div className={classes.group}>
                  <input
                    type="text"
                    placeholder="Last name"
                    className={classes.input2}
                  />
                </div>
                <div className={classes.group}>
                  <input
                    type="number"
                    placeholder="Mobile number"
                    className={classes.input2}
                  />
                </div>
                <div className={classes.group}>
                  <input
                    type="text"
                    placeholder="Email"
                    className={classes.input2}
                  />
                </div>
                <div className={classes.group}>
                  <input
                    type="text"
                    placeholder="Name of contact in case of emergency"
                    className={classes.input2}
                  />
                </div>
                <div className={classes.group}>
                  <input
                    type="text"
                    placeholder="Emergency Contact #"
                    className={classes.input2}
                  />
                </div>

                <div className={classes.group}>
                  <span>
                    <input
                      style={{ height: 'auto', margin: '0px' }}
                      type="checkbox"
                    />
                    <label
                      style={{
                        fontSize: '12px',
                        paddingBottom: '10px',
                      }}
                    >
                      <Link to="#"> DOWNLOAD</Link> CONTRACT AGREEMENT
                    </label>
                  </span>
                </div>
                <div className={classes.group}>
                  <button>SIGN UP</button>
                </div>
              </form>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
