import React from 'react'
import '../css/settings.css'
import { useState } from 'react'
import Dropdown from './Dropdown'
import Fade from 'react-reveal/Fade'

const Settings = ({ viewBy, setviewBy }) => {
    const [showViewBy, setshowViewBy] = useState(false)

    return (
        <Fade>
            <div className="wrapper">
                <div className="setting-box">
                    <table>
                        <tbody>
                            <tr>
                                <td>View by</td>
                                <td><button className="unit-btn" onClick={() => setshowViewBy(!showViewBy)}>{viewBy}</button>{showViewBy && <Dropdown list_of_items={['Day', 'Month', 'Year']} setviewBy={setviewBy} setshowViewBy={setshowViewBy} />}</td>
                            </tr>
                            <tr>
                                <td>Manage categories</td>
                                <td><button className="unit-btn">On Progress</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fade>
    )
}

export default Settings
