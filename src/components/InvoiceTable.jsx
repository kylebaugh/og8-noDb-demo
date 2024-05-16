import {useState, useEffect} from 'react'
import TableRow from './TableRow'
import TableHeader from './TableHeader'
import AddButton from './AddButton'
import './InvoiceTable.css'
import axios from 'axios'

// const initialData = [
//   { id: 0, description: 'Content plan', rate: 50, hours: 4 },
//   { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
//   { id: 2, description: 'Website design', rate: 50, hours: 5 },
//   { id: 3, description: 'Website development', rate: 100, hours: 5 },
// ];

// let globalId = 4

const InvoiceTable = () => {

  const [testData, setTestData] = useState([])

  useEffect(() => {
    console.log('Test Data Array', testData)

    axios.get('/invoices')
      .then((res) => {
        setTestData(res.data)
      })

  }, [])


  const addInvoiceRow = () => {
    const newRow = {
      description: 'New Job Goes here',
      rate: 0,
      hours: 0,
      isEditing: true
    }

    axios.post('/newInvoice', newRow)
      .then((res) => {
        // console.log('for Craig', res.data)
        setTestData(res.data)
      })
  }

  const deleteInvoiceRow = async (id) => {
    console.log(`Delete function hit for id: ${id}`)

    const newInvoiceArray = await axios.delete(`/deleteInvoice/${id}`)

    console.log('new invoice array', newInvoiceArray)

    setTestData(newInvoiceArray.data)

  }

  const editInvoiceRow = (id, body) => {
    //
    console.log('Row with id:', id)
    console.log('body object:', body)

    axios.put(`/updateInvoice/${id}`, body)
      .then((res) => {
        setTestData(res.data)
      })
  }

  const rows = testData.map((el) => <TableRow
    initialIsEditing={el.isEditing}
    initialDescription={el.description}
    initialRate={el.rate}
    initialHours={el.hours}
    key={el.id}
    deleteInvoiceRow={() => deleteInvoiceRow(el.id)}
    editInvoiceRow={editInvoiceRow}
    id={el.id}
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
        <AddButton addInvoiceRow={addInvoiceRow}/>
      </tfoot>
    </table>
  )
}

export default InvoiceTable