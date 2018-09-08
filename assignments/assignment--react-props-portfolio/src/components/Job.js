
import React, {Component} from 'react'

class Job extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="job">
    <div className="job__years">
      <h6 className="job__end">{/* pass in data as props data in WorkHistory compnonent */}</h6>
      <h6 className="job__start">{/* pass props data in WorkHistory compnonent */}</h6>
    </div>
    <h5 className="job__title">{/* pass in data as props data in WorkHistory compnonent */}</h5>
    <h5 className="job__company">{/* pass  in data asprops data in WorkHistory compnonent */}</h5>
    <p className="job__description">{/* pass in data as props data in WorkHistory compnonent */n}</p>
  </div>
    );
  }
}

export default Job
