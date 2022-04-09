export interface ApartmentProps {
  [key: string]: any
  nameOfBuilding: string
  numberOfRooms: number | string
  numberOfBathrooms: number | string
  typeOfParking: string
  price: number | string
  priceForM2: number | string
  location: string
  appartmentClass: string
  floors: number | string
  appartmentState: string
  currency: string
  yearOfOperation: number | string
  salesStatus: string
  lending: boolean
  installments: boolean
  mortgage: boolean
  images: string[] | string | any
}
