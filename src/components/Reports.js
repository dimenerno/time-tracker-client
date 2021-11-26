import React from 'react'
import { useState, useEffect } from 'react'

const Reports = () => {

    const [list_of_category, set_list_of_category] = useState([])
    const [list_of_duration, set_list_of_duration] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000')
            .then(res => res.json())
            .then(data => {
                const arr = data.record_arr
                const len = arr.length
                var category_buffer = [(<th>Category</th>)]
                var duration_buffer = [(<th>Duration</th>)]
                for (let i = 0; i < len; i++) {
                    category_buffer.push((<td key={i}>{arr[i].category}</td>))
                    duration_buffer.push((<td key={i}>{arr[i].duration}</td>))
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
