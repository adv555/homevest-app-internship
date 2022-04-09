import React from 'react';
import { IEstate } from 'store/estateNew/estateNewReducer';
import ProgressBar from 'components/common/progressBar/progressBar';
import calendarIcon from 'assets/images/calendarIcon.svg';
import durationIcon from 'assets/images/durationIcon.svg';
import locationIcon from 'assets/images/locationIcon.svg';
import moneyIcon from 'assets/images/moneyIcon.svg';
import percentIcon from 'assets/images/percentIcon.svg';
import coinIcon from 'assets/images/coinIcon.svg';

interface IProps {
    estate: IEstate
}

const InfoCard: React.FC<IProps> = ({estate}) => {
    return (
        <div>
            <div className='grid grid-cols-2 h-7 mx-4 my-3'>
                <div className='flex gap-4 items-center'>
                    <img className='rounded-xl' src={moneyIcon} alt="Image" />
                    <p className='font-body-large text-body-large'>Funding state</p>    
                </div>  
                <ProgressBar full={Number(estate.amountOfMoney?.trim())} progress={78689} />
            </div>
            <div className='grid grid-cols-2 h-7 mx-4 my-3'>
                <div className='flex gap-4 items-center'>
                    <img src={percentIcon} alt="" />
                    <p className='text-body-large font-body-large'>Annual return (%)</p>
                </div>
                <div className='flex font-medium items-center justify-end text-body'>
                    <span>{estate.annualReturn} % p.a.</span>     
                </div>
            </div>
            <div className='grid grid-cols-2 h-7 mx-4 my-3'>
                <div className='flex gap-4 items-center'>
                    <img src={durationIcon} alt="" />
                    <p className='text-body-large font-body-large'>Duration</p>
                </div>
                <div className='flex font-medium items-center justify-end text-body'>
                    <span>{estate.duration} months </span>
                </div>
            </div>
            <div className='grid grid-cols-2 h-7 mx-4 my-3'>
                <div className='flex gap-4 items-center'>
                    <img src={locationIcon} alt="" />
                    <p className='text-body-large font-body-large'>Location</p>
                </div>
                <div className='flex font-medium items-center justify-end text-body'>
                    <span>{estate.location}</span> 
                </div>
            </div>
            <div className='grid grid-cols-2 h-7 mx-4 my-3'>
                <div className='flex gap-4 items-center'>
                    <img src={calendarIcon} alt="" />
                    <p className='text-body-large font-body-large'>Distribution</p>
                </div>
                <div className='flex font-medium items-center justify-end text-body'>
                    <span>{estate.distribution} months</span> 
                </div>
            </div>
            <div className='grid grid-cols-2 h-7 mx-4 my-'>
                <div className='flex gap-4 items-center'>
                    <img src={coinIcon} alt="" />
                    <p className='text-body-large font-body-large'>Profit</p>
                </div>
                <div className='flex font-medium items-center justify-end text-body text-green'>
                    <span>${estate.profit}</span> 
                </div>
            </div>
        </div>
    )
}

export default InfoCard;