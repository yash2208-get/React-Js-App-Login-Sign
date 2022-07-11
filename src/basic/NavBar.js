import React from 'react'

const NavBar = ({fileritem ,NavData}) => {
  return (
    <>
       <div className="tab">
       {NavData.map((ce)=>{
        return (
            <button className="tablinks" onClick={()=>fileritem(ce)}>{ce}</button>
        )
       })}
</div> 
    </>
  )
}

export default NavBar