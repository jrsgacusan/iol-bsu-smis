import React from 'react';
import classes from './SteamLine.module.css';
import { Person } from 'react-bootstrap-icons';
const SteamLine = ({ data }) => {
  return (
    <div className={classes.steamline}>
      {data.map((item) => (
        <div key={item.label} className={classes['sl-item']}>
          <div className={`${classes['sl-left']} `}>
            <Person color="white" size={18} />
          </div>

          <div className={classes['sl-right']}>
            <div>{item.label}</div>
            <div className={classes.desc}>{item.data}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SteamLine;
