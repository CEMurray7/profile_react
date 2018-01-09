import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Claire Elizabeth Murray',
        biography: ['Found my passion through learning.', 'My skill set keeps expanding each year.', 'I\'ve gotten quite adept at using every new skill on a daily basis,', 'so that I don\'t forget how to do everything.'],
        education: ['New World School of the Arts 1997-2003, B.F.A., Theater', 'Miami Dade College 2001-2004 A.A. Hospitality Management', 'Miami Dade College 2009-2012, A.S. Nursing', 'Miami Dade College 2013-2015, A.A. Elementary Education','Wyncode Full-Stack Web-Immersive 2017-2018'],
        github: ''
      },
      image: 'https://s3.amazonaws.com/profilepage1/profilepic.JPG',
      quote: {
        content: 'Beautiful things don\'t ask for attention',
        // source: 'Test Test'
      }

    };
  }
  render() {
    return(
      <div className="App">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}

function Image(props){
    return (
      <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    );
}
function Profile(props){
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <div className="Bio">{props.person.biography.map((paragraph, position) =>{
          return(
             <p key={'paragraph'+position}>{paragraph}</p>
          )
        })
       }</div>
        <div className="Education">{props.person.education.map((degree, position) => {
          return(
            <p key={'degree' + position}>{degree}</p>
          )
        })
      }</div>

        <div className="Quote">
          <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
          <div className="byline">&mdash; {props.quote.source}</div>
        </div>

      </div>
    );
}

export default App;
