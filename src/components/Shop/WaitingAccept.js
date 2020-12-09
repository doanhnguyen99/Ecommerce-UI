import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import Product from '../Product';

import { useHistory } from "react-router-dom";


const WaitingAccept = ({type}) =>{
    let history = useHistory();
    const [listProduct, setLitProduct] = useState([]);
    const [listSelect, setListSelect ] = useState([]);
    useEffect(() => {
        axios({
            method:'get',
            url: 'http://localhost:3000/api/store/orders',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(res => {
            try {
                setLitProduct(res.data.filter((product, index) => (product.state === type)).map((product, index) => ({key: index, ...product})));
            } catch(err){
                console.log(err);
                history.push('/login')
            }
          
            console.log(res.data);

        });

    },[]);

    const columns = [
        {
          title: 'Mã đơn hàng',
          dataIndex: 'id',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Sản phẩm',
          dataIndex: 'product_name',
        },
        {
          title: 'Số lượng',
          dataIndex: 'quantity',
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'total_price',
          },
          {
            title: 'Trạng thái đơn hàng',
            dataIndex: 'state',
          },
      ];

      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setListSelect(selectedRows);
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      };
      
    return(
        <>
             <div>
                <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={listProduct}
                />
                {
                    (type === "waiting_accept" && <Button type="primary" onClick={() =>{
                    
                            axios({
                                method: "patch",
                                url: "http://localhost:3000/api/store/orders/accept",
                                data: {ids:listSelect.map(data => data.id)},
                                headers: {
                                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                                }
                            }).then(res => {
                                console.log(res.data)
                            });
                    }}>Chấp nhận đơn hàng</Button>)
                }
            </div>
        </>
    )

}

export default WaitingAccept