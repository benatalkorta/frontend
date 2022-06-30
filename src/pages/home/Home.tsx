import React, { useEffect, useState } from 'react'
import { Formik, FormikHelpers } from 'formik'
import HomeFormFields from './components/HomeFormFields'
import { getQuestions } from '../../api/getQuestions';
import Header from '../../components/header/Header';
import { IQuestion } from '../../types';
import { getTableDetails } from '../../api/getTableDetails';
import Table from './components/Table';
import DialogInsert from './components/DialogInsert'
import DialogDelete from './components/DialogDelete'
import Button from "@material-ui/core/Button";

const INITIAL_VALUES = {
  question: ''
}

export type IHomeFormFields = typeof INITIAL_VALUES;

const Home = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    async function getQuestionsFromApi() {
      const response = await getQuestions();
      setQuestions(response)
    }

    getQuestionsFromApi();
  }, [])
  return (
    <div className="container">
      <Header />
      <DialogInsert></DialogInsert>
      <DialogDelete></DialogDelete>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <HomeFormFields questions={questions} />
      </Formik>
      <Table columns={columns} />
    </div>
  )

  async function handleSubmit(values: IHomeFormFields, helpers: FormikHelpers<IHomeFormFields>) {
    const response = await getTableDetails(values);
    setColumns(response);
  }
}

export default Home;
