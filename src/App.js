import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Claire Elizabeth Murray',
        biography: ['Found my passion through technology.', 'Currently accepting Freelance work.', 'Prices are negotiable.','Creative Process is customizable.','This page was built using React.js', 'Contact: (305)788-9711', 'claire.e.murray00@gmail.com'],
        education: ['New World School of the Arts 1997-2003, Theater',
        'Miami Dade College 2001-2004, Hospitality Management',
        'Miami Dade College 2009-2012, Nursing',
        'Miami Dade College 2013-2015, Elementary Education',
        'Wyncode, Full-Stack Web-Immersive 2017-2018'],
        github: <a href='https://github.com/CEMurray7'>Github</a>,
        linkedin: <a href='https://www.linkedin.com/in/clairemurray7/'>Linkedin</a>,
      },
      image: 'https://s3.amazonaws.com/profilepage1/profile.jpg',
      quote: {
        content: 'Life shrinks or expands in proportion to one\'s courage.',
        source: 'Anais Nin'
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

function Image(props) {
  return (
    <div className="Image" style={{backgroundImage: 'url(' + props.src + ')' }}></div>

  );
}
function Profile(props){
  return (
      <div className="Profile">
        <div className="Name">{props.person.name}</div>
        <div className="Quote">
          <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
          <div className="byline">&mdash; {props.quote.source}</div>
        </div>
        <div className="Bio">{props.person.biography.map((paragraph, position) =>{
          return(
             <p key={'paragraph'+position}>{paragraph}</p>
          )
        })
       }</div>
       <div className="Github">{props.person.github}<div className="Linkedin">{props.person.linkedin}</div></div>
      </div>
    );
}

export default App;
