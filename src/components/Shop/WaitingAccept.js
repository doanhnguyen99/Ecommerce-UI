import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Table, Modal, Button } from 'antd';

import { useHistory } from "react-router-dom";


const WaitingAccept = ({type}) => {
    let history = useHistory();
    const [listProduct, setLitProduct] = useState([]);
    const [listSelect, setListSelect ] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataModal, setDataModal] = useState({});

    
    
    const reload = () => {
        axios({
          method:'get',
          url: 'http://localhost:3000/api/store/orders',
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
      }).then(res => {
        console.log(res.data);
          try {
              setLitProduct(res.data.filter((product) => (product.state === type)).map((product, index) => ({key: index, ...product})));
          } catch(err){
              console.log(err);
              history.push('/login')
          }
        
          console.log(res.data);

      });
    }
    const acceptProduct = () => {

      axios({
        method: "patch",
        url: "http://localhost:3000/api/store/orders/accept",
        data: {ids:listSelect.map(data => data.id)},
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }).then(res => {
          console.log(res.data);
          reload();

      });
    }
    const successProduct = () => {
      axios({
        method: "patch",
        url: "http://localhost:3000/api/user/orders/success",
        data: {ids:listSelect.map(data => data.id)},
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }).then(res => {
          console.log(res.data);
          reload();

      });
    }
    const cancelProduct = () => {
      axios({
        method: "patch",
        url: "http://localhost:3000/api/store/orders/cancel",
        data: {ids:listSelect.map(data => data.id)},
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }).then(res => {
          console.log(res.data);
          reload();

      });
    }

    const showModal = (title, content,flag) => {
     
      setDataModal({title, content,flag});
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      switch(dataModal.flag){
        case 1: acceptProduct();
        reload();
        break;
        case 2: successProduct();
        reload();
        break;
        case 3: cancelProduct();
        reload();
        break;
      }
     
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    useEffect(() => {
      reload();
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
          {
            title: 'Action',
            //dataIndex: 'state',
            fixed: 'right',
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
                    (type === "waiting_accept" && <Button type="primary" onClick={() => {
                      showModal("Thông báo","Bạn có thực sự muốn chấp nhận các đơn hàng đã chọn. ",1)
                      }}>
                      Chấp nhận đơn hàng
                      </Button>)
                }
                {
                    (type === "store_accepted" && <>
                    <Button type="primary" onClick={() => {
                      showModal("Thông báo","Bạn có thực sự muốn chuyển các đơn hàng đã chọn sang đã giao hàng. ", 2)
                    }}>
                      giao hàng thành công
                    </Button>
                    <Button type="primary" danger onClick={() => {
                      showModal("Thông báo","Bạn có thực sự muốn hủy các đơn hàng đã chọn. ",3)
                    }} style={{marginLeft: "20px"}}>
                      hủy đơn hàng
                    </Button>
                    </>)
                }
            </div>
            <Modal title={dataModal.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>{dataModal.content}</p>
            </Modal>
        </>
    )

}

export default WaitingAccept