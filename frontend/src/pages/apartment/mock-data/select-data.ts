export const selectDatas = [
  {
    name: 'appartmentClass',
    options: [
      { value: 'Premium', label: 'Premium' },
      { value: 'Business', label: 'Business' },
      { value: 'Comfort', label: 'Comfort' },
      { value: 'Economy', label: 'Economy' },
    ],
    placeholder: 'Apartment class',
    labelName: 'Apartment class',
  },
  {
    name: 'floors',
    options: [
      { value: 'till 5', label: 'till 5' },
      { value: '6-10', label: '6-10' },
      { value: '10-16', label: '10-16' },
      { value: '17-26', label: '17-26' },
      { value: 'from 27', label: 'from 27' },
    ],
    placeholder: 'Floors',
    labelName: 'Floors',
  },
  {
    name: 'appartmentState',
    options: [
      {
        value: 'with rough repairs',
        label: 'With rough repairs',
      },
      { value: 'under repair', label: 'Under repair' },
      { value: 'no repair', label: 'No repair' },
      { value: 'with repair', label: 'With repair' },
    ],
    placeholder: 'Apartment state',
    labelName: 'Apartment state',
  },
  {
    name: 'currency',
    options: [
      { value: 'hryvnia', label: 'UAH' },
      { value: 'dollar', label: 'USD' },
    ],
    placeholder: 'Currency',
    labelName: 'Currency',
  },
  {
    name: 'yearOfOperation',
    options: [
      { value: 'Already in', label: 'Already in' },
      { value: '2022', label: '2022' },
      { value: '2023', label: '2023' },
      { value: '2024', label: '2024' },
      { value: '2025+', label: '2025+' },
    ],
    placeholder: 'Year of operation',
    labelName: 'Year of operation',
  },
  {
    name: 'salesStatus',
    options: [
      { value: 'not started', label: 'Not started' },
      { value: 'booked', label: 'Booked' },
      { value: 'started', label: 'Started' },
    ],
    placeholder: 'Sales status',
    labelName: 'Sales status',
  },
]
