import React, { useEffect }from 'react';
import {Row, Col} from 'antd';
import HomeIMG from './../image/home.png';
import { YoutubeOutlined, SkypeOutlined, InstagramOutlined, TwitterOutlined,
    FacebookOutlined, PhoneOutlined} from '@ant-design/icons';
import axios from 'axios';   

const MyFooter = () => {
    useEffect(() => {
       
    },[])
    
    return (
        <Row style={{color: "white"}}>
            <Col span={6} offset={1}>
                <Row>
                    <Col>
                        <img src={HomeIMG}/>
                    </Col>
                    
                </Row>
                <Row style={{marginTop: "30px",}}>
                    <Col>
                    <PhoneOutlined style={{fontSize: "40px"}} />
                    </Col>
                    <Col style={{paddingLeft: "30px",display: "flex", alignItems: "center", color: 'white'}}>
                        <div>
                            Got question? call us 24/7 
                            <br/>
                            <b>0356722442</b>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: "30px"}}>
                    <Col style={{ color: "white"}}>
                    <div>
                        <b>Contact info</b>
                        <br/>
                        144 xuan thuy, dich vong hau, cau giay, HN
                    </div>
                    </Col>
                </Row>
                <Row style={{marginTop: "30px"}}>
                    <Col style={{fontFamily: 'Roboto'}}>
                    <div className="icons-list" >
                        <FacebookOutlined  style={{ fontSize: "35px", color: "white" }}/>
                        <TwitterOutlined style={{ fontSize: "35px", marginLeft:"10px", color: "white" }}/>
                        <InstagramOutlined style={{ fontSize: "35px", marginLeft:"10px", color: "white" }} />
                        <SkypeOutlined style={{ fontSize: "35px", marginLeft:"10px", color: "white" }}/>
                        <YoutubeOutlined style={{ fontSize: "35px", marginLeft:"10px", color: "white" }}/>
                    </div>
                    </Col>
                </Row>
               
            </Col>
            <Col span={4}>
                <b>Find In Fast</b>
                <ul style={{listStyle: "none", marginTop: "20px"}}>
                    <li>Accessories</li>
                    <li>Gaming</li>
                    <li>Laptops & Computer </li>
                    <li> Mac Computers PC </li>
                    <li> PC Computers </li>
                    <li> Ultrabooks </li>

                </ul>

            </Col>
            <Col span={4}>
                <b>Find In Fast</b>
                <ul style={{listStyle: "none", marginTop: "20px"}}>
                    <li>Accessories</li>
                    <li>Gaming</li>
                    <li>Laptops & Computer </li>
                    <li> Mac Computers PC </li>
                    <li> PC Computers </li>
                    <li> Ultrabooks </li>
                    <li>Laptops & Computer </li>
            
                    <li> Ultrabooks </li>

                </ul>

            </Col>

            <Col span={4}>
                <b>Find In Fast</b>
                <ul style={{listStyle: "none", marginTop: "20px"}}>
                    <li>Accessories</li>
                    <li>Gaming</li>
                    <li>Laptops & Computer </li>
                    <li> Mac Computers PC </li>
                    <li> PC Computers </li>
                    <li> Ultrabooks </li>
                    <li>Laptops & Computer </li>
                    <li> Mac Computers PC </li>
                    
                </ul>

            </Col>

            <Col span={4}>
                <b>Find In Fast</b>
                <ul style={{listStyle: "none", marginTop: "20px"}}>
                    <li>Accessories</li>
                    <li>Gaming</li>
                    <li>Laptops & Computer </li>
                    <li> Mac Computers PC </li>
                    <li> PC Computers </li>
                    <li> Ultrabooks </li>
                    <li>Laptops & Computer </li>
                    <li> Mac Computers PC </li>
                    <li> PC Computers </li>
                    <li> Ultrabooks </li>

                </ul>

            </Col>
        </Row>

    )
}

export default MyFooter;