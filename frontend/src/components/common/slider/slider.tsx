import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import arrow_prev from './arrow_prev.svg';
import arrow_next from './arrow_next.svg';

interface IRoutesMap {
    [index: string]: string;
}
interface IProps {
    type: string;
    className?: string;
    images?: string[];
}

interface IButtonSlider {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
}

const ArrowPrew:React.FC<IButtonSlider> = (props) => {
    const { onClick } = props;

    return (
        <div className={clsx('absolute -mt-5 bg-white border-none cursor-pointer flex h-8 hover:opacity-100 items-center justify-center opacity-40 outline-none left-5 rounded-full top-1/2 w-8 z-10')}>
            <img src={arrow_prev} className={'h-5 w-5'} onClick={onClick} alt="" />
        </div>
    )
}

const ArrowNext:React.FC<IButtonSlider> = (props) => {
    const { onClick } = props;

    return (
        <div className={clsx('absolute -mt-5 bg-white border-none cursor-pointer flex h-8 hover:opacity-100 items-center justify-center opacity-40 outline-none right-5 rounded-full top-1/2 w-8 z-10')}>
            <img src={arrow_next} className={'h-5 w-5'} onClick={onClick} alt="" />
        </div>
        
    )
}

const Sliders: React.FC<IProps> = ({type = 'default', images = []}) => {

    const TYPE: IRoutesMap = {
        default: 'w-auto',
        card: 'mb-80'
    }

    if (!images.length) {
        return <h1 className={clsx('border-4 border-dashed flex font-bold h-full w-full items-center justify-center m-3 rounded-xl text-grey')}>NO IMAGES</h1>
    }

    return(
        <>
            <Slider
                {...{
                    dots: true,
                    swipeToSlide: true,
                    prevArrow: <ArrowPrew />,
                    nextArrow: <ArrowNext />,
                    dotsClass: (`slick-dots ` + TYPE[type])
                    
                }}
            >

                {
                    images.map((imageUrl:string) => {

                        return(
                            <div key={imageUrl}>
                                <img 
                                    src={imageUrl} 
                                    alt="Image Building" 
                                    className={clsx('rounded-t-lg max-h-80 w-full object-cover')}
                                />
                            </div>
                        )
                        
                    })
                }

            </Slider>
        </>
    )
}

export default Sliders;