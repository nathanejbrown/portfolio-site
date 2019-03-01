import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import classes from './Header.css';

import resume from '../../assets/Nathan-Brown-Resume-copy.pdf';

const header = (props) => {

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <div className={classes.RightBorder}>
            <h2>
              <a href="/">Nathan Brown</a>
            </h2>
          </div>
          <div className={classes.row}>
            <div>
              <Button href="https://github.com/nathanejbrown" target="_blank">Github</Button>
              <Button href="https://linkedin.com/in/nathanejbrown" target="_blank">Linkedin</Button>
            </div>
            <div>
              <Button href={resume} target = "_blank">Resume</Button>
              <Button onClick={props.showForm}>Contact</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )

}

export default header;
