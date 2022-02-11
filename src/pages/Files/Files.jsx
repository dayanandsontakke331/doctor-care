import axios from 'axios';
import React, { useState, useEffect } from 'react'

// import files from "../../assets/file.png";
import FileCard from '../../components/FileCard/FileCard';
import config from '../../config';

export default function Files() {

    const [Files, setFiles] = useState([]);

    useEffect(() => {
        axios.get(`${config.BASE_API_URI}/files.php`).then(res => {
            console.log(res.data);
            setFiles(res.data);
        })
    }, []);

    return (
        <div className="m-3 p-1">
            <h5>Files</h5>
            <div className="row">
                {
                    Files.map(f => {
                        return (
                            <FileCard fileName={f.name} />
                        )
                    })
                }
                <FileCard fileName={"slide_decks_nephrology-testonly"} />
            </div>
        </div>
    )
}
