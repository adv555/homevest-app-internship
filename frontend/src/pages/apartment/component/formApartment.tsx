/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { Title } from 'pages/apartment/component/title'
import Button from 'components/common/button/button'
import { ApartmentSchema } from 'pages/apartment/apartmentSchema'
import { ApartmentProps } from 'pages/apartment/types/apartment-props.interface'
import { InputApartmentField } from 'pages/apartment/component/inputFieldApartment'
import { Select } from 'components/common/select/select'
import ToggleButton from 'components/common/button/toggleBtn'
import clsx from 'clsx'
import { LabelSelectApartment } from 'pages/apartment/component/labelSelectApartment'
import { inputDatas } from 'pages/apartment/mock-data/input-data'
import { selectDatas } from 'pages/apartment/mock-data/select-data'
import { toggleDatas } from 'pages/apartment/mock-data/toggle-data'
import { ImageUploadInput, ImageThumb } from 'pages/apartment/component/ImageUpload'
import { AppRoute } from 'common/enums'
import { EstateApartmentsActionsCreator } from 'store/estateApartments/estateApartmentsReducer'
import createNotice from 'components/common/notice/notice'
import axios from 'axios'

const FormApartment: React.FC = () => {
  const dispatch = useDispatch()

  const inputFile = useRef(null)

  const [imgUrl, setImgUrl] = useState<string[]>([])

  async function postNewApartmentData(values: any) {
    const formData = new FormData()
    formData.append('estateId', values.estateId)
    formData.append('nameOfBuilding', values.nameOfBuilding)
    formData.append('numberOfRooms', values.numberOfRooms)
    formData.append('numberOfBathrooms', values.numberOfBathrooms)
    formData.append('typeOfParking', values.typeOfParking)
    formData.append('price', values.price)
    formData.append('priceForM2', values.priceForM2)
    formData.append('location', values.location)
    formData.append('appartmentClass', values.appartmentClass)
    formData.append('floors', values.floors)
    formData.append('appartmentState', values.appartmentState)
    formData.append('currency', values.currency)
    formData.append('yearOfOperation', values.yearOfOperation)
    formData.append('salesStatus', values.salesStatus)
    formData.append('investmentType', values.investmentType)
    formData.append('lending', values.lending)
    formData.append('installments', values.installments)
    formData.append('mortgage', values.mortgage)

    for (const value in values.images) {
      formData.append('images', values.images[value])
    }

    const result = await axios.post('/api/v1/appartments/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    return result
  }

  const createFilesValues = (files: any) => {
    const idx = Object.keys(files)
    const allImgFiles: any[] = []
    for (const i of idx) {
      allImgFiles.push(files[i])
    }
    setPreview(files)
    return allImgFiles
  }

  const setPreview = (files: any) => {
    const allUrls: any[] = []
    const idx = Object.keys(files)

    for (const i of idx) {
      allUrls.push(URL.createObjectURL(files[i]))
    }
    setImgUrl([...imgUrl, ...allUrls])
  }

  const onSubmitData = async (values: any) => {
    const result = await postNewApartmentData(values)
    const newApartment = result?.data?.apartment
    const data = { ...values }

    newApartment.images
      ? dispatch(EstateApartmentsActionsCreator.submitApartment(newApartment))
      : dispatch(EstateApartmentsActionsCreator.submitApartment(data))

    createNotice()
    backToDashboard()
  }

  const backToDashboard = () => {
    setTimeout(() => {
      document.location.assign(AppRoute.NEW_BUILDINGS)
    }, 500)
  }

  const initialValues: ApartmentProps = {
    estateId: '2c5c58a3-54f0-45ad-b0a9-62135fd8df47',
    nameOfBuilding: 'RC Rainbow',
    numberOfRooms: '4',
    numberOfBathrooms: '1',
    typeOfParking: 'underground',
    price: '450000',
    priceForM2: '2000',
    location: 'Kyiv',
    appartmentClass: '',
    floors: '',
    appartmentState: '',
    currency: '',
    yearOfOperation: '',
    investmentType: 'payment via bank card',
    salesStatus: '',
    lending: false,
    installments: false,
    mortgage: false,
    images:
      'https://c1.wallpaperflare.com/preview/183/25/215/pool-backyard-pool-swimming-backyard-patio.jpg',
  }

  return (
    <div className="absolute inset-x-0  mx-auto w-1440px px-75px">
      <div className="flex item-center justify-center mx-auto ">
        <div className="relative  w-1290px flex flex-col">
          <div className=" absolute flex justify-center items-center top-36  ">
            <Formik
              initialValues={initialValues}
              validationSchema={ApartmentSchema}
              onSubmit={onSubmitData}
            >
              {props => {
                const { values, handleChange, setFieldValue, dirty } = props
                return (
                  <Form method="post" className="items-center  text-body-small text-green">
                    <Title />
                    <div className="flex flex-row justify-center">
                      <div className=" w-1/2 ">
                        <div className="flex flex-wrap justify-between grid-col-2 gap-30px ">
                          {inputDatas.map(item => (
                            <InputApartmentField
                              key={item.name}
                              name={item.name}
                              label={item.label}
                              value={values[item.name]}
                              className={clsx('', {
                                'border-green': dirty,
                              })}
                            />
                          ))}
                        </div>
                        <InputApartmentField
                          name="location"
                          label="Location (City, street)"
                          value={values.location}
                          onChange={handleChange}
                          className={clsx('w-630px', {
                            'border-green': dirty,
                          })}
                        />
                        <div className="flex flex-wrap justify-between grid-col-2 gap-30px">
                          {selectDatas.map(el => (
                            <div className="relative  mb-8" key={el.name}>
                              <Select
                                key={el.name}
                                name={el.name}
                                options={el.options.map(option => option)}
                                placeholder={el.placeholder}
                                overrideClassNames={{
                                  Control: () => 'w-300px h-8.5',
                                  Menu: () => 'w-300px ',
                                  Option: () => 'w-72',
                                }}
                                onChange={option => setFieldValue(el.name, (option as any).value)}
                              />
                              {values[el.name] !== '' && (
                                <LabelSelectApartment labelName={el.labelName} />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center w-630px">
                          {toggleDatas.map(el => (
                            <ToggleButton
                              key={el.name}
                              label={el.label}
                              getSwitched={checked => (values[el.name] = checked)}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex  w-1/2 ml-30px flex-col">
                        {imgUrl && imgUrl.length > 0 ? (
                          <div className=" flex flex-wrap items-center justify-between">
                            {imgUrl.map((path: string) => (
                              <div key={path}>
                                <ImageThumb path={path} />
                              </div>
                            ))}
                            <ImageUploadInput
                              size="h-232px  w-300px "
                              onImageUpload={(event: { currentTarget: { files: any } }) => {
                                setFieldValue(
                                  'images',
                                  createFilesValues(event.currentTarget.files),
                                )
                              }}
                              inputFile={inputFile}
                            />
                          </div>
                        ) : (
                          <ImageUploadInput
                            size="h-232px  w-630px "
                            onImageUpload={(event: { currentTarget: { files: any } }) => {
                              setFieldValue('images', createFilesValues(event.currentTarget.files))
                            }}
                            inputFile={inputFile}
                          />
                        )}
                      </div>
                    </div>
                    <Button
                      name="primary"
                      type="submit"
                      label="Save"
                      className="mt-53px disabled:bg-green-inactive"
                      disabled={!dirty}
                    />
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormApartment
