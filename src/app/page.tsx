import React from 'react';
import Image from 'next/image'
import Marquee from 'react-fast-marquee'; 
type SearchResult = {
  id: number;
  service_desc: string;
  service_img: string;
  service_name: string;
  location: string;
  service_price: {
    mrp: number;
    offer_price: number;
  };
  carts: {
    serv_id: number;
    user_id: number;
    sku_id: number;
  }[];
  category: {
    id: number;
    catg_name: string;
    catg_desc: string;
    catg_image: string;
  };
};

const imageLoader = ({ src, width,height, quality }:any) => {
  return `https://example.com/${src}?w=${width}&h=${height}&q=${quality || 75}`
}


const AboutSec = () => {


  return (
    <div>
      <section>
      {/* <HomePageCarousel/> */}
      <div className="overflow-x-hidden flex w-full h-[400px] justify-between items-center  relative overflow-y-hidden">
          
          <Image src={'./vercel.svg'} loading='eager' width={1500} height={400} alt="" className='duration-700 w-full h-full left-0 top-0 z-0 absolute object-cover object-top' placeholder='blur' blurDataURL={imageLoader({src:'./next.svg',width:400,height:100,quality:75})}/>
          <div className='w-full h-[400px] flex justify-between items-center bg-[black] opacity-50 z-[1] left-0 top-0'>
        
          </div>
          <div className="w-full h-[181px] justify-center items-center gap-[50px] inline-flex mx-auto my-auto z-[2] absolute ">
              <div className=''>
                <div className="text-white text-[60px] font-bold ">Get your</div>
                <div className='flex  gap-[18px]  overflow-hidden w-[600px] h-[100px] '>
                  <div className="text-white text-[60px] font-bold ">services</div>
                  {/* <Marquee speed={55} direction='right' className=' w-full overflow-y-hidden'>
                    <div className='w-full  marquee '>
                       
                      <div className=" overflow-x-hidden flex w-[1000px] text-[60px] font-bold font-[Archivo Black] bg-gradient-to-r from-[#008FFE] to-[white] bg-clip-text text-transparent">
                      on demand
                      </div>
                      <div className="pr-20 overflow-y-hidden w-full  text-[60px] font-bold font-[Archivo Black] bg-gradient-to-r from-[#008FFE] to-[white] bg-clip-text text-transparent">
                      timely
                      </div>
                      <div className="pr-20 overflow-y-hidden w-full  text-[60px] font-bold font-[Archivo Black] bg-gradient-to-r from-[#008FFE] to-[white] bg-clip-text text-transparent">
                      tatkal 
                      </div>
                    </div>
                  </Marquee> */}
                  <p className='marquee h-[250px] text-[60px] font-bold font-[Archivo Black] bg-gradient-to-r from-[#008FFE] to-[white] bg-clip-text text-transparent'>on demand<br/>timely<br/>tatkal</p>
                </div>
              </div>
              {/* <div className='flex gap-10'>
                <div>
                  <h1>Get your</h1>
                  <h1>services</h1>
                </div>
                <div>
                <h1 className='flex items-end'>on demand <br/>timely<br/>tatkal</h1>
                </div>
              </div> */}
        {/* <div className="w-full gap-[25px] inline-flex justify-between items-stretch">
            <div className='inline-flex justify-start items-start'>
              <select className="appearance-none w-[260px] h-[70px] px-[26px] py-[17px] bg-white rounded-md justify-center items-center inline-flex text-black text-2xl font-medium font-['Inter']">
                {serviceAreas &&
                  serviceAreas.map((e: any, index: any) => (
                    <option value={e.city_name} key={index} className="self-stretch justify-start items-center gap-[50px] inline-flex ">
                      <div className="w-[122px] h-7 text-black">{e.city_name}</div>
                    </option>
                  ))
                }
              </select>
              <Image src={'./icons/location-icon.svg'} width={36} height={36} alt='' className='-ml-20 my-auto'/>
            </div>
            <Search className="text-black text-opacity-70 text-[22px] font-medium font-['Inter']" searchResultHeight="max-h-88"/>
          {/* <div  className="h-[70px] pl-[21px] pr-[455px] py-[19px] bg-white rounded-md justify-start items-center flex">
            <div className="self-stretch justify-start items-center gap-5 inline-flex">
              
              
            </div>
          </div> */}
        {/* </div>  */}
        </div>
      </div>
      
      </section>
    </div>
  );
};

export default AboutSec;
