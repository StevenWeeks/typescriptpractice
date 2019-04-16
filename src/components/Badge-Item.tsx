import React from 'react'


const Repos = (props: any) => {
  let project = props.project
  console.log(project, "mellow")
  return (
    <div className="Repo-Item">
      <ul className="Each-Repo">
        <li>
        <br/>
        <h2>{project.projectName}</h2>
        <br/><a href={project.circleCiHref}/><img src={project.circleCiImages[0]} alt={project.circleCiImages[1]}/>
        <br/><a href={project.codeClimateHref[0]}/><img src={project.codeClimateImages[0]} alt={project.codeClimateImages[1]}/>
        <br/><a href={project.codeClimateHref[1]}/><img src={project.codeClimateImages[2]} alt={project.codeClimateImages[3]}/>
        </li>
      </ul>
    </div>
  )
}

export default Repos
