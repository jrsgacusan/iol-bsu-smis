import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './SwitchButton.module.css';
import * as actionTypes from '../store/actions';

const SwitchButton = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    console.log(e.target.checked);
    if (isDarkMode) {
      dispatch({ type: actionTypes.RESET });
    } else {
      dispatch({ type: actionTypes.DARK_MODE });
      dispatch({ type: actionTypes.LAYOUT_TYPE, layoutType: 'dark' });
    }

    // dispatch({ type: actionTypes.LAYOUT_TYPE, layoutType: 'dark' });
    // dispatch({type: actionTypes.NAV_ACTIVE_LIST_COLOR, navActiveListColor: navActiveListColor})
  };

  return (
    <>
      <label className={classes.switch} style={{ verticalAlign: 'middle' }}>
        <input
          type="checkbox"
          onChange={onChangeHandler}
          checked={isDarkMode}
        />
        <span className={`${classes.slider} ${classes.round}`} />
      </label>
    </>
  );
};

export default SwitchButton;
