import * as Yup from 'yup'

export const ApartmentSchema = Yup.object({
  estateId: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  nameOfBuilding: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  numberOfRooms: Yup.number().min(1, 'Must be 1 room minimum').max(10).required('Required'),
  numberOfBathrooms: Yup.number().min(1, 'Must be 1 bathroom minimum').max(4).required('Required'),
  typeOfParking: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  price: Yup.number().required('Required').min(1).max(10000000000),
  priceForM2: Yup.number().required('Required').min(1).max(100000000),
  location: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  appartmentClass: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  floors: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
  appartmentState: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  currency: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  yearOfOperation: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
  salesStatus: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  investmentType: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  lending: Yup.boolean().required('Required'),
  installments: Yup.boolean().required('Required'),
  mortgage: Yup.boolean().required('Required'),
  images: Yup.mixed().required('Required'),
})
