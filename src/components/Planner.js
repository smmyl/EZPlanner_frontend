import {useState} from 'react'
import April from './Months/4April'
import May from './Months/5May'
import moment from 'moment'
const Planner = (props) => {
    const months = ['March 2023', 'April 2023', 'May 2023', 'June 2023', 'July 2023', 'August 2023', 'September 2023', 'October 2023', 'November 2023', 'December 2023', 'January 2024', 'February 2024', ]
    const date = moment().format('MMMM YYYY')
    const [currentMonth, setCurrentMonth] = useState(date)

    const nextMonth = () => {
        const monthIndex = months.indexOf(currentMonth)
        setCurrentMonth(months[monthIndex + 1])
    }
    const prevMonth = () => {
        const monthIndex = months.indexOf(currentMonth)
        setCurrentMonth(months[monthIndex - 1])
    }

    return(
        <>
            <div class='text-black-700'>
                <div class='flex flex-grow w-screen h-screen overflow-auto'> 
                    <div class='flex flex-col flex-grow'>
                        <div class='flex justify-center items-center mt-4 mb-2 '>
                            <div class='flex mr-20 pr-20'>
                                <button onClick={prevMonth}>
                                    <svg class='w-7 h-7' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'/>
                                    </svg>
                                </button>
                            </div>
                            <h2 class='ml-2 text-2xl font-bold leading-none'>{currentMonth}</h2>
                            <div class='flex pl-20 ml-20'>
                                <button onClick={nextMonth}>
                                    <svg class='w-7 h-7' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class='grid grid-cols-7 mt-4 bg-gray-700 text-white'>
                            <div class='pl-1 text-md text-center'>Mon</div>
                            <div class='pl-1 text-md text-center'>Tue</div>
                            <div class='pl-1 text-md text-center'>Wed</div>
                            <div class='pl-1 text-md text-center'>Thu</div>
                            <div class='pl-1 text-md text-center'>Fri</div>
                            <div class='pl-1 text-md text-center'>Sat</div>
                            <div class='pl-1 text-md text-center'>Sun</div>
                        </div>
                        {'April 2023' == currentMonth ?
                            <April/>
                        :'May 2023' == currentMonth ?
                            <May/>
                        :
                        <>
                        </>
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Planner