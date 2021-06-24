import React, { useState } from 'react';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';
import DeleteBtnWithAlert from '../../components/DeleteBtnWithAlert';
import PaymentTransactionsModal from './PaymentTransactionsModal';

const columns = [
  { label: 'ID', field: 'id', id: 'asdasda' },
  { label: 'LRN', field: 'lrn' },
  { label: 'Student Name', field: 'studentName' },
  { label: 'Transaction Name', field: 'transactionName' },
  { label: 'Total Amount Due', field: 'totalAmount' },
  { label: 'Payment Type', field: 'paymentType' },
  { label: 'Transaction Number', field: 'transactionNumber' },
  { label: 'Date', field: 'date' },
  { label: 'Action', field: 'action' },
];
const rows = [
  {
    id: '0000000001',
    lrn: '406228150133',
    studentName: 'Isaiah Carl Aquino De Mesa',
    transactionName: 'Grade 11 Enrollment Fee',
    totalAmount: '3990',
    paymentType: 'otc',
    transactionNumber: '3822',
    date: '2020-07-03 11:53:05',
  },
];

const PaymentTransactions = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: rows.map((item) => {
      return {
        id: item.id,
        lrn: item.lrn,
        studentName: item.studentName,
        transactionName: item.transactionName,
        totalAmount: item.totalAmount,
        paymentType: item.paymentType,
        transactionNumber: item.transactionNumber,
        date: item.date,
        action: <DeleteBtnWithAlert action={() => {}} />,
      };
    }),
  });

  return (
    <>
      <PaymentTransactionsModal
        isModalShown={isModalShown}
        onHide={() => {
          setisModalShown(false);
        }}
      />
      <CardContainer
        title="PAYMENT TRANSACTIONS"
        isAddComponentPresent={true}
        addComponentTitle="Add New Transaction"
        insideTitle="Transaction Table"
        addComponentFunction={() => {
          setisModalShown(true);
        }}
      >
        <Datatable datatable={datatable} />
      </CardContainer>
    </>
  );
};

export default PaymentTransactions;
