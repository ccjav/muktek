import React, {Component} from 'react'
// import Job components

class WorkHistory extends Component {
  render() {
    console.log('???');
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="job-timeline">
          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from the each job object
                    to the <Job> component as props...
            */
            this.props.jobsList.map(job => {
              return <div key={job.name} className="job">
                       <div className="job__years">
                         <h6 className="job__end">{job.years.end}</h6>
                         <h6 className="job__start">{job.years.start}</h6>
                       </div>
                       <h5 className="job__title">{job.title}</h5>
                       <h5 className="job__company">{job.company}</h5>
                       <p className="job__description">{job.description}</p>
                     </div>
            })
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
