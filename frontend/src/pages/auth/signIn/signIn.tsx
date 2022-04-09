import * as React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Button from 'components/common/button/button'
import { Typography } from 'components/common/typography/typography'
import { AuthLayout } from 'components/layouts/auth-layout/auth-layout'
import { InputField } from 'components/common/input/input-field'
import { PasswordInputField } from 'components/common/input/password-input-field'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { UserActionCreator } from 'store/slices'
import ErrorAlert from 'components/common/alerts/Alert.error'

const SigninSchema = Yup.object({
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
})

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector<any>(store => store.users.message) as string;
  const [errorPopup, setErrorPopup] = useState('');
  useEffect(() => {
    setErrorPopup(message);
  }, [message])
  return (
    <AuthLayout>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={values => {
          const { email, password } = values
          dispatch({ type: UserActionCreator.asyncLoginSaga().type, email, password })
        }}
      >
        <Form>
          <Typography type="h2">Sign in</Typography>
          <Typography type="body" className="mt-4 text-green-pressed">
            Use the information you entered during the registration to enter your account.
          </Typography>
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
          <div className="flex row">
            <Typography type="body-semibold" className="mt-6 text-green-pressed mr-8">
              <Link className="text-green ml-1" to="/sign-up">
                Register
              </Link>
            </Typography>
            <Typography type="body-semibold" className="mt-6 text-green-pressed">
              <Link className="text-green ml-1" to="/forgot-password">
                Forgot Password?
              </Link>
            </Typography>
          </div>
          {
            message
              ? <ErrorAlert
                title="Login failed!"
                message={errorPopup}
              />
              : null
          }
          <Button type="submit" nameBtn="primary" className="box-border w-102.5 mt-10">
            Sign in
          </Button>
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
            Sign in with Google
          </Button>
        </Form>
      </Formik>
    </AuthLayout>
  )
}

export default SignIn
