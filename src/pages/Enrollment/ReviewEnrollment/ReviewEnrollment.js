/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ReviewEnrollmentCard from './ReviewEnrollmentCard';
import SteamLine from './SteamLine';
import StudentDataPDF from '../../../components/PDF/StudentDataPDF';
import ReviewEnrollmentTable from './ReviewEnrollmentTable';
import { savePDF } from '@progress/kendo-react-pdf';

const PDF_DUMMY_DATA = [
  { label: 'Name', data: '' },
  { label: 'LRN', data: '' },
  { label: 'Age', data: '' },
  { label: 'Sex', data: '' },
  { label: 'Grade Level', data: '' },
  { label: 'Date of Birth', data: '' },
  { label: 'Religion', data: '' },
  { label: 'Ethnicity', data: '' },
  { label: 'Languages', data: '' },
  { label: 'Permanent Address', data: '' },
  { label: 'Present Address', data: '' },
  { label: 'Guardian', data: '' },
  { label: 'Relationship to Guardian', data: '' },
  { label: 'Father', data: '' },
  { label: "Father's Job", data: '' },
  { label: 'Mother', data: '' },
  { label: "Mother's Job", data: '' },
  { label: "Father's Contact Number", data: '' },
  { label: "Mother's Contact Number", data: '' },
];

const fees_columns = [
  { label: 'Fee Title', field: 'title', sort: 'disabled' },
  { label: 'Amount', field: 'amount', sort: 'disabled' },
];
const subj_columns = [
  { label: 'Subject ID', field: 'id', sort: 'disabled' },
  { label: 'Subject Title', field: 'title', sort: 'disabled' },
];
const fees_rows = [
  { amount: '2290.00', title: 'Miscellaneous Fees' },
  { amount: '3000.00', title: 'Educational Resource Fund (ERF)' },
];
const subj_rows = [
  { id: '000010', title: 'Filipino' },
  { id: '000011', title: 'English' },
  { id: '000012', title: 'Math' },
  { id: '000013', title: 'Edukasyon sa Pagpapakatao (ESP)' },
  { id: '000014', title: 'MAPEH' },
];

const STEAM_LINE = [
  { label: 'LRN', data: 'Sample LRN' },
  { label: 'Name', data: 'Sample name' },
  { label: 'Age', data: 'Sample age' },
  { label: 'Year Level', data: 'Sample year level' },
  { label: 'Last School Attended', data: 'Sample school' },
  { label: 'Address', data: 'Sample address' },
];

const ReviewEnrollment = ({ location }) => {
  // const params = new URLSearchParams(location.search);
  const contentArea = useRef();
  const [feesData, setfeesData] = useState({
    columns: fees_columns,
    rows: fees_rows,
  });
  const [subjectsData, setsubjectsData] = useState({
    columns: subj_columns,
    rows: subj_rows,
  });

  const handleDownload = () => {
    savePDF(contentArea.current, {
      fileName: 'changeThis',
      margin: '1in',
    });
  };

  return (
    <>
      {/* first row */}
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <ReviewEnrollmentCard title="PRE-ENROLLMENT Details">
            <SteamLine data={STEAM_LINE} />
          </ReviewEnrollmentCard>
        </Col>
      </Row>
      {/* second row */}
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <ReviewEnrollmentCard title="Fees">
            <ReviewEnrollmentTable data={feesData} />
          </ReviewEnrollmentCard>
        </Col>
      </Row>
      {/* third row */}
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <ReviewEnrollmentCard title="Subjects">
            <ReviewEnrollmentTable data={subjectsData} />
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
              <Button variant="primary">Approve</Button>
              <Button variant="danger">Decline</Button>
              <Button variant="success" onClick={handleDownload}>
                Download Enrollment Details
              </Button>
            </div>
          </ReviewEnrollmentCard>
        </Col>
      </Row>
      <StudentDataPDF
        headerColor="#0099cc"
        data={PDF_DUMMY_DATA}
        ref={contentArea}
        title="Personal Data / Enrollment Form"
        footer="*For students, please create your official gmail account to be
                used for the google classNameroom. Follow this format:
                JuanCruz@gmail.com (**Capitalize the first letter of your first
                name and family name. Do not use any other aliases for us to
                easily identify you.)"
      />
    </>
  );
};

export default ReviewEnrollment;
