import React from 'react';
import { rowData, headerData } from './sampleData';
import {
  Column,
  DataTable,
  Grid,
  Pagination,
  Row,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from 'carbon-components-react';


export const Reports = () => {
  const [firstRowIndex, setFirstRowIndex] = React.useState(0);
  const [currentPageSize, setCurrentPageSize] = React.useState(10);
  const [report, setReport] = React.useState([]);


  return (
    <>
      <Grid style={{ marginTop: '7rem', marginLeft: '5rem', padding: '2rem' }}>
        <Row>
          <Column sm={12} md={12} lg={9}>
            <DataTable rows={rowData} headers={headerData} isSortable useZebraStyles data-testid="data">
              {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer title="COVID-19 Screening Report">
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader key={header.key}{...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Pagination
                    totalItems={report.length}
                    backwardText="Previous page"
                    forwardText="Next page"
                    itemsPerPageText="Items per page:"
                    pageNumberText="Page Number"
                    pageSize={currentPageSize}
                    pageSizes={[5, 10, 15, 20, 25]}
                    onChange={({ page, pageSize }) => {
                      if (pageSize !== currentPageSize) {
                        setCurrentPageSize(pageSize);
                      }
                      setFirstRowIndex(pageSize * (page - 1));
                    }}
                  />
                </TableContainer>
              )}
            </DataTable>
          </Column>
        </Row>
      </Grid>
    </>
  );
};