import React, { useEffect } from 'react';
import classes from './StudentDataPDF.module.css';
import logo from './bsu_logo.png';

const initValue = [
  { label: 'Name', data: 'Juel Rei S. Gacusan' },
  { label: 'Name', data: 'Juel Rei S. Gacusan' },
  { label: 'Name', data: 'Juel Rei S. Gacusan' },
  { label: 'Name', data: 'Juel Rei S. Gacusan' },
  { label: 'Name', data: 'Juel Rei S. Gacusan' },
  { label: 'Name', data: 'Juel Rei S. Gacusan' },
];

const StudentDataPDF = React.forwardRef(
  (
    {
      data = initValue,
      title = 'TITLE',
      footer = 'Add footer here',
      headerColor = '#ff7676',
    },
    ref
  ) => {
    return (
      <div style={{ width: '0px', height: '0px', overflow: 'hidden' }}>
        <div ref={ref} className={classes['page-container']}>
          <div className={classes['logo-container']}>
            <img src={logo} alt={logo} />
          </div>
          <div className={classes['title-container']}>
            <h1>{title}</h1>
          </div>
          <div className={classes['table-container']}>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <th colSpan={2} style={{ background: headerColor }} />
                </tr>

                {data.map((item) => {
                  return (
                    <tr key={item.label}>
                      <td>{item.label}</td>
                      <td>{item.data}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={classes.footer}>{footer}</div>
        </div>
      </div>
    );
  }
);

export default StudentDataPDF;
