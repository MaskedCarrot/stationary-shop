import React from 'react'
import pen1 from './images/pen1.jpg'
import pen2 from './images/pen2.jpg'
import pen3 from './images/pen3.jpg'
import pen4 from './images/pen4.jpg'
const Pens = () => {
    return (
        <div>
            <div className="row" >
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <img src={pen1}></img>
                            
                        </div>
                        <div className="row">
                            <p style={{paddingLeft:"130px",paddingTop:"20px",fontSize:"25px"}}> ₹ 312</p>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <img src={pen2}></img>
                        </div>
                        <div className="row">
                            <p style={{paddingLeft:"130px",paddingTop:"20px",fontSize:"25px"}}> ₹ 500</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <img src={pen3}></img>
                        </div>
                        <div className="row">
                            <p style={{paddingLeft:"130px",paddingTop:"20px",fontSize:"25px"}}> ₹ 900</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <img src={pen4}></img>
                        </div>
                        <div className="row">
                            <p style={{paddingLeft:"130px",paddingTop:"20px",fontSize:"25px"}}> ₹ 340</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Pens
