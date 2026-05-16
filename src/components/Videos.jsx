import { useEffect } from 'react';
import { getVideos } from '../mockApi.js';

function Videos(){
    useEffect(() => {
        getVideos().then((data) => {
            console.log("getVideos returned:", data);
        });
    }, []);

    return (
        <div className="videos-section">
            <h1>Available Videos</h1>
            <p>Video list will go here.</p>
        </div>
    )
}
export default Videos;