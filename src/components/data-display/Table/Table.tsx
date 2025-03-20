import React from 'react'
import {
  TableContainerProps,
  TableProps,
  TableHeadProps,
  TableSortLabelProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableCellProps,
  TablePaginationProps,
} from './Table.types'
import {
  StyledTableContainer,
  StyledTable,
  StyledTableHead,
  StyledTableSortLabel,
  StyledTableBody,
  StyledTableFooter,
  StyledTableRow,
  StyledTableCell,
  StyledTablePagination,
} from './Table.style'

export const TableContainer: React.FC<TableContainerProps> = (props) => {
  return (
    <StyledTableContainer
      {...props}
    >
      {props.children}
    </StyledTableContainer>
  )
}

export const Table: React.FC<TableProps> = (props) => {
  return (
    <StyledTable
      {...props}
    >
      {props.children}
    </StyledTable>
  )
}

export const TableHead: React.FC<TableHeadProps> = (props) => {
  return (
    <StyledTableHead
      {...props}
    >
      {props.children}
    </StyledTableHead>
  )
}

export const TableSortLabel: React.FC<TableSortLabelProps> = (props) => {
  return (
    <StyledTableSortLabel
      {...props}
    >
      {props.children}
    </StyledTableSortLabel>
  )
}

export const TableBody: React.FC<TableBodyProps> = (props) => {
  return (
    <StyledTableBody
      {...props}
    >
      {props.children}
    </StyledTableBody>
  )
}

export const TableFooter: React.FC<TableFooterProps> = (props) => {
  return (
    <StyledTableFooter
      {...props}
    >
      {props.children}
    </StyledTableFooter>
  )
}

export const TableRow: React.FC<TableRowProps> = (props) => {
  return (
    <StyledTableRow
      {...props}
    >
      {props.children}
    </StyledTableRow>
  )
}

export const TableCell: React.FC<TableCellProps> = (props) => {
  return (
    <StyledTableCell
      {...props}
    >
      {props.children}
    </StyledTableCell>
  )
}

export const TablePagination: React.FC<TablePaginationProps> = (props) => {
  return (
    <StyledTablePagination
      {...props}
    />
  )
}