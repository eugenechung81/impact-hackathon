import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "twitch-embed";
import axios from "axios";
import numeral from "numeral";
import _ from "underscore";
import cognikLogo from './cognik-logo.png';
// import "./divPlayer";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "dallas",
      channelId: "",

      accountId: "",
      profileId: "",
      recoId: "",

      currentGamerInfo: ({}),
      recommendedChannels: [],
      watchedChannels: [],
    }
  }

  axiosToken() {
    return axios.create({
      baseURL: 'http://raas-se-prod.cognik.us/v1/',
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": this.token
      }
    });
  }


  componentDidMount() {

    // login and set token
    var instance = axios.create({
      baseURL: 'http://raas-se-prod.cognik.us/v1/',
      timeout: 1000,
      headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
      }
    });
    //
    //axios.post('http://raas-se-prod.cognik.us/v1/login/hackathon02',{
    instance.post('/login/hackathon07', {
      "app_id": "SE_H8jhtwd4du",
      "password": "nRK5vVMt6j"
    }).then((res)=> {
      //console.log(res);
      this.token = res.data.token;
      this.getRecommendations();

    }).catch((err)=> {
      console.log(err);
    });


    // this.updateCurrentGamer("dallas");
    // this.reloadVideoPlayer("dallas");
  }

  getRecommendations() {
    var instance = axios.create({
      baseURL: 'http://raas-se-prod.cognik.us/v1/',
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": this.token
      }
    });
    instance.post('/accounts/hackathon07/profiles/hackathon07/recos', {
      "size": 8
    }).then((res) => {

      // filter recommendations on watched
      let currentGamerInfo = this.state.currentGamerInfo;
      let recommendedChannels = res.data.contents;
      let watchedChannels = this.state.watchedChannels;
      if (!_.isEmpty(currentGamerInfo)) {
        watchedChannels.push(currentGamerInfo);
        //recommendedChannels = _.difference(recommendedChannels, watchedChannels);
        recommendedChannels = recommendedChannels.filter(function (current) {
          return watchedChannels.filter(function (current_b) {
              // console.log(current.name);
              // console.log(current_b.name);
              return current_b.name == current.name
            }).length == 0
        });
        console.log(recommendedChannels)
        console.log(watchedChannels)
      }

      let channelId = recommendedChannels[0]['name'];
      this.reloadVideoPlayer(channelId);
      this.setState({
        channelId: channelId,
        recoId: res.data.reco_id,
        currentGamerInfo: recommendedChannels[0],
        recommendedChannels: recommendedChannels.slice(1, recommendedChannels.length),
        //recommendedChannels: recommendedChannels,
        watchedChannels: watchedChannels
        // recommendedChannels: res.data.contents.map(c => {
        //   //   return {
        //   //     c
        //   // }
        //   return c;
        // })
      })
    });

  }

  updateCurrentGamer(channelId) {
    // get gamer info
    var instance = axios.create({
      baseURL: 'https://api.twitch.tv/kraken/',
      timeout: 1000,
      headers: {
        "Client-Id": "t4kfo8pobd8iyapzb3qfwpn4lkove3i",
      }
    });
    // instance.get('/channels/' + 'wardiii').then((res)=>{
    instance.get('/channels/' + channelId).then((res)=> {
      console.log(res);
      this.setState({
        currentGamerInfo: res.data
      })
    });
  }

  reloadVideoPlayer(channel_id) {
    var Hello = React.createClass({
      render: function () {
        return <div id="video_view" className="twitch-video-embed"></div>;
      }
    });

    var temp = document.createElement("div");
    ReactDOM.render(<Hello />, temp);
    var container = document.getElementById("container");
    container.replaceChild(temp.querySelector("#video_view"), document.getElementById("video_view"));

    var options = {
      width: 854,
      height: 480,
      channel: channel_id,
    };
    // var player = new window.Twitch.Player("SamplePlayerDivID", options);
    // player.setVolume(0.5);

    if (typeof window !== 'undefined' && window.Twitch) {
      this.player = new window.Twitch.Player("video_view", options);
    }
  }


  render() {

    var Timer = React.createClass({
      getInitialState: function () {
        return {secondsElapsed: 0};
      },
      tick: function () {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
      },
      componentDidMount: function () {
        this.interval = setInterval(this.tick, 1000);
      },
      componentWillUnmount: function () {
        clearInterval(this.interval);
      },
      getTime: function () {
        return this.state.secondsElapsed;
      },
      render: function () {
        return (
          <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
      }
    });

    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          <h2>Twic - Twitch Channel Recommender</h2>
          <div>
            <div className="heading-powered-by">Powered by:</div>
            <img src={cognikLogo} style={{ height: "30px"}} alt="logo"/>
          </div>
        </div>
        <p className="App-intro">
          <div id="container">
            <div id="video_view" className="twitch-video-embed"></div>
          </div>
          {/*<div id="video_view" className="twitch-video-embed"></div>*/}

          <Timer ref="timer"/>

          <div className="button-row">
            <button className="button" onClick={() => {
              let durationViewed = this.refs.timer.getTime();
              var instance = axios.create({
                baseURL: 'http://raas-se-prod.cognik.us/v1/',
                timeout: 1000,
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "x-platform-id": "desktop",
                  "x-app-token": this.token
                }
              });
              instance.post('/accounts/hackathon07/profiles/hackathon07/actions', {
                "content_id": this.state.channelId,
                "reco_id": this.state.recoId,
                "type": "like",
                "percentage_viewed": 100,
                "duration_viewed": durationViewed
              }).then((res) => {
                this.setState({
                  currentGamerInfo: Object.assign(this.state.currentGamerInfo,
                    {"action": "like",
                    "watched_seconds": durationViewed })
                });
                this.getRecommendations();
              });

            }}>Like
            </button>
            <button className="button" onClick={() => {
              let durationViewed = this.refs.timer.getTime();
              var instance = axios.create({
                baseURL: 'http://raas-se-prod.cognik.us/v1/',
                timeout: 1000,
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "x-platform-id": "desktop",
                  "x-app-token": this.token
                }
              });
              instance.post('/accounts/hackathon07/profiles/hackathon07/actions', {
                "content_id": this.state.channelId,
                "reco_id": this.state.recoId,
                "type": "dislike",
                "percentage_viewed": 100,
                "duration_viewed": this.refs.timer.getTime()
              }).then((res) => {
                this.setState({
                  currentGamerInfo: Object.assign(this.state.currentGamerInfo,
                    {"action": "dislike",
                    "watched_seconds": durationViewed})
                });
                this.getRecommendations();
              });

            }}>Dislike
            </button>
            <button className="button" onClick={() => {
              let durationViewed = this.refs.timer.getTime();
              var instance = axios.create({
                baseURL: 'http://raas-se-prod.cognik.us/v1/',
                timeout: 1000,
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "x-platform-id": "desktop",
                  "x-app-token": this.token
                }
              });
              instance.post('/accounts/hackathon07/profiles/hackathon07/actions', {
                "content_id": this.state.channelId,
                "reco_id": this.state.recoId,
                "type": "skip",
                "percentage_viewed": 100,
                "duration_viewed": this.refs.timer.getTime()
              }).then((res) => {
                this.setState({
                  currentGamerInfo: Object.assign(this.state.currentGamerInfo,
                    {"action": "skip",
                    "watched_seconds": durationViewed})
                });
                this.getRecommendations();
              });

            }}>Skip
            </button>
          </div>

          {/*<div>{JSON.stringify(this.state.currentGamerInfo)}</div>*/}
          <GamerInfo gamer={this.state.currentGamerInfo}/>
          <RecommendedChannels recommendedChannels={this.state.recommendedChannels}/>
          <WatchedChannels channels={this.state.watchedChannels}/>
        </p>
      </div>
    );
  }
}

class RecommendedChannels extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let recommendedChannels = this.props.recommendedChannels;

    return (
      <div className="recommend-main-div">
        <div className="recommend-header">Recommended Channels</div>
        <div>{recommendedChannels.map((g)=> {
          let mature = g.mature ? "(Mature)" : null;
          return (
            <div key={g.name} className="recommend-row">
              <div className="recommend-item"><img className="recommend-img" src={g.logo}/></div>
              <div className="recommend-gamer-details recommend-item">{g.name} - {g.game} {mature}</div>
            </div>
          )
        })}</div>
      </div>
    )
  }
}


class WatchedChannels extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let channels = this.props.channels;


    return (
      <div className="recommend-main-div">
        <div className="recommend-header">Watched Channels</div>
        <div>{channels.map((g)=> {
          let mature = g.mature ? "(Mature)" : null;
          let actionClass;
          if (g.action == "like") {
            actionClass = "watched-like";
          }
          else if (g.action == "dislike") {
            actionClass = "watched-dislike";
          }
          else if (g.action == "skip") {
            actionClass = "watched-skip";
          }
          return (
            <div key={g.name} className="recommend-row">
              <div className="recommend-item"><img className="recommend-img" src={g.logo}/></div>
              <div className="recommend-gamer-details recommend-item">
                <div style={{display: "inline-block", width: "200px"}}>{g.name} - {g.game} {mature}</div>
                <div style={{display: "inline-block"}}>Watched: {g.watched_seconds}s</div>
                <div className={actionClass} >{g.action}</div>
              </div>
            </div>
          )
        })}</div>
      </div>
    )
  }
}


class GamerInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let g = this.props.gamer;
    let mature = g.mature ? "(Mature)" : null;
    return (
      <div className="gamer-info-main-div">
        <div className="gamer-info-div">
          <img className="gamer-info-img" src={g.logo}/>
        </div>
        <div className="gamer-info-div gamer-info-details">
          <div style={{display: "inline-block", paddingRight: "10px"}}>{g.display_name}</div>
          <small style={{color: "gray"}}>{g.status}</small>
          <div>{g.game}</div>
          <div>{g.language} {mature}</div>
          <div>Views: {numeral(g.views).format('0,0')} Followers: {numeral(g.followers).format('0,0')}</div>
        </div>
      </div>
    )
  }
}


export default App;
