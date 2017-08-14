import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { Timeline } from 'react-twitter-widgets'


class UpdateList extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="tweet-content">
                    <div className="tweetbox">
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'Fifa_Fanatic'
                            }}
                            options={{
                                username: 'Fifa_Fanatic',
                                height: '520'
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />

                    </div>
                </div>

                <Footer style={{ backgroundColor: "#1b3b77" }} />
            </div>
        )
    }
}


export default UpdateList