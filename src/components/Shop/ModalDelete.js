import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios'; 

const ModalDelete = ({isModalDeleteVisible, idDelete,onLoad, showModalDelete, hideModalDelete}) => {

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalDeleteVisible}
        onOk={() => {
            axios({
                method: 'DELETE',
                url: `http://localhost:3000/api/products/${idDelete}`,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                  }
            }).then(res => {
                console.log(res.data);
                onLoad();
                hideModalDelete();
            })
        }}
        onCancel={hideModalDelete}
      >
        <p>Bạn có thực sự muốn xóa sản phẩm này không ?</p>
        
      </Modal>
    </>
  );
}
 
export default ModalDelete;