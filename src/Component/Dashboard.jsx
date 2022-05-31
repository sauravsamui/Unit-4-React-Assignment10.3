import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Dashboard = () => {
    const {isLight,dark,light} = useContext(ThemeContext)
  return (
    <div>
        <h3 style={{textAlign:"center"}}>Active Users</h3>
        <div style={{backgroundColor:isLight?light.backgroundColor:dark.backgroundColor,color:isLight?"black":dark.color}} className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src="http://cdn.shopify.com/s/files/1/0070/5698/2143/collections/superstar-john-cena.png?v=1632930327" className="img-fluid rounded-start col3" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">John Cena</h5>
          <p className="card-text">Professional Wrestler,WWE fighter,Former Weight Champion</p>
          <div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
 <h2>Professional Level:80%</h2>
        </div>
      </div>
    </div>
  </div>
  <div style={{backgroundColor:isLight?light.backgroundColor:dark.backgroundColor,color:isLight?"black":dark.color}} className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src="data:image/jpeg;base64,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" className="img-fluid rounded-start col3" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">The Rock</h5>
          <p className="card-text">Former WWE Wrestler,Hollywood Actor</p>
          <div className="progress">
  <div className="progress-bar bg-success second" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            <h2>Professional Level:60%</h2>
        </div>
      </div>
    </div>
  </div>
  <div style={{backgroundColor:isLight?light.backgroundColor:dark.backgroundColor,color:isLight?"black":dark.color}} className="card mb-3" >
    <div className="row g-0">
      <div   className="col-md-4 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brock_Lesnar_WWE_Champion_2014.jpg/170px-Brock_Lesnar_WWE_Champion_2014.jpg" className="img-fluid rounded-start col3" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Brock Lesnar</h5>
          <p className="card-text">Professional Wrestler,Former UFC champion and Former WWE Champion</p>
          <div className="progress">
  <div className="progress-bar bg-info last" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div><h2>Professional Level:65%</h2>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Dashboard