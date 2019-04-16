import React from 'react'


const Repos = (props: any) => {
  let project = props.project
  let peanut = () => {console.log("hello")}
  return (
    <div className="Repo-Item">
      <ul className="Each-Repo">
        <li>
        <br/>
        <h2>{project.projectName}</h2>
        <br/><a href={project.circleCiHref} target="_blank" ><img src={project.circleCiImages[0]} alt={project.circleCiImages[1]} /> </a>
        <br/><a href={project.codeClimateHref[0]} target="_blank"><img src={project.codeClimateImages[0]} alt={project.codeClimateImages[1]}/></a>
        <br/><a href={project.codeClimateHref[1]} target="_blank"><img src={project.codeClimateImages[2]} alt={project.codeClimateImages[3]}/></a>
        </li>
      </ul>
    </div>
  )
}

export default Repos
