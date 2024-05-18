import React, { useState } from 'react'
import './Comments.css'
import DisplayComments from './DisplayComments';

function Comments() {
  const [commentText,setCommentText] = useState("");
  const commentsList = [
    {
      id: 1,
      commentBody: "hello",
      userCommented: "user1",
    },
    {
      id: 2,
      commentBody: "OLAA",
      userCommented: "user2",
    },
    {
      id: 3,
      commentBody: "Yo! Whatsup",
      userCommented: "user3",
    },
    {
      id: 4,
      commentBody: "Hii",
      userCommented: "user4",
    },

  ];

  const handleSubmit = (e)=> {
    e.preventDefault();
  }
  return (
    <>
      <form className='comments_sub_form_comments' onSubmit={handleSubmit}>
        <input type="text" placeholder='add commment...' className='comment_ibox' onChange={e=>setCommentText(e.target.value)}/>
        <input type="submit" value="Add" className='comments_add_btn_comments'/>
      </form> 
      <div className='display_comment_container'>
        {
          commentsList.map(item=> {
            return (
              <DisplayComments
                commentBody={item.commentBody}
                userCommented={item.userCommented}
                cId={item.id}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Comments
