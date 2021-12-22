import React from 'react'
import register1 from './images/register1.jpeg'
import register2 from './images/register2.jpeg'
import register3 from './images/register3.jpeg'
import register4 from './images/register4.jpeg'
const Pens = () => {
    return (
        <div>
            <div className="row" >
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <img src={register1}></img>
                            
                        </div>
                        <div className="row">
                            <p style={{paddingLeft:"130px",paddingTop:"20px",fontSize:"25px"}}> ₹ 312</p>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <img src={register2}></img>
                        </div>
                        <div className="row">
                            <p style={{paddingLeft:"130px",paddingTop:"20px",fontSize:"25px"}}> ₹ 500</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <img src={register3}></img>
                        </div>
                        <div className="row">
                            <p style={{paddingLeft:"130px",paddingTop:"20px",fontSize:"25px"}}> ₹ 900</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <img src={register4}></img>
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
