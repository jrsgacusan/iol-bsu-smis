import React from 'react';
import { MDBDataTable } from 'mdbreact';
const ReviewEnrollmentTable = ({ data }) => {
  return (
    <MDBDataTable
      displayEntries={false}
      striped={true}
      responsive={true}
      noBottomColumns={true}
      searching={false}
      data={data}
      paging={false}
    />
  );
};

export default ReviewEnrollmentTable;
