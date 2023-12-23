import React from 'react'
import './HomePage.css'
import ProductCard from '../../component/productcard/ProductCard'
import Layout from '../../component/layout/Layout';

const HomePage = () => {
  const imgList = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
    "https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg",
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg"
  ];

  return (
    <Layout>
      <div className='homeMain'>
        <h3>Top Collection</h3>
        <div className='MainCollection'>
          <div className='productCatery'>
            <div className='productlist'>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>

              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>
              <div className='product'>
                <a>
                  <img src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536' />
                </a>
                <div className='text-overlay'>
                  Product Name
                </div>
              </div>

            </div>
          </div>

        </div>
        <h3>Most Sold</h3>
        <div className='productSoldSection'>
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
          <ProductCard demoimage={imgList} />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
