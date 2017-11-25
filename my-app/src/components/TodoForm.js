import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class TodoForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name='firstname' component={renderField} type='text' label='Nombre' />
        <Field name='lastname' component={renderField} type='text' label='Apellido' />
        <Field name='age' component={renderField} type='text' label='Edad' />
        
         
        <label>Hombre</label>
        <Field name="sex" component={renderField} type="radio" value="hombre" />
        <label>Mujer</label>
        <Field name="sex" component={renderField} type="radio" value="mujer"/>

        <button type='submit'>Enviar</button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  //validar nombre
  if (!values.firstname) {
    errors.firstname = 'Debes ingresar un nombre'
  }

  //validar apellido
  if (!values.lastname) {
    errors.lastname = 'Debes ingresar un apellido'
  }

  //validar edad
  if (!values.age) {
    errors.age = 'Debes ingresar tu edad'
  } else if (!/^[0-9]*$/.test(values.age)){
    errors.age = 'Sólo números'
  }

  return errors
}

TodoForm = reduxForm({
  form: 'todo',
  validate,
})(TodoForm)

export default TodoForm
