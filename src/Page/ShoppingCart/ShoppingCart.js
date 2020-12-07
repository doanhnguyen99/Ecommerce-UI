import React, { useState} from 'react';
import { Col, Table, Row } from 'antd';

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quatity',
    dataIndex: 'quatity',
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    product: `Edward King ${i}`,
    price: 32,
    quatity: i,
    total: i *32,
  });
}

const ShoppingCart = () => {
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
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
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
                </Col>
            </Row>
        </>

    );
}
export default ShoppingCart;