import React, { useState, useEffect} from 'react';
import { Col, Table, Row, Button } from 'antd';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const columns = [
  {
    title: 'Product',
    dataIndex: 'product_name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quatity',
    dataIndex: 'quantity',
  },
  {
    title: 'Total',
    dataIndex: 'total_price',
  },
];


const ShoppingCart = () => {
  let history = useHistory();
  const [listData, setListData] = useState([]);
  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/user/carts',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
    }).then(res => {
      try {
        setListData(res.data.map((product, index) => ({key: index, ...product})));
      } catch(err) {
        console.log(err);
        history.push('/login')
      }
      //
      console.log(res.data);
    });

  },[]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
      };
    
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: changableRowKeys => {
                console.log("on select")
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              });
              setSelectedRowKeys(newSelectedRowKeys);
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
                return false;
              });
              setSelectedRowKeys(newSelectedRowKeys);
            },
          },
        ],
      };

    return(
        <>
            <Row>
                <Col offset={3} span={18}>
                    <h1 style={{textAlign: "center", paddingBottom:"30px"}}>
                        Shopping Cart
                    </h1>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={listData} />
                </Col>
            </Row>
            <Row > 
                <Col offset={3} span={18} style={{backgroundColor: "white", paddingTop: "20px", paddingBottom: "30px" }}>
                    <h1 style={{textAlign: "center"}}>
                        Shopping Cart
                    </h1>
                    <Row style={{marginTop: "20px"}}>
                        <Col offset={6} span={3}>
                            Product total:
                        </Col>
                        <Col offset={6} span={3}>
                        12485
                        </Col>
                    </Row>

                    <Row style={{marginTop: "20px"}}>
                        <Col offset={6} span={3}>
                            Shipping:
                        </Col>
                        <Col offset={6} span={3}>

                        </Col>
                    </Row>

                    <Row style={{marginTop: "20px"}}>
                        <Col offset={6} span={3}>
                            Total:
                        </Col>
                        <Col offset={6} span={3}>

                        </Col>
                    </Row>
                    <Row>
                      <Col offset={11} span={2}>
                        <Button size="large" type="primary"
                          onClick={() => {
                            let arr = selectedRowKeys.map(key => ({
                              product_id: listData[key].product_id,
                              quantity: listData[key].quantity}));

                            axios({
                              method: 'post',
                              url: 'http://localhost:3000/api/user/orders',
                              data: {
                                  orders: arr
                              },
                              headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem("token")
                              }
                            }). then(res => {
                              console.log(res.data);
                              history.push('/')
                            })
                            console.log(arr)
                          }}
                        >Buy</Button>
                      </Col>
                    </Row>
                </Col>
            </Row>
        </>

    );
}
export default ShoppingCart;