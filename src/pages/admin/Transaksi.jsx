import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Iconify from '../../components/Admin-Component/iconify/Iconify';
import Form from 'react-bootstrap/Form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';


import './Transaksi.css'

import { Container, Stack, Typography } from '@mui/material';

function createData(index, idPengguna, idProduk, totalPembayaran, statusBayar, metodePembayaran, statusTransaksi, tanggalPembayaran) {
  return { index, idPengguna, idProduk, totalPembayaran, statusBayar, metodePembayaran, statusTransaksi, tanggalPembayaran };
}

const rows = [
  createData('01', 'USER0001', 'PLNP100000', 30000, 'Terbayar', 'Gopay', 'Dibuat', '17/11/2022'),
  createData('02', 'USER0002', 'RGPD', 11000, 'Terbayar', 'Gopay', 'Dibuat', '01/11/2022'),
  createData('03', 'USER0003', 'TRIP10000', 10000, 'Tidak Terbayar', 'Ovo', 'Diperbarui', '02/11/2022'),
];

const Transaksi = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#396EB0",
      color: "#EBF1F7",
    },
  }));
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Manage Transaksi
        </Typography>
      </Container>

      <Container className="ModalTransaksi">
        <Typography id="modal-modal-title" variant="h6" component="h2" className="PrimaryModal pt-3">
          <div className='d-flex justify-content-start align-items-center ModalChild'>
            <span className="PrimaryModal__Data ms-2"> Data Transaksi</span>
            <div className="wrapper d-flex flex-row ms-auto">
              <div className="WrapperTransactions">
                <h3 className='AllTransactions'>Semua Transaksi</h3>
              </div>
              <div className="WrapperSearch ms-3">
                <h3 className='SearchText'>Search Here</h3>
              </div>
            </div>
          </div>
        </Typography>
        <TableContainer component={Paper} style={{ paddingTop: "30px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" className="evenodd">
            <TableHead className="theadcell">
              <TableRow className="theadcell">
                <StyledTableCell style={{ borderRadius: "10px 0 0 0" }}>#</StyledTableCell>
                <StyledTableCell align="right">ID Pengguna</StyledTableCell>
                <StyledTableCell align="right">ID Produk</StyledTableCell>
                <StyledTableCell align="right">Total Pembayaran</StyledTableCell>
                <StyledTableCell align="right">Status Pembayaran</StyledTableCell>
                <StyledTableCell align="right">Metode Pembayaran</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell style={{ borderRadius: "0 10px 0 0" }} align="right">Tanggal Pembayaran&nbsp;(g)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                >
                  <TableCell component="th" scope="row">
                    {row.index}
                  </TableCell>
                  <TableCell align="right">{row.idPengguna}</TableCell>
                  <TableCell align="right">{row.idProduk}</TableCell>
                  <TableCell align="right">{row.totalPembayaran}</TableCell>
                  <TableCell align="right">{row.statusBayar}</TableCell>
                  <TableCell align="right">{row.metodePembayaran}</TableCell>
                  <TableCell align="right">{row.statusTransaksi}</TableCell>
                  <TableCell align="right">{row.tanggalPembayaran}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

    </>
  )
}

export default Transaksi