import React from 'react';
import moment from 'moment'
import { Comment,Row, Col,  Tooltip, Avatar, Rate, Tag } from 'antd';

const CommentComponent = ({comment}) => {
	console.log(comment)
	return (
		<div style={{margin: "0px", backgroundColor: "white", padding: "20px", width: "100%"}}>
				<h1>ĐÁNH GIÁ SẢN PHẨM</h1>
				{
					comment.map(cmt => <Comment
						// actions={actions}
								author={<a>{cmt.username}</a>}
								avatar={
										<Avatar
										src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
										alt="Han Solo"
										/>
								}
								content={
										<>
												<p>{cmt.content}</p>
												<Rate allowHalf disabled defaultValue={cmt.star} /> <span style={{marginLeft: "5px"}}>{cmt.star}</span>
										</>
								}
								datetime={
										<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
										<span>{moment(cmt.created_at).fromNow()}</span>
										</Tooltip>
								}
								/>)
					
				}
		</div>   
	)
}
export default CommentComponent;