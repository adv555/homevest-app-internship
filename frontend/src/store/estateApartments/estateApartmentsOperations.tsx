/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from 'services'

async function fetchEstateApartmentsFromApi() {
  try {
    const data = await api.get('/appartments')
    return data
  } catch (error) {
    console.log(error)
  }
}

const postNewAppartment = async (newAppartmentData: any) => {
  // debugger
  if (!newAppartmentData || newAppartmentData.length > 1 || newAppartmentData?.filters) {
    return
  }

  try {
    const data = await api.post('/appartments', newAppartmentData)

    return data
  } catch (error) {
    console.log(error)
  }
}

export { fetchEstateApartmentsFromApi, postNewAppartment }
