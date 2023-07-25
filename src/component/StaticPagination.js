import React, { useEffect, useState } from 'react'
import "./All.css"
import axios from 'axios'
export default function StaticPagination() {

const [data, setData] = useState();
const[tenDataToShowInContentArea, setTen]=useState([]);
const[startfrom, setStart]=useState(0);
const[endAt, setEndAt]=useState(10);
const[finalData, setFinldata]= useState([]);
const[pageNo, setPageNo]=useState();


// Fetching data from API
    async function fetch1(){
   try {
        const Tempdata= await axios.get('https://jsonplaceholder.typicode.com/posts');
        const second=Tempdata.data;
       setData(second);       
      
   } catch (error) {
      console.log("Error Occured")
   }
    }
    useEffect(()=>{
      fetch1();
    },[])
    
    

// Taking out the array data from json object in useable form   
 function just(){
var tempArr=[];
   if(data=== undefined ){
    console.log("This if else is used . So that length in else block should not cause any issue because data is asyncronously updateing so there is high chance that data won't update but we try to access at that time it will causee error")
   }else {
    for( let i=0;i<data.length;i++){
        var temp2=data[i].title;
       tempArr.push(temp2);
   }
   setFinldata(tempArr)
  }


  
 }

// This function is used for going next 10 content of data 
   function forwardFun(){
    if(startfrom<90){
    setStart(startfrom+10)}
    var temp12=endAt+10;
    if(temp12<=100){
      setEndAt(temp12);}

      findingNextTenData();
   }

   // This function is used to filtter or take-out desired data from finalData array
    function findingNextTenData(){
        var temp3=[];
        temp3=[];
   for( var  ii=startfrom;ii<endAt;ii++){
        var temp4=finalData[ii];
        temp3.push(temp4);
        setTen(temp3);

        
   }

 }
// This is used for going back to previous data
 function previousFun(){
    
    if(startfrom>=10){
    setStart(startfrom-10);}
    if(endAt>=20){
    setEndAt(endAt-10);}
  
    findingNextTenData();

 }


 function pageNum(){
  var t1=(10-(100-endAt)/10);
  setPageNo(t1);
  // console.log(t1)
 }
// this is used to stop or restrict the rendering just by endAt, startFrom


useEffect(()=>{
  just();
 },[data])

 useEffect(()=>{
  pageNum();
 },[startfrom,endAt])



 useEffect(()=>{
  findingNextTenData();
  
},[startfrom,endAt,data])




  return (

    <><div className='SP_main'>
    <div className='SP_1'>
        <h1>Content Area</h1>
        {tenDataToShowInContentArea.map((item)=><h4>{item}</h4>)}
        {/* <h1>{startfrom +" " + endAt}</h1> */}
    </div>
    <div className='SP_2'>
    <button onClick={previousFun}>L</button>
    <h2>{pageNo}</h2>
    <button onClick={forwardFun}>R</button>
    </div>
    {/* <button onClick={fetch1}>fetch</button> */}
    {/* <button onClick={just}>Fetch</button> */}

</div>
    </>
  )
}
