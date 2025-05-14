import React from 'react';

const VideoPlayer = ({ videoId }) => {
    return (
        <div className="w-full max-w-[1280px] mx-auto">
            <iframe
                className="w-full aspect-[16/7] rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
