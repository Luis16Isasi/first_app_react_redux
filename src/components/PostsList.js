import React, { useEffect } from 'react';
import UserList from './User';
import { connect } from 'react-redux';
import { fetchPosts, fetchUsers } from '../actions/index';
import styled from 'styled-components';

const Post = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: skyblue;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`;

const PostsList = (props) => {
    useEffect(() => {
        props.fetchPosts();
        props.fetchUsers();
    }, []);

    const ComponentPost = props.posts.map((post) => {
        return (
            <Post key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>

                <UserList userId={post.userId} />
            </Post>
        );
    });
    return (
        <div>
            <h1>DESDE POSTSLIST</h1>
            <div>{ComponentPost}</div>
        </div>
    );
};

const mapState = (state) => {
    return { posts: state.posts, users: state.users };
};
export default connect(mapState, { fetchPosts, fetchUsers })(PostsList);
