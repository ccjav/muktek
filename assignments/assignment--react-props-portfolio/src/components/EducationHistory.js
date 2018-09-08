import React, {Component} from 'react'
// import EduTitle component

class EducationHistory extends Component {
  render() {

    /* receive `eduList` array as props from App compnonent */

    return (
      <section>
        <h4>Education</h4>
        <div className="degree-">

          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from each education object
                    to the <EduTitle> component as props...
            */
            this.props.eduList.map(degree => {
              return <div className="degree">
                       <h5 className="degree__institute">{degree.institute}</h5>
                       <p className="degree__field">{degree.fieldOfStudy}</p>
                       <p className="degree__dates">{degree.dates}</p>
                     </div>
            })
          }

        </div>
      </section>
    )
  }
}

export default EducationHistory;
