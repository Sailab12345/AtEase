import axios from 'axios';
import  React,{Component} from 'react';
import './service.css';
const Service = props => {
    return(
      <>
        <div className="card text-center">
          <div className="overflow">
            <img src={props.imgsrc} alt="" className="card-img-top"/>
          </div>
          <div className="card-body text-dark">
            <h4>{props.title}</h4>
            <p className="card-text text-secondary">
              Get recognized Carpenters
            </p>
            <a href={props.url} className="btn btn-outline-success">View Details</a>
          </div>

        </div>
      </>
    );
};

export default Service;
