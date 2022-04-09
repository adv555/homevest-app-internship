import Button from 'components/common/button/button'
import { InputField } from 'components/common/input/input-field'
import { Typography } from 'components/common/typography/typography'
import { AuthLayout } from 'components/layouts/auth-layout/auth-layout'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { UserActionCreator } from 'store/user/userReducer'
import { useHistory } from 'react-router'
import ErrorAlert from 'components/common/alerts/Alert.error'

const VerifyEmail: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isVerify = useSelector<any>(store => store.users.isVerify)
  useEffect(() => {
    if (isVerify) {
      history.push('/sign-in')
    }
  }, [isVerify])

  const message = useSelector<any>(store => store.users.message) as string;
  const [errorPopup, setErrorPopup] = useState('');
  useEffect(() => {
    setErrorPopup(message);
  }, [message])
  return (
    <AuthLayout>
      <div className=" align-middle">
        <Typography type="h2" className=" mt-20 ">
          Verify your email to Sign in
        </Typography>
        <Typography type="body" className="mt-4 text-green-pressed">
          We send you the activation code to your email address to verify your account
        </Typography>
        <Formik
          initialValues={{
            code: '',
          }}
          validationSchema={Yup.object({
            code: Yup.string().required('Required'),
          })}
          onSubmit={values => {
            const { code } = values
            dispatch({ type: UserActionCreator.asyncVerifyEmailSaga().type, code })
          }}
        >
          <Form>
            <InputField
              name="code"
              placeholder="Activation code"
              className="w-102.5 mt-6"
              type="text"
            />
            {
              message 
                  ? <ErrorAlert 
                      title="Error!"
                      message={errorPopup}
                  />  
                  : null
            }
            <div className="w-102.5 flex mt-10">
              <Button nameBtn="primary" className="w-screen h-12 box-border mr-0 " type="submit">
                Send the code
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  )
}

export default VerifyEmail;