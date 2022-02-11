import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Banner from '../../components/Banner/Banner'
import SubCategoriesCard from "../../components/SubCategoriesCard/SubCategoriesCard";
import config from '../../config';

import Sanitization from '../../components/models/Sanitization';
import ServPersonalizedPrintables from '../../components/models/ServPersonalizedPrintables';
import ServPrintables from '../../components/models/ServPrintables';
import CovidAccessories from '../../components/models/CovidAccessories';
import ServWebinars from '../../components/models/ServWebinars';
import ServPersonalisedVideo from '../../components/models/ServPersonalisedVideo';

export default function Subcategories() {

    const [SubCategories, setSubCategories] = useState([]);
    const { catId } = useParams();

    useEffect(() => {
        axios.get(`${config.BASE_API_URI}/GetSubCategory.php?category_id=${catId}`).then(res => {
            console.log(res.data.result);
            let data = res.data.result;
            setSubCategories(data);
        })

    }, []);

    const [ModalTitle, setModalTitle] = useState("");
    const [ModalTableName, setModalTableName] = useState("");

    const handleModal1 = (title, tablename) => {
        alert("in parent" + title, tablename);
        setModalTitle(title);
    }

    return (
        <div>
            <div className="row  m-1 my-2">
                {
                    SubCategories.map((s) => {
                        return (
                            <SubCategoriesCard key={s.subcategory_id} tableName={s.table_name} subCatDetails={s} handleModal1={handleModal1} ModalTitle={ModalTitle} />
                        )
                    })
                }

                {
                    ModalTableName !== "serv_sanitization" ? <Sanitization title={ModalTitle} tableName={ModalTableName} />
                        : ModalTableName == "serv_personalised_printables" ? <ServPersonalizedPrintables title={ModalTitle} tableName={ModalTableName} />
                            : ModalTableName == "serv_printables" ? <ServPrintables title={ModalTitle} tableName={ModalTableName} />
                                : ModalTableName != "covid_accessories1" ? <CovidAccessories title={ModalTitle} />
                                    : ModalTableName == "serv_webinars" ? <ServWebinars title={ModalTitle} tableName={ModalTableName} />
                                        : ModalTableName == "serv_personalised_vdo" ? <ServPersonalisedVideo title={ModalTitle} tableName={ModalTableName} />
                                            : ""
                }
            </div>

            <Banner />

        </div>
    )
}
