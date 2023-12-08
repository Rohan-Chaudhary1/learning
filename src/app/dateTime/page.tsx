'use client';
import React,{useEffect, useRef, useState} from 'react'
import moment from 'moment';

const DateTime = () => {
  const [isTrue,setIsTrue]=useState(false)
  const [data,setData]=useState(new Date())
  
 

  const handleIsTrue=(e:any)=>{
    setData(prev=>{
      const tempData=prev;tempData.setDate(e.target.value)
      return tempData
    })
    setIsTrue(true)
  }
 console.log(data);

  const handleStoreTime=(e:any)=>{
    setData(prev=>{
      const tempData=prev;tempData.setHours(e.target.value)
      return tempData
    })
  }

  let formatHour=new Date().getHours()%12;
  let shift=formatHour > 12 ? "Am":"Pm";
  console.log(shift)
  let intime = `${formatHour} : 00 ${shift}`
  let outtime = `07:00 ${shift}`
  const [result, setResult] = useState<any>([])

  function intervals(startString:any, endString:any) {
    let res: string[]=[];
    var start = moment(startString, `hh:mm a`);
    var end = moment(endString, `hh:mm a`);
    start.minutes(Math.ceil(start.minutes() / 60) * 60);

    var current = moment(start);
    while (current <= end) {
      if (!res.includes(current.format(`hh:mm a`)))  {
        res.push(current.format(`hh:mm a`));
        current.add(60, 'minutes');
      }
    }
    setResult(res)
  }


  const [nextFiveDays, setNextFiveDays] = useState<any>([]);

  const getNextFiveDays = () => {
    const today = new Date();
    const newNextFiveDays = [];

    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i );
      newNextFiveDays.push(nextDay.toDateString());
    }

    setNextFiveDays(newNextFiveDays);
  };
  useEffect(()=>{
    getNextFiveDays();
    intervals(intime, outtime);
  },[])

  return (
    <div>
   <div className='flex gap-2 m-5'>
      
       <ul className='flex gap-3'>
       {nextFiveDays.map((date:any, index:any) => (
          <li key={index} value={date.slice(8,10)} onClick={handleIsTrue} className='w-[100px] border'>
            <div className='mx-2 pointer-events-none' >{date.slice(0,3)}</div>
            <p className='mx-2 pointer-events-none' >{date.slice(8,10)}</p>
          </li>
        ))}
       </ul>
      
    </div>
    {
      isTrue && <ul className='flex gap-2'>
      {
        result && result.length > 0  ? result.map((time:any, index:any) => {
          return (
              <li className='' key={index} value={time} onClick={handleStoreTime}>{time}</li>
    
          )
        }) : null
      }

    </ul>
    }
    </div>
  )
}

export default DateTime;