import React, { Component } from 'react';
import logo from './logo.svg';

import SkillsList from './components/SkillsList';
import DegreeHistory from './components/EducationHistory';
import WorkHistory from './components/WorkHistory';

class App extends Component {
  render() {
    console.log(this.props.skills)
    console.log(this.props.jobsList)
    console.log(this.props.eduList)
    return (
      <div id="app-container">
        <SkillsList skills={this.props.skills} />
        <DegreeHistory eduList={this.props.eduList} />
        <WorkHistory jobsList={this.props.jobsList} />
      </div>
    );
  }
}

export default App;
