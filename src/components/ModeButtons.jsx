import React from 'react'

const ModeButtons = ({isEditing}) => {


  if(isEditing){
    return <td>
      <button>Save</button>
    </td>
  }else{
    return <td>
      <button>Delete</button>
      <button>Edit</button>
    </td>
  }


}

export default ModeButtons