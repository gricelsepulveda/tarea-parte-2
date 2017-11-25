import React, { Component } from 'react'
import { connect } from 'react-redux'
import { change } from 'redux-form'
import TodoForm from './components/TodoForm'
import './App.css'

class List extends Component {
  render() {
    const { items } = this.props
    console.log(items)
    return (
      items.map(usuario=> 
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th> 
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            <tr key={usuario.id}>
              <td>{usuario.firstname}</td>
              <td>{usuario.lastname}</td>
              <td>{usuario.age}</td>
              <td>{usuario.sex}</td>
            </tr>
          </tbody>
        </table>
      )
    )
  }
}

class App extends Component {
  save = payload => {
    this.props.save({ ...payload, id: Math.random().toString(36) })
    // window.location.replace("http://localhost:3000/success.html");
  }

  render() {
    const { data } = this.props.Todos
    return (
      <div className="App">
        <TodoForm onSubmit={this.save} />
        <List items={data} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  save: payload => {
    dispatch({ type: 'ADD_TODO', payload })
    dispatch(change('todo', 'title', ''))

  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
