import React, { ReactNode } from 'react'
import './style.css'
import TableCell from '../TableCell';

type PropType = {
  headings?: string[] | ReactNode[];
  dataset?: Array<Array<string | ReactNode>>;
}

/*
  We can make it quit reusable by 
  getting style props and config based on requirement
*/
const FlexibleTable = ({ headings = [], dataset = [] }: PropType) => {

  const renderDataSet = (data: Array<string | ReactNode>, index: number) => {
    return (<div key={index} className='fixed-table-content'>
      {
        data.map((it, index) => {
          return index === 0 ? <TableCell key={index} style={{ fontWeight: 'bold' }}>{it}</TableCell> :
            <TableCell key={index}>{it}</TableCell>

        })
      }
    </div>)
  }

  return (
    <div className='table-wrapper'>

      <div className='fixed-table-heading'>
        {
          headings.map((it, index) => {
            return <TableCell key={index} style={{ fontWeight: 'bold' }}>{it}</TableCell>
          })
        }

      </div>
      <div className='fixed-table-content-wrapper'>
        {
          dataset.map((it, index) => {
            return renderDataSet(it, index);
          })
        }
      </div>
    </div>
  )
}

export default FlexibleTable;
