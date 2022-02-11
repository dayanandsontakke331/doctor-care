import React from 'react'
import VideoCard from '../../components/VideoCard/VideoCard'

export default function Videos() {
    return (
        <div className="m-md-4 overflow-hidden">
            <h5 className="font-weight-bold mb-3 ml-3 col-12">Videos</h5>
            <div className="row d-flex justify-content-between col-12">
                <VideoCard link="https://www.youtube.com/embed/tgbNymZ7vqY" />
                <VideoCard link="https://www.youtube.com/embed/tgbNymZ7vqY" />
                <VideoCard link="https://www.youtube.com/embed/tgbNymZ7vqY" />
                <VideoCard link="https://www.youtube.com/embed/tgbNymZ7vqY" />
            </div>
        </div>
    )
}
