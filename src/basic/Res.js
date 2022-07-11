import React, { useState } from 'react'
import "./st1.css";
import Menu from './menuApi'
import MeunCard from './MeunCard';
import NavBar from './NavBar';
const uiqid=[
  ...new Set(Menu.map((cu1)=>{
    return cu1.category;
  })
  ),
  "All",
]
// console.log(uiqid);
const Res = () => {
  const [meunData,setMeunData]=useState(Menu);
  const [NavData,setNavData1]=useState(uiqid)
  // console.log(meunData);
  const fileritem =(curele) =>{
    if(curele==="All"){
      setMeunData(Menu);
      return;
    }
    let updataList=Menu.filter((cuuElem)=>{
      return cuuElem.category===curele;
    })
    setMeunData(updataList);
  }
  return (
    <>
     <NavBar fileritem={fileritem} NavData={NavData}/>
    <MeunCard meunData={meunData}/> 
    </>
  );
  };
export default Res