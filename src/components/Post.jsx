import { useVisibilityHook } from 'react-observer-api';
import { useEffect } from 'react';

const Post = ({ post }) => {
    const { setElement, isVisible } = useVisibilityHook();
    const prev = isVisible;
    useEffect(() => {
        console.log("isVisible",isVisible)
        console.log('prev',prev)
    },[])
    return (
        <div ref={setElement}>
            {
                isVisible && <> <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div></>
            }

        </div>
    )
}

export default Post
