import { useState, useEffect } from 'react';
import { getVideos } from '../mockApi.js';

function Videos(){
    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos().then((data) => setVideos(data));
    }, []);

    return (
        <div className="videos-section">
            <h1>Available Videos</h1>
            {videos.map((videoName) => (
                <li key={videoName}>{videoName}</li>
            ))}
            <p>Video list will go here.</p>
        </div>
    )
}
export default Videos;