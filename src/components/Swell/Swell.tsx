import React from 'react';
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

const Swell = ({ data }: SwellProps) => {
  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table aria-label="swell table">
          <TableHead>
            <TableRow>
              <TableCell>時間</TableCell>
              <TableCell align="right">高度</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(d => (
              <TableRow key={d.time}>
                <TableCell component="th" scope="row">
                  {d.time}
                </TableCell>
                <TableCell align="right">{+d.value / 100}m</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <style jsx>{styles}</style>
    </div>
  )
};

export default React.memo(Swell);
