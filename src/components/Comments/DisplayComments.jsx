import React, { useState } from 'react'
import './Comments.css'
function DisplayComments({cId,commentBody,userCommented}) {
  const [commentText,setCommentText] = useState("");
  const [edit,setEdit] = useState(false);

  const handleSubmit = (e)=> {
    e.preventDefault();
    setEdit(false);
  }
  
  const handleEdit = (ctId,ctBody)=> {
    setEdit(true);
    setCommentText(ctBody);
  }

  return (
    <>
    {
      edit ? (
        <>
          <form className='comments_sub_form_comments' 
          onSubmit={handleSubmit}
          >
            <input type="text" placeholder='Edit commment...' value={commentText} className='comment_ibox' onChange={e=>setCommentText(e.target.value)}/>
            <input type="submit" value="Change" className='comments_add_btn_comments'/>
          </form> 
        </>
      ) : (
        <p className='comment_body'>
          {commentBody}
        </p>
      )
    }
    <p className='usercommented'>
     - {userCommented} commented
    </p>
    <p className='EditDel_DisplayComment'>
      <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
      <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments
