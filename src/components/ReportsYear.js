import React from 'react'
import '../css/reports.css'
import { useState, useEffect } from 'react'
import formatTime from '../helper/formatTime'
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from "react-chartjs-2";

const ReportsYear = ({ viewBy }) => {
    Chart.register([ArcElement, Tooltip]);

    const todayDate = new Date()
    const [displayYear, setdisplayYear] = useState(todayDate.getFullYear())
    const [list_of_category, set_list_of_category] = useState([])
    const [list_of_duration, set_list_of_duration] = useState([])
    const [chartData, setchartData] = useState({
        labels: [],
        datasets: []
    })
    const [dateDelta, setdateDelta] = useState(0)

    useEffect(() => {
        fetch(`http://ssal.sparcs.org:30005?year=${displayYear}`)
            .then(res => res.json())
            .then(categories => {
                var category_buffer = []
                var duration_buffer = []
                var labels = []
                var dataset = []

                for (var category in categories) {
                    if (categories[category] !== '0') {
                        labels.push(category)
                        dataset.push(categories[category])
                        category_buffer.push((<td key={category}>{category}</td>))

                        const formatted_time = formatTime(categories[category])
                        duration_buffer.push((<td key={category}>{formatted_time.hours}:{formatted_time.minutes}:{formatted_time.seconds}</td>))
                    }
                }

                setchartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Time spent at each category',
                            data: dataset,
                            backgroundColor: [
                                'rgba(75, 66, 55, 0.9)',
                                'rgba(213, 160, 33, 0.9)',
                                'rgba(237, 231, 217, 0.9)',
                                'rgba(164, 150, 148, 0.9)',
                                'rgba(115, 107, 96, 0.9)'
                            ],
                            borderWidth: 0.3,
                            borderColor: 'black'
                        }
                    ]
                })

                set_list_of_category(category_buffer)
                set_list_of_duration(duration_buffer)
            })
    }, [displayYear])

    function decrementDate() {
        setdateDelta(dateDelta - 1)
    }
    function incrementDate() {
        setdateDelta(dateDelta + 1)
    }

    useEffect(() => {
        const tempDate = (new Date()).getFullYear()
        setdisplayYear(tempDate + dateDelta)
    }, [dateDelta])

    return (
        <div className="reports">
            <div className="chart">
                <button onClick={decrementDate}>&lt;</button>
                <h3>{displayYear}</h3>
                <button onClick={incrementDate}>&gt;</button>
            </div>
            <div className="chart">
                <div className="canvas">
                    <Doughnut data={chartData} />
                </div>
            </div>
            <table className="reports-table">
                <tbody>
                    <tr>{list_of_category}</tr>
                    <tr>{list_of_duration}</tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReportsYear
