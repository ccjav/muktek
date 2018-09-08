import React, {Component} from 'react'

class EduTitle extends Component {
  render() {
    this.props.dates
    this.props.institute
    return (
      <div className="degree">
       <h5 className="degree__institute">{/*pass institute as props in EducationHistory component */} </h5>
       <p className="degree__field">{/*pass field as props in EducationHistory */}</p>
       <p className="degree__dates">{/*pass dates as props in EducationHistory */}</p>
     </div>
    );
  }
}

export default EduTitle
