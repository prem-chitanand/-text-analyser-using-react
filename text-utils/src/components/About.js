import React from 'react'
import {Link} from 'react-router-dom'

export default function About(props) {
    return (
        <>
  <div className="col-lg-6 col-xs-12 container" >
  <div className="row">
    <div className="thumbnail">
      <div className="caption">
        <h3>{props.title}</h3>
        <p>{props.decs}</p>
        <p> <Link to="#" className={props.button} role="button">{props.buttonTitle}</Link></p>
      </div>
    </div>
  </div>
</div>



        </>
    )
}
