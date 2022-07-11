import React from 'react'
import "./st1.css";
const MeunCard = ({meunData}) => {
    // console.log(meunData);
  return (
    <>
                <div className="container">
            <div className="row">
    {meunData.map((curr) =>{
        return(
            <>
                <div className="col-md-4 col-12 col-xxl-4 mx-auto my-2" key={curr.id}>
                    <div className="card kk" >      
                        <div className="card-body">
                            <h5 className="card-title">{curr.name}</h5>
                            <p className="card-text">{curr.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{curr.category}</li>
                            <li className="list-group-item">{curr.price}</li>
                        </ul>
                        <img src={curr.image} className="img-fluid img-size" alt="..."/>
                    </div>
                </div>  
            </>
        );
    })}
    </div>
    </div>
    </>
  )
}
export default MeunCard