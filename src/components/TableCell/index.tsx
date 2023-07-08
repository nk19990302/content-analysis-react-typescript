import React, { ReactNode } from 'react'
import './cell.css'

const TableCell = ({ children, style }: { children: ReactNode, style?: Record<string, any> }) => {
  return (
    <span className='cell' style={style}>
      {children}
    </span>
  )
}

export default TableCell
