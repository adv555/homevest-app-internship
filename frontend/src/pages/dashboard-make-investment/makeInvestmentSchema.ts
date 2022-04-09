import * as Yup from 'yup';

export const MakeInvestmentSchema = Yup.object({
  fullName: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  country: Yup.string()
    .oneOf(['Ukraine'])
    .required('Required'),
  street: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  companyName: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  city: Yup.string()
    .oneOf(['Mukachevo'])
    .required('Required'),
  zipCode: Yup.string()
    .min(5, 'Zip code must be 5 characters')
    .max(5, 'Zip code must be 5 characters')
    .matches(/\d{5}/gm)
    .required('Required'),
  nameOfBank: Yup.string()
    .oneOf(['MonoBank', 'PrivatBank'])
    .required('Required'),
  cardNumber: Yup.string()
    .min(19)
    .max(19)
    .matches(/(\d{4}\/ ){3}\d{4}/gm, 'Card number must be "XXXX XXXX XXXX XXXX" format')
    .required('Required'),
  cvv: Yup.string() 
    .min(3, 'CVV must be 3 characters')
    .max(3, 'CVV must be 3 characters')
    .matches(/\d{3}/gm, 'CVV must be only numbers')
    .required('Required'),
  nameOfCard: Yup.string()
    .oneOf(['Universalna'])
    .required('Required'),
  expirationYear: Yup.date()
    .min(4)
    .max(4)
    .required('Required'),
});
