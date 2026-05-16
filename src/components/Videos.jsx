import { useState, useEffect, use } from 'react';
import { getVideos } from '../mockApi.js';

function Videos(){
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getVideos()
        .then((data) => {
            setVideos(data)
            setLoading(false)
        });
    }, []);

    if (loading) {
        return <p>Loading videos...</p>;
    }

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