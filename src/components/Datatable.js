import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Card, Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

export default function Datatable({
  style,
  datatable,
  title = null,
  exportToCsv = false,
  className,
}) {
  //Remove the object that has the value action
  const filteredHeader = datatable.columns.filter(
    (item) => item.field !== 'action'
  );
  //list of header objects with label and keys
  const headersObjList = filteredHeader.map((item) => {
    return { label: item.label, key: item.field };
  });
  //list of flat string headers
  const headersList = filteredHeader.map((item) => item.field);

  //list of data objects
  const rows = datatable.rows;
  const dataObList = rows.map((item) => {
    const _res = headersList.reduce((acc, curr, index) => {
      return (acc[curr] = item[curr]), acc;
    }, {});
    return _res;
  });
  //use as prop to CSVLink
  const csvReport = {
    data: dataObList,
    headers: headersObjList,
    filename: 'sample.csv',
  };

  return (
    <Card
      style={style}
      className={className}
      style={{ border: 'none', boxShadow: 'none' }}
    >
      {title !== null && (
        <Card.Header>
          <h4 className="text-center">{title}</h4>
        </Card.Header>
      )}
      <Card.Body>
        <MDBDataTable
          striped={true}
          barReverse
          hover
          entriesOptions={[10, 25, 50, 100]}
          entries={10}
          pagesAmount={4}
          responsive={true}
          theadColor="grey"
          data={datatable}
          noBottomColumns={true}
        />
      </Card.Body>
      {exportToCsv && (
        <Card.Footer>
          <CSVLink {...csvReport}>
            <Button>CSV</Button>
          </CSVLink>
        </Card.Footer>
      )}
    </Card>
  );
}
