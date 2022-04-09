import React from 'react';
import { Meta } from "@storybook/react";
import { withFormik } from 'storybook-formik';
import * as Yup from 'yup';
import { InputField } from './input-field';
import { PasswordInputField } from './password-input-field';
import 'assets/styles/fonts.css';
import 'assets/styles/tailwind.css';
import { SelectField } from '../select/select-field';

export const Form = () => (
  <div>
    <div>
      <InputField name="email" placeholder='Email' />
    </div>
    <div className="mt-2">
      <PasswordInputField name="password" placeholder='Password' />
    </div>
    <div className="mt-2">
      <SelectField
        name="city"
        placeholder='Select city...'
        options={[
          {
            value: '1',
            label: 'Kyiv'
          },
          {
            value: '2',
            label: 'Mukachevo'
          },
          {
            value: '3',
            label: 'Kryvy Rig'
          }
        ]}
      />
    </div>
  </div>
);

Form.decorators = [withFormik];
Form.parameters = {
  formik: {
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      password: Yup.string()
        .required('Required')
        .min(8)
        .max(24)
        // OWASP special characters: https://owasp.org/www-community/password-special-characters
        .matches(/^[-a-zA-Z0-9 !"#$%&'()*+,.//:;<=>?@[\\\]^_`{|}~]*$/gm, 'Password should contain only English letters, digits and special characters')
        .matches(/[- !"#$%&'()*+,.//:;<=>?@[\\\]^_`{|}~]+$/gm, 'Password should contain at least one special character')
    })
  }
}

export default {
  title: 'UI/Form/Form'
} as Meta;
