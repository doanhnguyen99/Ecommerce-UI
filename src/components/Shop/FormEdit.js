import React, { useState,useEffect, useRef } from "react";
import { Form, Input, InputNumber,Upload, Modal, Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from "axios";

const { Option } = Select;
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  class PicturesWall extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.imgProduct);
        this.state = {
          previewVisible: false,
          previewImage: '',
          previewTitle: '',
          fileList: this.props.imgProduct,
          files: [],
        };
    }
    
    // componentDidMount= () => {
    //   this.setState({fileList : this.props.imgProduct})
    // }
    
  
    handleCancel = () => this.setState({ previewVisible: false });
  
    handlePreview = async file => {
        console.log("preview");
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };
  
    handleChange = ({file, fileList }) => {
        const fieldValue = this.props.form.getFieldValue();
        this.props.form.setFieldsValue({...fieldValue, images: fileList });
        this.setState({ fileList });
    }
  
    render() {
      const { previewVisible, previewImage, fileList, previewTitle } = this.state;
      const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
      return (
        <>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </>
      );
    }
  }

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const FormEdit = ({categorys, onLoad,close,  dataFormEdit, add }) => {
  const [form] = Form.useForm();
  let lsimg = [];
  if(dataFormEdit && dataFormEdit.link_img){
    lsimg = dataFormEdit.link_img.map((img, index) => ({uid : index*-1, name: 'image.jpg', status: 'done', url: img}));
  }
  form.setFieldsValue(dataFormEdit);


  
    
   
  const onFinish = (values) => {
    console.log(values);
  };
  const onChangeCategory = (value) => {
        console.log(value);
        form.setFieldsValue({...form.getFieldValue().product, category_id: value});
  };

  return (
    <Form {...layout} name="nest-messages" form={form} onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name='name'
        label="Product Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='quantityInStock'
        label="Quantity in Stock"
        rules={[
            {
              type: 'number',
              min: 0,
              max: 50000,
            },
          ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name='price'
        label="Price"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 50000,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name= 'sendFrom'
        label="Send From"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='trademark'
        label="Trademark"
      >
          
        <Input />
      </Form.Item>
      <Form.Item
        name='category_id'
        label="Category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option category"
          onChange={onChangeCategory}
        >
            {
                categorys.map(category => <Option value={category.id}>{category.name}</Option>)
            }
          
        </Select>
      </Form.Item>
      <Form.Item name='origin' label="Origin">
        <Input />
      </Form.Item>
      <Form.Item name='description' label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name='images' label="Ảnh sản phẩm">
        <PicturesWall form={form} imgProduct={lsimg} />
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" 
        //htmlType="submit"
        onClick={() => { 
            //console.log(res.current.files);
            
            console.log(form.getFieldValue())
            let object = form.getFieldValue();
            let formData = new FormData();
            console.log(form.getFieldValue());
            Object.keys(object).forEach(key => {
                console.log(key);
                console.log(object[key]);
                if(key != 'images')
                formData.append(`product[${key}]`, object[key])
            });
            
           
            console.log(formData);
            if(add){
              object.images.map(img => {
                console.log(img)
                formData.append(`product[images][]`, img.originFileObj)
              });
              axios({
                method: 'post',
                url:'http://localhost:3000/api/products',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
              }).then(res => {
                  console.log(res.data);
                  close();
                  onLoad();
              });
            } else {
              axios({
                method: 'PUT',
                url: `http://localhost:3000/api/products/${object.id}`,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
              }).then(res => {
                  console.log(res.data);
                  close();
                  onLoad();
              })
            }
            
            
        }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormEdit;