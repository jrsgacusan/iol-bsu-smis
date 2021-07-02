import React, { useEffect } from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

$.DataTable = require('datatables.net-bs');
require('jszip');
// require('pdfmake/build/pdfmake.js');
// require('pdfmake/build/vfs_fonts.js');
require('datatables.net-autofill');
require('datatables.net-buttons-bs');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-colreorder');
require('datatables.net-keytable');
require('datatables.net-responsive-bs');
require('datatables.net-rowgroup');
require('datatables.net-rowreorder');
require('datatables.net-scroller');
require('datatables.net-select');
require('datatables.net-fixedcolumns');
require('datatables.net-fixedheader');

const init_rows = [
  {
    id: 57,
    name: 'Donna Snider',
    position: 'Customer Support',
    office: 'New York',
    age: 27,
    date: '2011/01/25',
    salary: <Button>asdfasdf</Button>,
  },
];

const init_columns = [
  'id',
  'name',
  'position',
  'office',
  'age',
  'date',
  'salary',
];

//This is just a trial datatable

const Datatable_Trial = ({
  rows = init_rows,
  columns = init_columns,
  type = 'export',
}) => {
  function initRegularTable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable({
      data: rows,
      order: [[0, 'asc']],
      columns: columns.map((item) => {
        return {
          data: item,
          reder: function(data, type, row) {
            return data;
          },
        };
      }),
    });
  }

  function initExportTable() {
    let tableButton = '#datatable-button';
    let tableBtns = [
      {
        text: 'Clear Filters',
        className: 'clr-filters-btn btn btn-danger',
        action: function(e, dt, node, config) {
          // make function clear all text inputs on page via jquery
          clearfilter();
        },
      },
      {
        extend: 'copyHtml5',
        text: 'Copy',
        className: 'btn btn-secondary',
      },
      {
        extend: 'csvHtml5',
        text: 'CSV',
        className: 'btn btn-secondary',
      },
      {
        extend: 'print',
        text: 'Print',
        className: 'btn btn-secondary',
      },
    ];

    let buttonTable = $(tableButton).DataTable({
      dom: 'Bfrti',
      data: rows,
      order: [[0, 'asc']],
      columns: columns.map((item) => {
        return {
          data: item,
          reder: function(data, type, row) {
            return data;
          },
        };
      }),
      buttons: tableBtns,
    });

    function clearfilter() {
      $('.search-it')
        .find('input:text')
        .val('');
      buttonTable
        .search('')
        .columns()
        .search('')
        .draw();
    }

    new $.fn.dataTable.Buttons(buttonTable, {
      buttons: [
        {
          extend: 'columnsToggle',
          text: 'Toggle Cols',
        },
      ],
    });
    buttonTable
      .buttons(1, null)
      .container()
      .appendTo('#toggle');
  }

  useEffect(() => {
    if (type === 'export') {
      initExportTable();
    } else if (type === 'regular') {
      initRegularTable();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">HTML5 Export Button</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table
          striped
          hover
          responsive
          className="table table-condensed"
          id={type === 'export' ? 'datatable-button' : 'data-table-zero'}
        >
          <thead>
            <tr>
              {columns.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tfoot>
            <tr>
              {columns.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </tfoot>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Datatable_Trial;
