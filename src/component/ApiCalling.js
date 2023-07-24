import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function ApiCalling() {

const [input, setInput]=useState();

async function changer(e){
const temp=e.target.value;
setInput(temp);

}
const[data, setData]=useState(); 
      const fetch=async()=>{

        try {
            const tempData= await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
                const waitwithdata=tempData.data[0].meanings[0].definitions[0].definition;
                    setData(waitwithdata);
        } catch (error) {
            setData("Not found! Please type correct word")
            
        }
       
      }

  return (
       <>
   <div>
   <input placeholder='Search Word' onChange={changer}/>
   <button onClick={fetch}>Search</button>
   </div>
   <div><h1>{data}</h1></div>
       </>
  )
}
