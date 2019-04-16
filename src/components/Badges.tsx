import React from 'react'
import Repos from './Badge-Item'

let Badges = (props:any) => {
  const dataIn = props.data.repositories
  let projects;

      projects = dataIn.map((repo:any, i:any) =>
        <Repos project={dataIn[i]} key={dataIn[i].projectID} />
      )




  return (
    <div className="ReposDiv">
        {projects}
    </div>
  )

}

export default Badges
