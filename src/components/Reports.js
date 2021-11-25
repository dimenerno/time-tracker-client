import React from 'react'
import { useState, useEffect } from 'react'

const Reports = () => {

    const [html, setHtml] = useState([])

    useEffect( () => {
        fetch('http://localhost:9000')
            .then(res => res.json())
            .then(data => {
                const arr = data.record_arr
                const len = arr.length
                const buffer = []
                for(let i = 0; i < len; i++) {
                    buffer.push((<li key={i}>You spent {arr[i].duration} on {arr[i].category}.</li>))
                }
                setHtml(buffer)
            })
    }, [])

    return (
        <div className="reports">
            <ul>
                {html}
            </ul>
        </div>
    )
}

export default Reports
