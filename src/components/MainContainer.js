import React, { Component } from 'react'

class MainContainer extends Component {
    render() {
        return (
            <div id="main-container">
                <div className="about-channel">
                    <div className="channel-name">Announcement</div>
                    <div className="channel-desc">Slack Clone</div>
                </div>

                <div className="messages-list">
                    <div className="message">
                        <div className="left-block">
                            <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72" />
                        </div>
                        <div className="right-block">
                            <div className="user">
                                <div>Ram</div>
                                <span>6:30 PM</span>
                            </div>
                            <div className="user-message">Hey hello whats up?</div>
                        </div>
                    </div>

                    <div className="message">
                        <div className="left-block">
                            <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72" />
                        </div>
                        <div className="right-block">
                            <div className="user">
                                <div>Saketh</div>
                                <span>6:45 PM</span>
                            </div>
                            <div className="user-message">I'm Good</div>
                        </div>
                    </div>
                </div>

                <div className="chat-box">
                    <textarea placeholder="Enter your message"></textarea>
                </div>
            </div>
        );
    }
}

export default MainContainer;