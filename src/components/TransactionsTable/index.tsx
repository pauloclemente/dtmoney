import { useEffect } from 'react'
import { Container } from './styles'

export function TransactionsTable () {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>R$ 2.000</td>
            <td>Desenvolvimento</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className='withdraw'>- R$ 600</td>
            <td>Casa</td>
            <td>22/02/2022</td>
          </tr>
        </tbody>
       </table>
    </Container>
  )
}
