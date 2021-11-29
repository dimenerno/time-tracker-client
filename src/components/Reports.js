import React from 'react'
import { useState, useEffect } from 'react'
import formatTime from '../helper/formatTime'
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from "react-chartjs-2";

const Reports = () => {
    Chart.register([ArcElement, Tooltip]);

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const [list_of_category, set_list_of_category] = useState([])
    const [list_of_duration, set_list_of_duration] = useState([])
    const [chartData, setchartData] = useState({
        labels: [],
        datasets: []
    })
    const [displayDate, setDisplayDate] = useState(yyyy + '/' + mm + '/' + dd)

    useEffect(() => {
        fetch('http://localhost:9000')
            .then(res => res.json())
            .then(data => {
                var category_buffer = [(<th>Category</th>)]
                var duration_buffer = [(<th>Duration</th>)]
                var labels = []
                var dataset = []

                for (var key in data) {
                    labels.push(key)
                    dataset.push(data[key])
                    category_buffer.push((<td key={key}>{key}</td>))

                    const formatted_time = formatTime(data[key])
                    duration_buffer.push((<td key={key}>{formatted_time.hours}:{formatted_time.minutes}:{formatted_time.seconds}</td>))
                }

                setchartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Time spent at each category',
                            data: dataset,
                            backgroundColor: [
                                '#4B4237',
                                '#D5A021',
                                '#EDE7D9',
                                '#A49694',
                                '#736B60'
                            ],
                            borderWidth: 0.5,
                            borderColor: 'black'
                        }
                    ]
                })

                set_list_of_category(category_buffer)
                set_list_of_duration(duration_buffer)
            })
    }, [])

    return (
        <div className="wrapper">
            <div className="reports">
                <div className="chart">
                    <h3>{displayDate}</h3>
                </div>
                <div className="chart">
                    <div className="canvas">
                        <Doughnut data={chartData} />
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr>{list_of_category}</tr>
                        <tr>{list_of_duration}</tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports
