import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Signin.module.css';
import { LockFill, PersonFill, KeyFill } from 'react-bootstrap-icons';
import loginBanner from './login-banner.png';
import { Card, Row } from 'react-bootstrap';
import dtp from './dtp-logo.png';
import bsu from './bsu_logo.png';

const Signin = () => {
  const [isUserIDFocused, setisUserIDFocused] = useState(false);
  const [isPasswordFocused, setisPasswordFocused] = useState(false);

  const userIdClickHandler = (e) => {
    setisUserIDFocused(true);
  };

  const userIdOnBlurHandler = (e) => {
    setisUserIDFocused(false);
  };
  const passwordClickHandler = (e) => {
    setisPasswordFocused(true);
  };

  const passwordOnBlurHandler = (e) => {
    setisPasswordFocused(false);
  };

  return (
    <>
      <section className={classes.section}>
        <div className={classes['left-content']}>
          <div className={classes['inner-panel']}>
            <div className={classes.lock}>
              <Link to="#">
                <LockFill color="black" />
              </Link>
            </div>
            <img src={loginBanner} alt={loginBanner} />
          </div>
        </div>
        <div className={classes['right-content']}>
          <div className={classes.box}>
            <Row style={{ textAlign: 'center' }}>
              <img src={dtp} alt="dtp" className={classes.dtp} />
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <img src={bsu} alt="bsu" style={{ width: '120px' }} />
            </Row>
            <Row style={{ textAlign: 'center' }}>
              <h1>Sign In</h1>
              <h2>Enter your details below</h2>
            </Row>

            <Row>
              <form className={classes.form}>
                <div className={classes.group}>
                  <span>
                    <PersonFill />
                    <label>User ID</label>
                  </span>
                  <input
                    className={isUserIDFocused ? classes.focusedInput : ''}
                    onClick={userIdClickHandler}
                    onBlur={userIdOnBlurHandler}
                    type="text"
                    placeholder="ID Number"
                  />
                </div>
                <div className={classes.group}>
                  <span>
                    <KeyFill />
                    <label>Password</label>
                  </span>
                  <input
                    className={isPasswordFocused ? classes.focusedInput : ''}
                    onClick={passwordClickHandler}
                    onBlur={passwordOnBlurHandler}
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className={classes.group}>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <LockFill />
                    <h2>Forgot pwd?</h2>
                  </span>
                </div>

                <div className={classes.group}>
                  <button>LOG IN</button>
                </div>
                <div className={classes.group}>
                  <h2 style={{ textAlign: 'center' }}>
                    Don't have an account?{' '}
                    <Link to="/registration">Sign Up</Link>
                  </h2>
                </div>
              </form>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
