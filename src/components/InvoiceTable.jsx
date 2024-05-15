import React from 'react'
import ModeButtons from './ModeButtons'
import Description from './Description'
import Hours from './Hours'
import Rate from './Rate'
import TableRow from './TableRow'
import TableHeader from './TableHeader'
import AddButton from './AddButton'
import './InvoiceTable.css'

const InvoiceTable = () => {

  const testData = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

  const rows = testData.map((el) => <TableRow
    isEditing={false}
    description={el.description}
    rate={el.rate}
    hours={el.hours}
    key={el.id}
  />)

  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {rows}
      </tbody>
      <tfoot>
        <AddButton />
      </tfoot>
    </table>
  )
}

export default InvoiceTable