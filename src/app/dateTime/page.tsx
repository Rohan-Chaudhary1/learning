'use client';
import React,{useEffect, useRef, useState} from 'react'
import moment from 'moment';

const DateTime = () => {
  const [isTrue,setIsTrue]=useState(false)
  const [storeDay,setStoreDay]=useState()
  const [storeDate,setStoreDate]=useState()
  const [storeTime,setStoreTime]=useState()
  const dayRef=useRef<any>('')
  const timeRef=useRef<any>('')
  const dateRef=useRef<any>('')

  const handleIsTrue=()=>{
    handleStoreDate();
    setIsTrue(true)
  }
 
   const handleStoreDate=()=>{
    setStoreDay(dayRef.current.textContent)
    setStoreDate(timeRef.current.textContent)
    console.log(storeDay)
    console.log(storeDate)
  }

  const handleStoreTime=()=>{
    setStoreTime(timeRef.current.textContent)
    console.log(storeTime)
  }

  // let second=1000, minute=60*second,hour=60*minute,day=24*hour;
  // let getTime=new Date().getTime();
  // let formatHour=(getTime/hour);
  // console.log(formatHour)
  let intime = "10:00 Am"
  let outtime = "07:00 Pm"
  const [result, setResult] = useState<any>([])

  function intervals(startString:any, endString:any) {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 60) * 60);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm a'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm a'));
        current.add(60, 'minutes');
      }
    }


    return result;
  }

  intervals(intime, outtime);



  const [nextFiveDays, setNextFiveDays] = useState([]);

  const getNextFiveDays = () => {
    const today = new Date();
    const newNextFiveDays = [];

    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i + 1);
      newNextFiveDays.push(nextDay.toDateString());
    }

    setNextFiveDays(newNextFiveDays);
  };
  useEffect(()=>{
    getNextFiveDays();
  },[])

  return (
    <div>
   <div className='flex gap-2 m-5'>
      
        {nextFiveDays.map((date, index) => (
          <button key={index} onClick={handleIsTrue} className='w-[100px] border'> 
            <p className='mx-2' ref={dayRef}>{date.slice(0,3)}</p>
            <p ref={dateRef}>{date.slice(8,10)}</p>
          </button>
        ))}
      
    </div>
    {
      isTrue && <div className='flex gap-2'>
      {
        result && result.length > 0  ? result.map((time:any, index:any) => {
          return (
            <div key={index} onClick={handleStoreTime} className='w-[90px] h-[42px]  bg-white rounded-md border border-stone-300 justify-center items-center inline-flex '>
              <p ref={timeRef}>{time}</p>
    
            </div>
          )
        }) : null
      }
              {/* <p>{String (moment().weekday(moment().day())).slice(0,3)}</p> */}

    </div>
    }
    </div>
  )
}

export default DateTime;