import { MoreVert } from '@material-ui/icons'
import './post.css';
import {Users} from '../../dummyData'
import { useState } from 'react';

export default function Post({post}) {
    const user = Users.filter(u=>u.id === post.userId)
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)


    // handle likes
    const handleLike = () =>{
        setLike(isLiked ? like-1 : like +1)
        setIsLiked(!isLiked)
    }
return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={user[0].profilePicture} alt="" />
                    <span className="postUsername">{user[0].username}</span>
                    <span className="postDate"> {post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img 
                        className='likeIcon' 
                        src="/assets/like.png" 
                        alt="" 
                        onClick={()=> handleLike()}
                    />
                    <img 
                        className='likeIcon' 
                        src="/assets/heart.png" 
                        alt=""
                        onClick={()=> handleLike()}
                     />
                    <span className="likeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> {post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
