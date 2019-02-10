import React, { Component } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';

import Header from '../Components/Header/Header';
import BackgroundImage from '../Components/BackgroundImage/BackgroundImage';
import CenterBox from '../Components/CenterBox/CenterBox';
import Projects from '../Components/Projects/Projects';
import TitleRow from '../Components/TitleRow/TitleRow';
import Skills from '../Components/Skills/Skills';
import Modal from '../Components/UI/Modal/Modal';
import Form from '../Components/UI/Form/Form';
import Footer from '../Components/Footer/Footer';

class App extends Component {

  state = {
    projectsList: [
      {
        title: 'BeerLeagueMe',
        description: 'This is an ongoing project to create a network of local sports events.',
        technologies: ['JavaScript', 'AngularJS', 'Node.js', 'Express', 'PostgreSQL'],
        githubUrl: 'https://github.com/nathanejbrown/beerleagueme',
        deployedUrl: 'https://nathanejbrown.github.io/beerleagueme'
      },
      {
        title: 'Running Blog',
        description: 'This is an ongoing project that is a one-stop shop for runners to learn about gear, read blog posts, and connect with each other.',
        technologies: ['JavaScript', 'React', 'Axios', 'Node.js', 'Express', 'PostgreSQL'],
        githubUrl: 'https://github.com/nathanejbrown/running-blog',
        deployedUrl: 'https://nathanejbrown.github.io/running-blog'
      },
      {
        title: 'Tribbianify',
        description: 'This was my first quarter project at Galvanize, it finds a synonym for every word in the user\'s input.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
        githubUrl: 'https://github.com/nathanejbrown/q1Project',
        deployedUrl: 'https://nathanejbrown.github.io/q1Project'
      }
    ],
    skillsList: [
      {
        skillType: 'Languages',
        skillsArray: ['HTML', 'CSS', 'JavaScript', 'Python']
      },
      {
        skillType: 'Tools',
        skillsArray: ['React', 'Redux', 'AngularJS', 'Boostrap', 'Materialize', 'Google Material Design', 'Node.js', 'Express', 'PostgreSQL', 'jQuery', 'git/Github', 'AJAX', 'Heroku', 'RESTful APIs']
      },
      {
        skillType: 'Other',
        skillsArray: ['Agile', 'Customer Service', 'Writing', 'Time Management', 'Self Motivation', 'Teamwork', 'Creativity']
      }
    ],
    contacting: false
  }

  contactShowHandler = () => {
    this.setState({contacting: true})
  }

  contactHideHandler = () => {
    this.setState({contacting: false})
  }

  render() {

    return (
      <React.Fragment>
        <Modal show={this.state.contacting} modalClosed={this.contactHideHandler}>
          <Form />
        </Modal>
        <Header showForm={this.contactShowHandler}/>
        <BackgroundImage background="Albuquerque">
          <CenterBox>
            <h1>Nathan Dennis</h1>
            <hr />
            <h2>Full Stack Developer</h2>
          </CenterBox>
        </BackgroundImage>
        <TitleRow>
          <h1>Projects</h1>
        </TitleRow>
        <BackgroundImage background="Winnipeg">
          <Projects projectsList={this.state.projectsList} />
        </BackgroundImage>
        <TitleRow>
          <h1>Skills</h1>
        </TitleRow>
        <BackgroundImage background="Boston">
          <Skills skillsList={this.state.skillsList} />
        </BackgroundImage>
        <Footer showForm={this.contactShowHandler}/>
      </React.Fragment>
  );
  }
}

export default App;
