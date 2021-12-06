import React from 'react'
import '../css/reports.css'
import { useState, useEffect } from 'react'
import formatTime from '../helper/formatTime'
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from "react-chartjs-2";
import Fade from 'react-reveal/Fade'

const ReportsDay = ({ viewBy }) => {
    Chart.register([ArcElement, Tooltip]);

    const url1 = 'ssal.sparcs.org:30005'
    const url2 = 'localhost:9000'

    const todayDate = new Date()
    const [displayDay, setdisplayDay] = useState(todayDate.getDate())
    const [displayMonth, setdisplayMonth] = useState(todayDate.getMonth() + 1)
    const [displayYear, setdisplayYear] = useState(todayDate.getFullYear())
    const [dateDelta, setdateDelta] = useState(0)
    const [isEmpty, setisEmpty] = useState(true)

    const [list_of_category, set_list_of_category] = useState([])
    const [list_of_duration, set_list_of_duration] = useState([])
    const [chartData, setchartData] = useState({
        labels: [],
        datasets: []
    })

    useEffect(() => {
        fetch(`http://${url1}?day=${displayDay}&month=${displayMonth}&year=${displayYear}`)
            .then(res => res.json())
            .then(categories => {
                var category_buffer = []
                var duration_buffer = []
                var labels = []
                var dataset = []
                setisEmpty(true)
                for (var category in categories) {
                    if (categories[category] !== '0') {
                        labels.push(category)
                        dataset.push(categories[category])
                        category_buffer.push((<td key={category}>{category}</td>))
                        setisEmpty(false)

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
    }, [displayDay, displayMonth, displayYear])

    function decrementDate() {
        setdateDelta(dateDelta - 1)
    }
    function incrementDate() {
        setdateDelta(dateDelta + 1)
    }

    useEffect(() => {
        var tempDate = new Date()
        tempDate.setDate(tempDate.getDate() + dateDelta)

        setdisplayDay(tempDate.getDate())
        setdisplayMonth(tempDate.getMonth() + 1)
        setdisplayYear(tempDate.getFullYear())
    }, [dateDelta])

    return (
        <Fade>
            <div className="reports">
                <div className="chart">
                    <button onClick={decrementDate}>&lt;</button>
                    <h3>{displayYear}-{displayMonth}-{displayDay}</h3>
                    <button onClick={incrementDate}>&gt;</button>
                </div>
                <div className="chart">
                    {!isEmpty && (<div className="canvas">
                        <Doughnut data={chartData} />
                    </div>)}
                    {isEmpty && (<div className="canvas"><h3 style={{ margin: 'auto' }}>No data.<br />Track your time now!</h3></div>)}
                </div>
                <table className="reports-table">
                    <tbody>
                        <tr>{list_of_category}</tr>
                        <tr>{list_of_duration}</tr>
                    </tbody>
                </table>
                
            </div>
        </Fade>
    )
}

export default ReportsDay
