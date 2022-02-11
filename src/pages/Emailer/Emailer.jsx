import React from 'react'
import EmailerCard from '../../components/EmailerCard/EmailerCard'

export default function Emailer() {
    return (
        <div className="m-3 p-1">
            <h5 className="mb-2">Emailers</h5>
            <EmailerCard />
            <EmailerCard />
            <EmailerCard />
        </div>
    )
}
