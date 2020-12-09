import React from 'react';
import moment from 'moment'
import { Comment,Row, Col,  Tooltip, Avatar, Rate, Tag } from 'antd';

const CommentComponent = ({comment}) => {
    console.log(comment)
    return (
        <Row style={{marginTop: "30px"}}>
            <Col offset={1} span={22} style={{backgroundColor: "white"}}>
                <div style={{margin: "20px"}}>
                    <h1>ĐÁNH GIÁ SẢN PHẨM</h1>
                    <Comment
                // actions={actions}
                    author={<a>Han Solo</a>}
                    avatar={
                        <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                        />
                    }
                    content={
                        <>
                            <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                            and efficiently.
                            </p>
                            <Rate allowHalf defaultValue={2.5} /> <span style={{marginLeft: "5px"}}>2.5</span>
                            
                        </>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                    />
                </div>
                
            </Col>
        </Row>
        
    )
}
export default CommentComponent;