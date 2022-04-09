import React from 'react';
// import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';   
import { Header } from 'components/Navigation/Header';
import { AppBarDashboard } from 'components/Navigation/AppBarDashboard';
import { Logo } from 'components/Navigation/Logo';
import SelectLocationComponent from './SelectLocationComponent';
import ContainerFiltersAll from 'components/common/filtes/containerFiltersAll';
import CardDashboardBuilder from './CardDashboardBuilder';
import { EstateActionsCreatorNew, ApartmentActionCreator } from 'store/slices';
import clsx from 'clsx';


const DashboardContainer: React.FC = () => {
    const { estateNew, apartments } = useSelector(({ estateNew,apartments }: RootState) => ({
        apartments,
        estateNew
    }))

    const [isActiveMenu, setIsActiveMenu] = React.useState(false)

    const cities = [
        {
            "id": "01",
            "city": "Kiev"
        },
        {
            "id": "02",
            "city": "Lviv"
        },
        {
            "id": "03",
            "city": "Kharkiv"
        },
        {
            "id": "04",
            "city": "Ivano-Frankivsk"
        }
    ];

    const [isVisibleLocation, setVisibleLocation] = React.useState(false);
    const [selectCity, setSelectCity] = React.useState(cities[0]);

    const dispatch = useDispatch();
    
    
    
    React.useEffect(() => {
        dispatch(EstateActionsCreatorNew.fetchEstate());
        dispatch(ApartmentActionCreator.AsyncGetApartments());
    }, []);

    function handlerSetCity(value:any):void {
        setSelectCity(value);
        setVisibleLocation(false);
    }

    function handlerLocationVisible() {
        setVisibleLocation(!isVisibleLocation);
    }

    const onMenuClick = () => {
        setIsActiveMenu(!isActiveMenu)
    }

    const handlerFilters = (value:any) => {
        console.log(value)
        if (Object.keys(value).length) {
            dispatch(EstateActionsCreatorNew.fetchEstateFilters());
        }
    }

    return (
        <>
            <Header position="left-0 justify-center py-6 px-75px ">
                <Logo onClick={onMenuClick} />
                <AppBarDashboard />
            </Header>
            <div className={clsx('flex flex-col lg:container m-auto py-20 w-1290px')} >
                <div className={clsx('z-10 flex items-center justify-between mb-9 mt-16')} >
                    <SelectLocationComponent 
                        location={cities} 
                        isVisible={isVisibleLocation} 
                        selectLocation={selectCity} 
                        handlerIsVisible={() => handlerLocationVisible()}
                        handlerSelectCity={(location) => handlerSetCity(location)}
                    />
                        <ContainerFiltersAll 

                            property={{property: estateNew.estate}}
                            returnValueAll={handlerFilters} 
                        
                        />
                </div>
                <h2 
                    className={clsx('text-h2 font-bold text-black text-left')}
                >
                    Buildings in Mucahevo
                </h2>
                <CardDashboardBuilder 
                    estate={estateNew} 
                    apartment={apartments}
                />
            </div>
        </>
        
    )
}

export default DashboardContainer;
