import React from "react";
import { Grid, Cell } from 'react-mdl';
const About = () => (
  <div>
    <Grid>
      <Cell col={6}>
      <div className="row">
        <div style={{padding:'2em'}} className="col s12 m6" >
          <div className="card">
            <div className="card-image">
              <img src="https://i.imgur.com/Egj2cwD.jpg" alt="avatar"
                style={{height: '400px'}}/>
              <span className="card-title">Ahraar Alam</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="/">Profile</a>
            </div>
          </div>
        </div>
      </div>
      </Cell>

      <Cell className="resume-right-col" col={6}>
      <div  className="row">
        <div style={{padding:'2em'}} className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src="https://i.imgur.com/Egj2cwD.jpg" alt="avatar"
                style={{height: '400px'}}/>
              <span className="card-title">Ankush Rawat</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="/">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      </Cell>
    </Grid>
  </div>
);

export default About;
