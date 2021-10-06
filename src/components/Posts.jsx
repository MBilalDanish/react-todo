import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

import Post from "./Post";

const Posts = (props) => {
    useEffect(() => {
        props.fetchPosts();
    })
    return (

        <div className="posts">
            {
                props.posts.map((post) => (
                  <Post post={post}/>
                ))
            }
        </div>

    )
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
