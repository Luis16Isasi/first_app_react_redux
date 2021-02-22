import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const User = ({ userId, users }) => {
    let user = users.filter((user) => user.id === userId);
    console.log(user);
    return (
        <div>
            {user.map((user) => (
                <h1>{user.name}</h1>
            ))}
        </div>
    );
};

const mapState = (state) => {
    return { users: state.users };
};
export default connect(mapState)(User);
