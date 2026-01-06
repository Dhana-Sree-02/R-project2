import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {data: {
            name: "Dhana Sree",
            role: "Artist, Explorer, Nature Enthusiast",
            bio: "Learning with curiosity, living through dance, and embracing the serenity of nature.",
            status: [{label: "Posts", value: "21"},
                     {label: "Followers", value: "2.3k"},
                     {label: "Following", value: "389"}]
        }};
    }

    render() {
        const {data} = this.state;
        const BASEURL = import.meta.env.BASE_URL;
        return (
            <div className='app'>
                <div className='profile'>
                    <img src="./public/user.jpg" alt='' />
                    <div className='info'>
                        <legend className='name'>{data.name}</legend>
                        <legend className='role'>{data.role}</legend>
                        <legend className='bio'>{data.bio}</legend>
                        <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                    </div>
                </div>
                <div className='status'>
                    {data.status.map((d)=>(
                        <div className='info'>
                            <legend className='value'>{d.value}</legend>
                            <legend className='label'>{d.label.toUpperCase()}</legend>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;