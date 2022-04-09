import React from 'react';

interface IProps {
    full?: number,
    progress?: number
}

const ProgressBar:React.FC<IProps> = ({full = 100, progress = 0}) => {
    const [percent, setPersent] = React.useState(0);

    React.useEffect(() => {
        PercentStatus()
    })

    function PercentStatus() {
        const value = (progress / (full/100))
        setPersent(parseFloat(value.toFixed(1)));
    }

    return (
        <div className='flex flex-col font-medium items-center text-body'>
            <div className='flex items-center justify-between w-full'>
                <span className='block text-red'>{percent}%</span>
                <span className='block text-red'>
                    {'$' + progress}
                    <span className='ml-2 text-black'>
                        funded
                    </span>
                </span>
            </div>
            <div className='bg-black h-1 rounded-lg w-full'>
                <div className='bg-red h-1 rounded-xl' style={{width: percent+'%'}}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
