import Table from 'react-bootstrap/Table';

function TableShop() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th> </th>
          <th> Type</th>
          <th> Price</th>
          <th> Status</th>
          <th>Command</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableShop;