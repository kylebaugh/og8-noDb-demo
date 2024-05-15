import React from 'react'
import formatCurrency from '../formatCurrency.js'

const Rate = ({isEditing, value}) => {

  if(isEditing){
    return <td>
      <input type="text" value={value} />
    </td>
  }else {
    return <td>{formatCurrency(value)}</td>
  }
}

export default Rate