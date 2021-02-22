import React, { useState } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
    // const [posts, setPosts] = useState();

    if (!selectedSong) return <div></div>;
    return (
        <div>
            <h3>{selectedSong.title}</h3>
            <h3>{selectedSong.duration} </h3>
        </div>
    );
};

const mapState = (state) => {
    return { selectedSong: state.selectedSong };
};

export default connect(mapState)(SongDetail);
