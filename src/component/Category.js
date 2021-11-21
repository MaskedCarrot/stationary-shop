import React from 'react'
import employeeAvatar from '../resources/employeeAvatar.png';

const Category = () => {
  return (
    <div style={{ margin: '20px' }}>
      <div style={{ width: '100%', height: '200px', backgroundColor: '#62846B', borderRadius: '20px' }}></div>
      <div style={{ width: '234px', height: '234px', borderRadius: '50%', position: 'relative', margin: 'auto', bottom: '120px' }}>
        <img style={{ width: '234px' }} src={employeeAvatar} ></img>
        <div style={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}>Category Name</div>
      </div>
      <div style={{ marginLeft: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '92px' }}>EMPLOYEE ID &emsp; &emsp;</div>
          <div style={{ fontSize: '20px' }}>12578</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '100px' }}>EMAIL ID &emsp;&emsp;&emsp;&emsp;</div>
          <div style={{ fontSize: '20px' }}>name.123@gmail.com</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '100px' }}>AADHAR NUMBER</div>
          <div style={{ fontSize: '20px' }}>1258300078215697</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '93px' }}>ADDRESS &emsp;&emsp;&emsp;&emsp;</div>
          <div style={{ fontSize: '20px' }}>72, Vaidh Ji ka Chohra, Jodhpur</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '92px' }}>CONTACT NUMBER</div>
          <div style={{ fontSize: '20px' }}>9999620000</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '105px' }}>DATE OF JOINING</div>
          <div style={{ fontSize: '20px' }}>22/05/2019</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '105px' }}>JOB PROFILE&emsp;&emsp;</div>
          <div style={{ fontSize: '20px' }}>Staff Member</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '500px', margin: 'auto' }}>
        <div style={{ width: '200px', height: '60px', backgroundColor: '#EEA94F', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', cursor: 'pointer' }}>Edit Profile</div>
        <div style={{ width: '200px', height: '60px', border: '2px solid #EEA94F', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#EEA94F', cursor: 'pointer' }}>Delete Profile</div>
      </div>
    </div>
  )
}

export default Category
