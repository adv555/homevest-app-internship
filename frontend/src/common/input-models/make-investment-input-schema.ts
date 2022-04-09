import * as Yup from 'yup';

export const MakeInvestmentInputSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  country: Yup.string()
    .required('Required'),
  street: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  companyName: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  zipcode: Yup.string()
    .min(5, 'Zip code must be 5 characters')
    .max(5, 'Zip code must be 5 characters')
    .matches(/\d{5}/gm)
    .required('Required'),
  nameOfBank: Yup.string()
    .oneOf(['Monobank', 'PrivatBank'])
    .required('Required'),
  cardNumber: Yup.string()
    .min(19)
    .max(19)
    .matches(/(\d{4} ){3}\d{4}/gm, 'Card number must be "XXXX XXXX XXXX XXXX" format')
    .required('Required'),
  cvv: Yup.string()
    .min(3, 'CVV must be 3 characters')
    .max(3, 'CVV must be 3 characters')
    .matches(/\d{3}/gm, 'CVV must be only numbers')
    .required('Required'),
  nameOfCard: Yup.string()
    .required('Required'),
  expirationYear: Yup.number()
    .min(2022)
    .max(2032)
    .required('Required'),
  paymentAmount: Yup.number()
    .required('Required'),
  agreeTerms: Yup.boolean()
    .oneOf([true], 'Please, accept the terms')
    .required(),
  agreeRisks: Yup.boolean()
    .oneOf([true], 'Please, accept the risks')
    .required()

}).noUnknown();
