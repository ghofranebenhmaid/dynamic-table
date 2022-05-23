import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Table from './components/Table';
import useFetch from './hooks/useFetch'

function App ()
{
  const url = 'https://jsonplaceholder.typicode.com/users';
  const { data, loading, error, refetch } = useFetch(url)


  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (
    <React.Fragment>
      <GlobalStyles />
      <h1>Dynamic Table</h1>
      <p>(Vite.js, React.js, Styled-Components, and axios)</p>
      <a className='link' href='https://ghofranebenhmaid.com' target="_blank">ghofranebenhmaid.com</a>
      <Table data={ data } column={ column } />
    </React.Fragment>
  )
}

export default App
