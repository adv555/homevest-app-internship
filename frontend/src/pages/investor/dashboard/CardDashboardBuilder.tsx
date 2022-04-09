import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IInitialState as IEstateProps } from 'store/estateNew/estateNewReducer';
import { IInitialState as IApartmentsProps } from 'store/apartment/apartmentReducer';
import { IEstate } from 'store/estateNew/estateNewReducer';
import Sliders from 'components/common/slider/slider';
import Spinner from 'components/common/spinner/spinner';
import Error from 'components/common/error/error';
import InfoCard from 'components/Builders/infoCard';
interface IProps {
    estate: IEstateProps;
    apartment: IApartmentsProps;
}
const CardDashboardBuilder: React.FC<IProps> = ({estate, apartment}) => {
    
    const filterApartmentsImages = (id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let result: string[] | any = [];

        for (let i = 0; i < apartment.apartments.length; i++) {
            if(apartment.apartments[i].estateId == id) {
                result = [...result, apartment.apartments[i].images]
            }
        }

        return result;
    }

    if (estate.isLoading || apartment.isLoading) {
        return(
            <div className="h-300px">
               <Spinner isLabel={true} />
            </div>
        )
    }

    if (estate.error.trim().length || apartment.error.trim().length) {
        return(
            <div className="h-300px ">
                <Error message={'Upps...Loading data is Error!'} path={'/'} isLink={true} />
            </div>
        )
    }

    if(!estate.estate.length) {
        return (
            <div className="flex h-300px items-center justify-center">
                <Error message={'Builers not found...'} />
            </div>
        )
    }

    return(
        <div className='gap-8 grid grid-cols-2 mb-16'>

            {   
                estate.estate.map((builder:IEstate) => {
                    return (
                        <div key={builder.id} className='shadow-card rounded-xl w-full pb-4'>
                            
                            <div className='relative'>
                                <button className='z-10 absolute right-5 text-white top-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <div>
                                    <Sliders images={filterApartmentsImages(builder.id)} type={'card'} />
                                </div>
                                
                                
                                <div className='mb-3 absolute bottom-1.5 font-semibold ml-7 mr-1 text-h5 text-left text-white'>
                                    <h3 className='leading-body-large'>{builder.estateName}</h3>
                                    <p className='leading-body-large'>from {builder.amountOfMoney} uah</p>
                                </div>

                                <InfoCard estate={builder} />
                            </div>
                        </div>
                    )
                }) 
            }
        </div>
    )
}

export default CardDashboardBuilder;