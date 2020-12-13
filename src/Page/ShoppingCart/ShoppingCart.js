import React, { useState, useEffect} from 'react';
import { Col, Table,Modal, InputNumber, Row, Space, Tag, Button } from 'antd';
import axios from 'axios';
import { useHistory } from "react-router-dom";




const ShoppingCart = () => {
  const [myRecord, setMyRecord] = useState({});
  let history = useHistory();
  const [listData, setListData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
      axios({
        method: 'DELETE',
        url:'http://localhost:3000/api/user/carts',
        data:{
          ids: [myRecord.id],
        },
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }).then(res => {
        setMyRecord({});
        axios({
          method: 'get',
          url: 'http://localhost:3000/api/user/carts',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        }).then(res => {
          try {
            setListData(res.data.map((product, index) => ({key: index, ...product, price: product.total_price/product.quantity})));
          } catch(err) {
            console.log(err);
            history.push('/login')
          }
          //
          console.log(res.data);
        });
        
      })
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      render: (text, record) =>{
        console.log(record)
        return (
          <Space size="middle">
            <InputNumber value={text} onChange={(value) => {
              // console.log(value);
            let index = record.key;
            let newListData = [
              ...listData.slice(0,index),
              {...record, quantity : value, total_price: record.price * value},
              ...listData.slice(index + 1)
            ];
              setListData(newListData);
              axios({
                method: "PATCH",
                url: "http://localhost:3000/api/user/carts",
                data: {
                  carts: newListData.map(data => ({id :data.id, product_id: data.product_id, quantity: data.quantity }))
                },
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
              }).then(res => {
                console.log(res.data);
              })
              }}/>
          </Space>
        )
      },
    },
    {
      title: 'Total',
      dataIndex: 'total_price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) =>{
        
        return (
          <Space size="middle">
            <Tag color={"red"} onClick={() => {
              setIsModalVisible(true);
              setMyRecord(record);
              }}>Delete</Tag>
          </Space>
        )
      },
    },
  ];
  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/user/carts',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }).then(res => {
      try {
        setListData(res.data.map((product, index) => ({key: index, ...product, price: product.total_price/product.quantity})));
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
        let _totalPrice = 0;
        let lsProduct = selectedRowKeys.map(index => listData[index]); 
        for(let i = 0; i < lsProduct.length; i ++){
          _totalPrice += parseFloat(lsProduct[i].total_price);
        }
        //  let _totalPrice = selectedRowKeys.map(index => listData[index]).reduce((sum, product) => {
        //     return sum + product.total_price;
        // })
        setTotalPrice(_totalPrice);
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
                        {totalPrice}
                        </Col>
                    </Row>

                    <Row style={{marginTop: "20px"}}>
                        <Col offset={6} span={3}>
                            Shipping:
                        </Col>
                        <Col offset={6} span={3}>
                          {30000}
                        </Col>
                    </Row>

                    <Row style={{marginTop: "20px"}}>
                        <Col offset={6} span={3}>
                            Total:
                        </Col>
                        <Col offset={6} span={3}>
                        {totalPrice <= 0? 0: totalPrice+30000 }
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
                        <Modal
                          title="Thông báo"
                          visible={isModalVisible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                          <p>Bạn có chắc chắn muốn xóa sản phẩm này ra khỏi giỏ hàng ?</p>
                          
                        </Modal>
                      </Col>
                    </Row>
                </Col>
            </Row>
        </>

    );
}
export default ShoppingCart;