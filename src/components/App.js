import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// import PostsList from './PostsList';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}
        >
            <SongList />
            <SongDetail />
            {/* <PostsList /> */}
        </div>
    );
}

export default App;
