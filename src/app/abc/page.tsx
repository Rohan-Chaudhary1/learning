'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
interface userData {
  first_name:string,
  last_name:string,
  email:string,
  phone:string
}

const Page = () => {

    const [formData, setFormData] = useState<userData>({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
      });
    const [list,setList]=useState<userData[]>([])

      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        
      };

      //create
      const handleSubmit = async(e:any) => {
        e.preventDefault();

        
        const createData =`mutation MyMutation {
          insert_users(objects: {first_name: "${formData.first_name}", last_name: "${formData.last_name}", email: "${formData.email}", phone: "${formData.phone}"}) {
            affected_rows
            returning {
              email
              created_at
              first_name
              last_name
              phone
            }
          }
        }` 
        
        await axios({
            method:'post',
            url:'https://rapid-garfish-43.hasura.app/v1/graphql',
            headers:{
              "content-type":'application/json',
              "x-hasura-admin-secret": '7G321666y2AFHzuuEZJC9d7twoGO4Ngcgv5TgoMm7KsXgnjZ8YARMb9SNWbdRVWV'
            },
            data:JSON.stringify({
                query:createData,
                variable:{},
                
            })
        }).then((res:any)=>console.log(res.data))
        
      };
      
    //read
    useEffect(()=>{
      const readFunc=async()=>{

        const readData=`query MyQuery {
          users {
            first_name
            last_name
            email
            phone
          }
        }`

        const res =   await axios({
          method:'post',
          url:'https://rapid-garfish-43.hasura.app/v1/graphql',
          headers:{
            "content-type":'application/json',
            "x-hasura-admin-secret": '7G321666y2AFHzuuEZJC9d7twoGO4Ngcgv5TgoMm7KsXgnjZ8YARMb9SNWbdRVWV'
          },
          data:JSON.stringify({
              query:readData,
              variable:{},
              
          })
      }).then((res:any)=>{
        // const fetchData=res.data
        console.log(res.data.data.users)
        setList(res.data.data.users)
        console.log(list)
      }).catch((error)=>console.log(error))
      }

      readFunc();
    },[])
  return (
    <div className='mt-10'>
       <form onSubmit={handleSubmit} className='w-[800px] mx-auto p-5 border border-black flex flex-col justify-center items-center'>
      <label className='w[100px]'>
        First Name:
        <input
          type="text"
          name="first_name"
          className='border border-black p-2 outline-none'
          value={formData.first_name}
          onChange={handleChange}
        />
      </label >
      <br /><br/>

      <label className='w[100px]'>
        Last Name:
        <input
          type="text"
          name="last_name"
          className='border border-black p-2 outline-none'
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <br /><br/>

      <label className='w[100px]'>
        Email:
        <input
          type="email"
          name="email"
          className='border border-black p-2 outline-none'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br /><br/>

      <label className='w[100px]'>
        Phone:
        <input
          type="text"
          name="phone"
          className='border border-black p-2 outline-none'
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br /><br/>

      <button type="submit" className='border border-black p-2' >Submit</button>
    </form>
    <table className=''>
     <thead>
     <tr>
        <th>FIRST NAME</th>
        <th>LAST NAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
      </tr>
     </thead>
    <tbody>
    {
      list?.map((item,index)=>(
        <tr key={index}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))
    } 
    </tbody> 
    </table>
    </div>
  )
}

export default Page