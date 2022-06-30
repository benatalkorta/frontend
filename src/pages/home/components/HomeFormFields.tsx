import React from 'react'
import { Form, Field, useFormikContext } from 'formik'
import { IHomeFormFields } from '../Home';
import { IQuestion } from '../../../types';
import DynamicField from './DynamicField';

interface IProps {
  questions: IQuestion[]
}

const HomeFormFields = (props: IProps) => {
  const context = useFormikContext<IHomeFormFields>();
  const { questions } = props;
  return (
    <Form onSubmit={context.handleSubmit}>
      <div>
        <label>Question</label>
        <Field as="select" name="question" required>
          {getOptions()}
        </Field>
      </div>
      {getCurrentDynamicFields()}
      <button type="submit">Submit</button>
    </Form>
  )

  function getOptions() {
    return questions.map(q => (
      <option value={q.id} key={q.id}>{q.question_description}</option>
    ))
  }

  function getCurrentDynamicFields() {
    const question = questions.filter(q => q.id.toString() === context.values.question)
    if (question.length === 0) return null;
    return question[0].fields.map(cur => (
      <DynamicField field={cur} key={cur.name} />
    ))
  }
}

export default HomeFormFields;
