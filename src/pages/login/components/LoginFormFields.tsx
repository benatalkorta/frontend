import React from 'react'
import { Form, Field, useFormikContext } from 'formik'
import { ILoginFormFields } from '../Login';

const LoginFormFields = () => {
  const context = useFormikContext<ILoginFormFields>();

  return (
    <Form onSubmit={context.handleSubmit}>

      <div>
        <label>Username</label>
        <Field type="text" name="username" placeholder="username" autoFocus required />
      </div>

      <div>
        <label>Password</label>
        <Field type="password" name="password" placeholder="password" required />
      </div>

      <button type="submit">Login</button>
    </Form>
  )
}

export default LoginFormFields;
