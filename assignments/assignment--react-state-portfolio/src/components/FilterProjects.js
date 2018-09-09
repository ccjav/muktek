import React, { Component } from 'react';
// Aquí estamos importando los datos en el mismo componente. RIchard nos comenta que si los datos son usados solamente por el componente, entonces está bien, si es usado por otros componentes, lo vamos subiendo de nivel
import { projectData } from '../data/datasource';
import Project from './Project';

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       you will want to map to an array of <Project/> components


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()


 */

class FilterProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjectFilter: "all"
    };
  }

  handleClick = (e) => {
    this.setState({
      selectedProjectFilter: e.currentTarget.dataset.ptype
    });
  };

  render() {

    const filteredData = projectData.filter(project => {
      if (this.state.selectedProjectFilter === "all") {
        return true
      } else if (this.state.selectedProjectFilter === "solo") {
        return project.solo === true
      } else if (this.state.selectedProjectFilter === "team") {
        return project.solo === false
      }
    })

    const projectSelectedClassVal = 'project-type--selected'

    let allSelectedRenderedClass = (this.state.selectedProjectFilter === "all") ? projectSelectedClassVal : ''
    let soloSelectedRenderedClass = (this.state.selectedProjectFilter === "solo") ? projectSelectedClassVal : ''
    let teamSelectedRenderedClass = (this.state.selectedProjectFilter === "team") ? projectSelectedClassVal : ''

    // change value of 'let' variables based on component state for whether
    //'all', 'team', or 'solo' is selected




    // --

    return (
      <section>
        <h4>Projects</h4>

        <div className="project-types-list">
          <span data-ptype="all" className={`project-type project-type--all ${allSelectedRenderedClass}`} onClick={this.handleClick}>
            All
          </span>

          <span data-ptype="solo" className={`project-type project-type--solo ${soloSelectedRenderedClass}`} onClick={this.handleClick}>
            <i className="ion-person"></i>Solo
          </span>

          <span data-ptype="team" className={`project-type project-type--team ${teamSelectedRenderedClass}`} onClick={this.handleClick}>
            <i className="ion-person-stalker"></i>Team
          </span>
        </div>

        <div className='projects-list'>

          {/* Step (1) --- .map() the projectData to JSX  */
            filteredData.map(project => {
              // Aquí estamos abriendo paréntesis después de return, pero también funciona cuando no lo ponemos.
              return (
                <Project key={project.name} name={project.projectName} solo={project.solo} />
              );
            })
          }

        </div>
      </section>

    );
  }
}


export default FilterProjects;
