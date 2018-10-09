import React, { Component } from 'react'
import { Form, Modal, Button } from 'semantic-ui-react'

class Add extends Component {
  initialState = {
    form: {
      name: '',
      genus: '',
      petPeeve: '',
    },
  }

  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, genus, petPeeve } = this.state.form 
    const { addUser } = this.props
    const addedUser = { name, genus, petPeeve }

    addUser(addedUser)

    this.setState(this.initialState)
  }  

  render() {
    const fields = Object.entries(this.state.form)

    console.log(fields)

    return (
      <Modal closeIcon trigger={<Button>Add Bro</Button>}>
        <Modal.Header>Add a bro to the Fellowship</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            {fields.map((field, i) => (
              <Form.Field key={i}>
                <label>{field}</label>
                <input name={field[0]} value={field[1]} type="text" onChange={this.handleChange} />
              </Form.Field>
            ))}
            <Button type="submit">Add the bro</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Add
