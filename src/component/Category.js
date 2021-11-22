import React from 'react'
import category_stapler from '../resources/category_stapler.png';

const Category = () => {
  return (
    <div style={{ margin: '20px' }}>
      <div style={{ width: '100%', height: '200px', backgroundColor: '#62846B', borderRadius: '20px' }}></div>
      <div style={{ width: '234px', height: '234px', borderRadius: '50%', position: 'relative', margin: 'auto', bottom: '120px' }}>
        <img style={{ width: '234px', height: '234px', borderRadius: '50%' }} src={category_stapler} ></img>
        <div style={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}>Category Name</div>
      </div>
      <div style={{ marginLeft: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '92px' }}>CATEGORY ID &emsp; &emsp;&emsp;  </div>
          <div style={{ fontSize: '20px' }}>12128</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '100px' }}>ITEM 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
          <div style={{ fontSize: '20px' }}>Camel Stapler</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '100px' }}>ITEM 2 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
          <div style={{ fontSize: '20px' }}>Camlin Stapler</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '100px' }}>ITEM 3 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
          <div style={{ fontSize: '20px' }}>Camel Hole Puncher</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '100px' }}>ITEM 4 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
          <div style={{ fontSize: '20px' }}>Korea Hole Puncher</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '500px', margin: 'auto' }}>
        <div style={{ width: '200px', height: '60px', backgroundColor: '#EEA94F', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', cursor: 'pointer' }}>Edit Category</div>
        <div style={{ width: '200px', height: '60px', border: '2px solid #EEA94F', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#EEA94F', cursor: 'pointer' }}>Delete Category</div>
      </div>
    </div>
  )
}

export default Category
