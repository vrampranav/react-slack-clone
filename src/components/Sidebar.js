import React, { Component } from 'react'

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <div className="user-profile">
                    <div className="avatar">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3462/3462323.svg" />
                    </div>
                    <div>Pranav</div>
                </div>
                <hr className="sidebar-spacer" />

                <div className="channels">
                    <div className="header">Channels</div>

                    <ul className="channels-list">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;