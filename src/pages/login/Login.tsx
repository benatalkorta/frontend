import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import LoginFormFields from './components/LoginFormFields'
import { useHistory } from "react-router-dom";
import Header from '../../components/header/Header';
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';

const INITIAL_VALUES = {
  username: '',
  password: ''
}

export type ILoginFormFields = typeof INITIAL_VALUES;

const Login = () => {
  const history = useHistory();
  return (
    <div className="container">
      <Header />
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        {form => (
          <>
            <LoginFormFields />
            {/* <Prompt when={form.dirty} message={l10n('form.dirtyPrompt.message')} /> */}
          </>
        )}
      </Formik>

    </div>
  )

  function handleSubmit(values: ILoginFormFields, helpers: FormikHelpers<ILoginFormFields>) {
    if (values.username === 'student'){
      localStorage.setItem("username", 'student');
    } 
    if (values.username === 'admin') localStorage.setItem("username", 'admin');
    history.push('/home');
  }
}

export default Login;
