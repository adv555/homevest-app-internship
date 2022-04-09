import React from 'react';
import './rangeMultipleStyle.css'

interface Props {
    fullMax?: number,
    min?: number,
    max?: number,
    returnValues: ({min, max}:ReturnValues) => void
}

interface ReturnValues {
    min: number,
    max: number,
}

const  MultipleRange: React.FC<Props> = ({fullMax = 1000000, min = 0, max = fullMax, returnValues}) => {
    const [minValue, setMinValue] = React.useState(min);
    const [maxValue, setMaxValue] = React.useState(max);
    const [inputMinValue, setInputMinValue] = React.useState(minValue);
    const [inputMaxValue, setInputMaxValue] = React.useState(maxValue);
    const [error, setError] = React.useState({ min: false, max: false});
    const minValRef: React.RefObject<HTMLInputElement> = React.useRef(null);
    const maxValRef: React.RefObject<HTMLInputElement> = React.useRef(null);
    const range: React.RefObject<HTMLDivElement> = React.useRef(null);

    React.useEffect(() => {
        if (minValue != min || maxValue != max) {
            setMinValue(min);
            setMaxValue(max);
        }
    }, [min, max])

    const getPercent = React.useCallback((value) => {
        return Math.round(((value - 0) / (fullMax - 0)) * 100);
    }, [min, max]);
    
    React.useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minValue);
            const maxPercent = getPercent(maxValRef.current.value);
            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minValue, getPercent]);

    React.useEffect(() => {
        if (minValRef.current) {
          const minPercent = getPercent(+minValRef.current.value);
          const maxPercent = getPercent(maxValue);
      
          if (range.current) {
           range.current.style.width = `${maxPercent - minPercent}%`;
          }
        }
    }, [maxValue, getPercent]);

    React.useEffect(() => {
        if (maxValRef.current || minValRef.current) {
            returnValues({min: minValue, max: maxValue})
        }
    },[minValue, maxValue])


    function validateInputMin(value:number):boolean {
        if (value >= 0 && value <= fullMax && value < maxValue) {
            return false;
        }
        return true;
    }

    function validateInputMax(value:number):boolean {
        if (value >= 0 && value >= minValue && value <= fullMax ) {
            return false;
        }
        return true;
    }

    function handlerMinValue(e:number) {
        setInputMinValue(e);

        if (validateInputMin(e)) {
            setError({min: true, max: error.max})
            return;
        }

        setError({min: false, max: error.max})
        setMinValue(e)
    }

    function handlerMaxValue(e:number) {
        setInputMaxValue(e);
        
        if (validateInputMax(e)) {
            setError({min: error.min, max: true})
            return
        }

        setError({min: error.min, max: false})
        setMaxValue(e)
    }

    return(
        <div className='flex gap-1 w-full flex-col relative'>
            

            <input 
                type="range"
                min={0}
                max={fullMax}
                value={minValue}
                ref={minValRef}
                onChange={(e) => {
                    const value = Math.min(+e.target.value, maxValue - 1);
                    setMinValue(value);
                    handlerMinValue(value);
                    e.target.value = value.toString();
                }}
                className='thumb thumb--zindex-3'
            />
            <input 
                type="range"
                min={0}
                max={fullMax}
                value={maxValue}
                ref={maxValRef}
                onChange={(e) => {
                    const value = Math.max(+e.target.value, minValue + 1);
                    setMaxValue(value);
                    handlerMaxValue(value);
                    e.target.value = value.toString();
                }}
                className='thumb thumb--zindex-4'
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
            </div>
            <div className='flex flex-row mt-4 justify-between'>
                <input 
                    type="number" 
                    name="minValue"
                    value={inputMinValue} 
                    className={'border-2 h-7 text-center focus:outline-none' + (error.min ? ' border-red' : '')}
                    onChange={(e) => handlerMinValue(+e.target.value)}
                    placeholder="min"
                />
                <input 
                    type="number" 
                    name="maxValue"
                    value={inputMaxValue} 
                    className={'border-2 h-7 text-center focus:outline-none' + (error.max ? ' border-red' : '')}
                    onChange={(e) => handlerMaxValue(+e.target.value)}
                    placeholder="max"
                />
            </div>
        </div>
    )
}

export default MultipleRange