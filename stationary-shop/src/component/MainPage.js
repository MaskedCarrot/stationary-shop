import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/MainPage.css';
import React, {useState} from 'react'

import Logo1 from './images/notebook.jpg'
import Logo2 from './images/pens.jpg'
import Logo3 from './images/Chart.png'
import Logo4 from './images/calculator.png'
import Logo5 from './images/cable.jpeg'
import Logo6 from './images/tapes.jpg'
import Logo7 from './images/colors.jpg'
import Logo8 from './images/lab.jpg'
import Logo9 from './images/gemotaric.png'
import Logo10 from './images/marker.jpg'
import Logo11 from './images/sticky.jpg'
import Logo12 from './images/logo12.png'
import Logo13 from './images/logo13.png'
import Logo14 from './images/logo14.png'
import Logo15 from './images/logo15.png'
import Logo16 from './images/logo16.png'
import Logo17 from './images/logo17.png'
import Logo18 from './images/logo18.png'
import Logo19 from './images/logo19.png'
import Logo20 from './images/logo20.png'
import Logo21 from './images/logo21.png'
import Logo22 from './images/logo22.png'
import Logo23 from './images/logo23.png'
import Logo24 from './images/logo24.png'
import Logo25 from './images/logo25.png'
import Logo26 from './images/logo26.png'




function MainPage() {
 
  return (
    <div className=" row main-page" style={{height:"300px"}} >
      <div className="row main-page-content" style={{width:"90%"}}>
        <h3>Top Categories</h3>
      </div>
      <div className="row row1" style={{width:"90%"}}>
        <div className="col-md-auto " onClick={() => window.location.href='/registers'}>
          <div className="row" >
              <div className="col" style={{padding:"0px"}}>
                  <img src={Logo1}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                  <p>Registers</p>
                </div>
          </div> 
          
         
        </div>
        
      
        <div className="col-md-auto" onClick={() => window.location.href='/pens'}>
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo2}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Pens</p>
                </div>
          </div>
         
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo3}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Charts</p>
                </div>
          </div>
      
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo4}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Calculator</p>
                </div>
          </div>
         
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo5}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Cables</p>
                </div>
          </div>
         
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo6}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Tapes</p>
                </div>
          </div>
          
        </div>
        
      </div>
      <div className="row row2">
        <div className="col-md-auto " >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo7}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Colours</p>
                </div>
          </div>
          
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo8}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Notebook</p>
                </div>
          </div>
        
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo9}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p> Box</p>
                </div>
          </div>
         
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo10}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Markers</p>
                </div>
          </div>
          
        </div>
        <div className="col-md-auto" >
        <div className="row">
              <div className="col" style={{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",paddingRight:"0px"}}>
                  <img src={Logo11}></img>
                </div>
                <div className="col" style={{paddingTop:"9px"}}>
                <p>Sticky</p>
                </div>
          </div>
         
        </div>
        
        
      </div>
      <div className="row all-items" style={{marginTop:"50px"}}>
        <h3>All items in one place</h3>
      </div>
      <div className="row all-items-data" style={{marginTop:"50px"}}>
        <div className="col-md-auto all-col"  >
                <img className="img" src={Logo12}></img>
                <p>Desktop Essentials</p>
        </div>
        <div className="col-md-auto all-col"  >
                <img className="img" src={Logo13}></img>
                <p>Paper & Pad</p>
        </div>
        <div className="col-md-auto all-col"  >
                <img className="img" src={Logo14}></img>
                <p>Drawing Essentials</p>
        </div>
        <div className="col-md-auto all-col"  >
                <img className="img" src={Logo15}></img>
                <p>Pen & Ink</p>
        </div>
        <div className="col-md-auto all-col"  >
                <img className="img" src={Logo16}></img>
                <p>Connector Cables</p>
        </div>
      </div>
      <div className="row items" style={{marginTop:"50px"}}>
        <h3>Frequently bought items</h3>
      </div>
      <div className="row items-data" style={{marginTop:"30px"}}>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo17}></img>
                <p>Office Stapler</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo18}></img>
                <p>Cello Maxriter Ball Pen</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo19}></img>
                <p>Chart Paper, GSM - 150-200</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo20}></img>
                <p>A4 Spiral Notebook</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo21}></img>
                <p>Sticky Notes - 5 *5</p>
                <p>₹ 150</p>
        </div>
        </div>
        <div className="row items-data" style={{marginTop:"20px"}}>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo22}></img>
                <p>Calculator - Casio</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo23}></img>
                <p>Paper Scissors, Size - 6 inch</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo24}></img>
                <p>Fevicol  - 200gm</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo25}></img>
                <p>2 inch transparent tape</p>
                <p>₹ 150</p>
        </div>
        <div className="col-md-auto items-col"  >
                <img className="img2" src={Logo26}></img>
                <p>Black Permanent Marker</p>
                <p>₹ 150</p>
        </div>
      </div>
      <div className="row view-button">
        <button className="col-md-1 ">View All</button>
      </div>

    </div>
  );
}

export default MainPage;
