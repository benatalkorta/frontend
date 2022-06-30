import React from 'react'
import { IOptionalField } from '../../../types'
import { Field } from 'formik'

interface IProps {
  field: IOptionalField;
}
const DynamicField = (props: IProps) => {
  const { field } = props;
  switch (field.type) {
    case 'string':
      return (
        <div>
          <label>{field.name}</label>
          <Field type="text" name={field.name} required />
        </div>
      );
    default: return null;
  }
}

export default DynamicField
