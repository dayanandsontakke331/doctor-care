import React from 'react'
import PortalCard from '../../components/PortalCard/PortalCard'

export default function Portals() {
    return (

        <div className="m-3 p-1">
            <h5 className="mb-2">Portals</h5>
            {/* <ul> */}
            <PortalCard />
            <PortalCard />
            <PortalCard />
            <PortalCard />
            <PortalCard />
            <PortalCard />
            {/* </ul> */}
        </div>

    )
}
