
import React from 'react';
import './DisplayCard.css'

function DisplayCard(props) {
    return (
        <>
        <div className="container">
            { props.info.map((values)=>{
                return (
                    <>
                    <div className="box">
                <div className="content">
                    <h5>{values.title}</h5>
                    <p>{values.description}</p>
                </div>
                <img className="image-card" src={values.image} alt=" img" />

            </div>
                    </>
                )
            })}
            

        </div>
        </>
      
        
       
    
        
      
        
 
    
    )
}

export default DisplayCard;