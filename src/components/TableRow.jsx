import React from 'react'
import ModeButtons from './ModeButtons'
import Description from './Description'
import Hours from './Hours'
import Rate from './Rate'
import formatCurrency from '../formatCurrency'

const TableRow = ({isEditing, description, rate, hours}) => {
  return (
    <tr>
          <ModeButtons isEditing={isEditing}/>
          <Description isEditing={isEditing} value={description}/>
          <Rate isEditing={isEditing} value={rate}/>
          <Hours isEditing={isEditing} value={hours}/>

          <td>{formatCurrency(rate * hours)}</td>
    </tr>
  )
}

export default TableRow