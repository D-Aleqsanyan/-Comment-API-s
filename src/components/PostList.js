import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAsync } from '../store/slices/postSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id} style={{ borderBottom:'3px solid black' , marginTop:'5px'}}>
                    <h3>{post.id}</h3>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
