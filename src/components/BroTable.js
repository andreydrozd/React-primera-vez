import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'

class BroTable extends Component {

  render() {

    const { bros, deleteUser } = this.props

    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> Name </Table.HeaderCell>
            <Table.HeaderCell> Genus </Table.HeaderCell>
            <Table.HeaderCell> Pet Peeve </Table.HeaderCell>
            <Table.HeaderCell> Actions </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bros.map((bro, i) => <Table.Row key={i}>
              <Table.Cell>{bro.name}</Table.Cell>
              <Table.Cell>{bro.genus}</Table.Cell>
              <Table.Cell>{bro.petPeeve}</Table.Cell>
              <Table.Cell>
                <Button color="olive">Edit</Button>
                <Button color="red" onClick={() => {deleteUser(bro.name)}}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    )
  }
}



export default BroTable