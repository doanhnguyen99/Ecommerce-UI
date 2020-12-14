import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Table, Button,Space,Tag,Input, Modal, Rate } from 'antd';

import { useHistory } from "react-router-dom";


const { TextArea } = Input;
const WaitingAccept = ({type}) =>{
    let history = useHistory();
    const [listProduct, setLitProduct] = useState([]);
    const [listSelect, setListSelect ] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [isModalRate, setIsModalRate] = useState(false);
    const [rate, setRate] = useState(0);
    const [text, setText] = useState('');
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState(-1);

    const reload = () => {
      axios({
        method:'get',
        url: 'http://localhost:3000/api/user/orders',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res.data);
          try {
              setLitProduct(res.data.filter((product, index) => (product.state === type)).map((product, index) => ({key: index, ...product})));
          } catch(err){
              console.log(err);
              history.push('/login')
          }
        
          console.log(listProduct);

      });
    }

    const handleCancelRate = () => {
      setOrderId(-1);
      setError('');
      setRate(0);
      setText('');
      setIsModalRate(false);
    }

    const handleOkRate = () => {
      if(rate < 1) {
        setError("Bạn xin vui lòng rate số sao !");
        return;
      }
      let formData = new FormData();
      formData.append('comment[star]', rate);
      formData.append('comment[content]', text);

      axios({
        method: "post",
        url: `http://localhost:3000/api/user/comments?order_id=${orderId}`,
        data: formData,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res.data)
      })
      setOrderId(-1);
      setError('');
      setRate(0);
      setText('');
      setIsModalRate(false);

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

    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const cancelProduct = () => {
      axios({
        method:'PATCH',
        url: 'http://localhost:3000/api/user/orders/cancel',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        data: {     
          "ids": listSelect.map(record => record.id)
        }
      }).then(res => {
          try {
            console.log(res.data);
            reload();
                                      // setLitProduct(res.data.filter((product, index) => (product.state === type)).map((product, index) => ({key: index, ...product})));
          } catch(err){
              console.log(err);
              history.push('/login')
          }
        
          console.log(res.data);

      });
    }

    const handleChange = (v) => {
      setRate(v);
    }

    const showModal = (title, content, flag) => {
      setDataModal({title, content,flag});
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      switch (dataModal.flag){
        case 1 :cancelProduct();
        break;
        case 2 : successProduct(); 
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
    

    let columns = type ==="user_success" ?[
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
            title: '',
            fixed: 'right',
            render: (text, record) => (
              <Space size="middle">
                <Tag  onClick={
                  () => {
                    console.log("data vantu");
                    setIsModalRate(true);
                    setOrderId(record.id);
                    // console.log(record);
                    // setDataFormEdit(record)
                    // showModal();
                    }}>Review</Tag>
                
              </Space>
          ),
          },
      ] : [
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
          
      ] ;

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
                //pagination={false}
                footer={(data) => <>{
                  (type === "waiting_accept" && <Button type="primary" onClick={() => {
                    showModal("Thông báo","Bạn có thực sự muốn hủy các đơn hàng đã chọn. ", 1)
                  }}>Hủy đơn hàng</Button>)
                }
                {
                  (type === "store_accepted" &&
                  <Button type="primary" onClick={() => {
                    showModal("Thông báo","Bạn có thực sự muốn chuyển trạng thái các đơn hàng đã chọn sang giao hàng thành công. ", 2)
                  }}>
                    giao hàng thành công
                  </Button>)
                }
                </>}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={listProduct}
                />
               
            </div>
            <Modal title={dataModal.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>{dataModal.content}</p>
              
            </Modal>
            <Modal title="Danh gia" visible={isModalRate} onOk={handleOkRate} onCancel={handleCancelRate}>
              Noi dung danh gia:
              <TextArea showCount maxLength={100} value={text} onChange={(v) => setText(v.target.value) } />
              <span>
                <Rate tooltips={desc} onChange={handleChange} value={rate} />
              </span>
              <div style={{color: "red", marginTop:"10px"}}>{error}</div>
            </Modal>
        </>
    )

}

export default WaitingAccept