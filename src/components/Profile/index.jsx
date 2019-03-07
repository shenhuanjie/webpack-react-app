import React from 'react';
import Hobby from '../Hobby';
import './style.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbles: ['skateboarding', 'rock music']
        };
        this.likedCallback = this.likedCallback.bind(this);
    }
    likedCallback() {
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        });
    }
    addHobbyCallback() {
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;
        if (val) {
            let hobbles = this.state.hobbles;
            hobbles = [...hobbles, val];
            this.setState({
                hobbles
            }, () => {
                hobbyInput.value = '';
            })
        }
    }
    render() {
        return (
            <div className="profile-component">
                <div className="container">
                    <h1>我的名字叫 {this.props.name}</h1>
                    <h2>我今年 {this.props.age} 岁</h2>
                    <button onClick={this.likedCallback}>给我点赞</button>
                    <h2>总点赞数：{this.state.liked}</h2>
                    <h2>我的爱好：</h2>
                    <ul>
                        {this.state.hobbles.map((hobby, i) => <Hobby key={i} hobby={hobby} />)}
                    </ul>
                    <input type="text" ref="hobby" />
                    <button onClick={this.addHobbyCallback.bind(this)}>添加爱好</button>
                </div>
            </div>
        );
    };
}

export default Profile;
