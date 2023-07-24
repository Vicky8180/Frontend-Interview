import React, { useState } from 'react'

export default function Search() {
    const[input, setInput]=useState();
    // console.log(input);
    const arr=["aabok","babdf","cajdakb","dab","eab","fab",
    "gajdb","hbc","ibc","jcd","kde","lde","mef","ngh","ohi","phi","qij","rij"];
   var[found, setFound] =useState([]);


function changer(){
       found=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes(input)){
            found.push(arr[i]);
            setFound(found);
        }
       }
       if(found.length===0){
        found.push("Not Found!")
        setFound(found);
       }
}
  return (
    <>
        <div>
        <input placeholder='takeInput'  onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={changer}>Search</button>

        </div>
        <div>
            {found.map((item)=><h1>{item +" "}</h1>)}
        </div>
    </>
  )
}



