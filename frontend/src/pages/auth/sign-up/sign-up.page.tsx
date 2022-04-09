import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Button from 'components/common/button/button'
import { Typography } from 'components/common/typography/typography'
import { AuthLayout } from 'components/layouts/auth-layout/auth-layout'
import { InputField } from 'components/common/input/input-field'
import { PasswordInputField } from 'components/common/input/password-input-field'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UserActionCreator } from 'store/user/userReducer'

const SignupSchema = Yup.object({
  firstName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  secondName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8)
    .max(24)
    .matches(
      /^[-a-zA-Z0-9 !"#$%&'()*+,.//:;<=>?@[\\\]^_`{|}~]*$/gm,
      'Password should contain only English letters, digits and special characters',
    )
    .matches(
      /[- !"#$%&'()*+,.//:;<=>?@[\\\]^_`{|}~]+$/gm,
      'Password should contain at least one special character',
    ),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Password must match'),
})

const SignUpPage: React.FC = () => {
  const [role, userRole] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <AuthLayout>
      <Formik
        initialValues={{
          firstName: '',
          secondName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          dispatch({
            type: UserActionCreator.asyncSIgnUpSaga().type,
            payload: { ...values, role, lastName: values.secondName },
          })
          history.push('/verify-email')
        }}
      >
        <Form>
          <Typography type="h2">Sign up</Typography>
          <Typography type="body" className="mt-4 text-green-pressed">
            Fill in the fields to create your account
          </Typography>
          <InputField name="firstName" placeholder="First name" className="w-102.5 mt-8" />
          <InputField name="secondName" placeholder="Second name" className="w-102.5 mt-6" />
          <InputField
            name="email"
            placeholder="Email address"
            className="w-102.5 mt-6"
            type="email"
          />
          <PasswordInputField
            name="password"
            placeholder="Password"
            className="w-102.5 mt-6"
            type="password"
          />
          <PasswordInputField
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-102.5 mt-6"
            type="password"
          />
          <Typography type="body-semibold" className="mt-6 text-green-pressed">
            Already have an account?
            <Link className="text-green ml-1" to="/sign-in">
              Sign in
            </Link>
          </Typography>
          <div className="w-102.5 flex mt-10">
            <Button
              onClick={() => userRole('developer')}
              type="submit"
              nameBtn="primary"
              className="w-48 h-12 box-border"
            >
              Sign up as developer
            </Button>
            <Button
              onClick={() => userRole('investor')}
              type="submit"
              nameBtn="primary"
              className="w-48 h-12 box-border ml-6.5"
            >
              Sign up as investor
            </Button>
          </div>
          <div className="flex items-center content-center mt-10">
            <div className="border border-bottom border-light-grey flex-1"></div>
            <div>
              <Typography type="body-medium" className="text-green mx-4">
                or
              </Typography>
            </div>
            <div className="border border-bottom border-light-grey flex-1"></div>
          </div>
          <Button nameBtn="google" className="w-102.5 mt-10">
            Sign up with Google
          </Button>
        </Form>
      </Formik>
    </AuthLayout>
  )
}

export default SignUpPage
