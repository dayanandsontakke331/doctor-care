import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

import Banner from '../../components/Banner/Banner';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
// import banner from "../../assets/banner.jpeg";
import "./Home.css";

const Home = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${config.BASE_API_URI}/GetCategory.php`).then(res => {
            let data = res.data.result;
            // console.log(data);
            setData(data);
            console.log(Data);
        })
    }, []);

    return (
        <div>
            <div className="row my-2 mx-auto">
                {
                    Data.map(d => {
                        return (
                            <CategoriesCard key={d.category_id} title={d.title} link={d.link_name} catId={d.category_id} />
                        )
                    })
                }
            </div>

            <Banner />
        </div>
    );
}

export default Home;
