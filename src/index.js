import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Header } from 'semantic-ui-react'
import Add from './components/Add'
import BroTable from './components/BroTable'

class App extends Component {
  initialState = {
    users: [
      {
        name: 'Frodo',
        genus: 'Hobbit',
        petPeeve: 'jabronis',
      },
      {
        name: 'Aragorn',
        genus: 'Bro',
        petPeeve: 'cowardice',
      },
      {
        name: 'Gimli',
        genus: 'lilBro',
        petPeeve: 'getting tossed',
      },
    ],
  }

  state = this.initialState

  addUser = user => {
    const { users } = this.state
    this.setState({ users: [...users, user] })
  }

  deleteUser = userName => {
    const { users } = this.state
    this.setState({ users: users.filter(user => user.name !== userName) })
  }

  render() {
    const { users } = this.state

    return (
      <Container>
        <Header as="h1" style={{ marginTop: '20px' }}>
          Lord of the Rings Characters
        </Header>
        <Add addUser={this.addUser} />
        <BroTable bros={users} deleteUser={this.deleteUser}  />
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
