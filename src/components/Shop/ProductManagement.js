import React, { useState, useEffect } from 'react';
import { Table,Button, Tag, Space, Modal } from 'antd';
import axios from 'axios';
import FormEdit from './FormEdit';
import ModalDelete from './ModalDelete';


const ProductManagement = ({tab}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
    const [isModalAddVisible , setIsModalAddVisible] = useState(false);
    const [dataFormEdit, setDataFormEdit] = useState({});
    const [data, setData] = useState([]);
    const [idDelete, setIdDelete] = useState(-1);
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
      onLoad();
    },[])
    const onLoad= () => {
      axios({
        method: "get",
        url: "http://localhost:3000/api/categorys"
    }).then(res => {
      console.log(res.data);
      setCategorys(res.data);
    });
      axios({
        method: "get",
        url: "http://localhost:3000/api/store/products/getAll",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }).then(res => {
        setData(res.data);
        console.log(res.data);
      })
    }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModalDelete = () => {
    setIsModalDeleteVisible(true);
  }
  const hideModalDelete = () => {
    setIsModalDeleteVisible(false);
  }
  const showModalAdd = () => {
    setIsModalAddVisible(true);
  }
  const hideModalAdd = () => {
    setIsModalAddVisible(false);
  }

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'trademark',
      dataIndex: 'trademark',
      key: 'trademark',
    },
    {
      title: 'quantity In Stock',
      key: 'quantityInStock',
      dataIndex: 'quantityInStock',
      // render: tags => (
      //   <>
      //     {tags.map(tag => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) =>{
        
        return (
          <Space size="middle">
            <Tag color={"#1890ff"} onClick={
              () => {
                console.log(record);
                setDataFormEdit(record)
                showModal();
                }}>Edit </Tag>
            <Tag color={"red"} onClick={() => {
              showModalDelete();
              setIdDelete(record.id);
              }}>Delete</Tag>
          </Space>
        )
      },
    },
  ];
  
    return (
    <>
        <Table columns={columns} dataSource={data} /> 
        <Button
          type="primary"
          
          onClick={() => {showModalAdd()}}
        >
          Thêm sản phẩm
          </Button>  
        <Modal
          title="Thêm sản phẩm"
          visible={isModalAddVisible}
          onOk={hideModalAdd}
          onCancel={hideModalAdd}
          width={1000}
        >
          <FormEdit categorys={categorys} close={hideModalAdd} onLoad={onLoad} add={true}/>
        </Modal>
        <Modal
          title="Chỉnh sửa sản phẩm"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <FormEdit categorys={categorys}  close={handleOk} onLoad={onLoad} dataFormEdit={dataFormEdit} add={false}/>
        </Modal>
        <ModalDelete 
        onLoad={onLoad}
        isModalDeleteVisible={isModalDeleteVisible}
        idDelete={idDelete}
        showModalDelete={showModalDelete} 
        hideModalDelete={hideModalDelete}/>
      
    </>
    );
}

export default ProductManagement;