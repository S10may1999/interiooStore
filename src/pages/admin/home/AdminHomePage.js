import React, { useState } from 'react'
import './AdminHomePage.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import OrderPage from '../actions/OrderPage/OrderPage'
import ProductPage from '../actions/product_page/ProductPage'
import CustomerPage from '../actions/customer_page/CustomerPage'
import Layout from '../../../component/layout/Layout'


const AdminHomePage = () => {
    return (
        <Layout>
            <div className='homeMain'>
                <Tabs style={{ margin: 20 }}>
                    <TabList style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: 0,
                        cursor: 'pointer',
                        listStyle: 'none'
                    }}
                    >
                        {/* <div className=''> */}
                        <Tab style={{ marginRight: 15, fontSize: 15, padding: 10, backgroundColor: "white", borderRadius: 10 }}>Order</Tab>
                        <Tab style={{ marginRight: 15, fontSize: 15, padding: 10, backgroundColor: "white", borderRadius: 10 }}>Product</Tab>
                        <Tab style={{ marginRight: 15, fontSize: 15, padding: 10, backgroundColor: "white", borderRadius: 10 }}>Customer</Tab>
                        {/* </div> */}

                    </TabList>
                    <TabPanel>
                        <h2>Orders</h2>
                        <OrderPage />
                    </TabPanel>
                    <TabPanel>
                        <div className='productPageContainer'>
                            <h2>Product page</h2>
                            <button>Add Product</button>
                        </div>
                        <ProductPage />
                    </TabPanel>
                    <TabPanel>
                        <h2>Customer Page</h2>
                        <CustomerPage />
                    </TabPanel>

                </Tabs>
            </div >
        </Layout>
    )
}

export default AdminHomePage
