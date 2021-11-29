import React from 'react'
import { useState, useEffect } from 'react'
import formatTime from '../helper/formatTime'

const Reports = () => {

    const [list_of_category, set_list_of_category] = useState([])
    const [list_of_duration, set_list_of_duration] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000')
            .then(res => res.json())
            .then(data => {
                const report = data.report
                var category_buffer = [(<th>Category</th>)]
                var duration_buffer = [(<th>Duration</th>)]

                for(var key in report) {
                    category_buffer.push((<td key={key}>{key}</td>))
                    const formatted_time = formatTime(report[key])
                    duration_buffer.push((<td key={key}>{formatted_time.hours}:{formatted_time.minutes}:{formatted_time.seconds}</td>))
                }

                set_list_of_category(category_buffer)
                set_list_of_duration(duration_buffer)
            })
    }, [])

    return (
        <div className="wrapper">
            <div className="reports">
                <table>
                    <tbody>
                        <tr>
                            {list_of_category}
                        </tr>
                        <tr>
                            {list_of_duration}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports
