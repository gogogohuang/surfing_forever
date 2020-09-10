import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataType } from 'root/redux/modules/realtimeOcean';
import styles from './Swell.style';

type SwellProps = {
  data: DataType;
}

export const dataElementName = ['週期', '海溫', '浪高', '波向'];

const Swell = ({ data }: SwellProps) => {
  const renderTableHeader = () => (
    <TableHead>
      <TableRow>
        <TableCell>時間</TableCell>
        {dataElementName.map(name => <TableCell key={name} align="right">{name}</TableCell>)}
      </TableRow>
    </TableHead>
  );

  const renderTableBody = () => (
    data && data.length > 0 ?
      <TableBody>
        {data.map(d => (
          <TableRow key={d.obsTime}>
            <TableCell component="th" scope="row">
              {d.obsTime}
            </TableCell>
            {d.weatherElement
              .filter(({ elementName }) => (dataElementName.indexOf(elementName) > -1))
              .map(({ elementName, elementValue }) => (
                <TableCell align="right" key={`${elementName}-${d.obsTime}`}>
                  {dataElementName.indexOf(elementName) > -1 ? elementValue : ''}
                </TableCell>
              ))
            }
          </TableRow>
        ))}
      </TableBody>
      : <TableBody />
  );


  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table aria-label="swell table">
          {renderTableHeader()}
          {renderTableBody()}
        </Table>
      </TableContainer>
      <style jsx>{styles}</style>
    </div>
  )
};

export default React.memo(Swell);
