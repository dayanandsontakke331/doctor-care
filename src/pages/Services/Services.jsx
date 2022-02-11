import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

export default function Services() {
    return (
        <div className="m-3 p-1">
            <h5 className="font-weight-bold mb-3">Order History</h5>
            {/* <ul> */}
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            {/* </ul> */}
        </div>

    )
}
