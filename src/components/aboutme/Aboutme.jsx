import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutme.css'



const Aboutme = () => {
  
    return (

      <div>
         <div className="heading" ></div>
        
            <div className="container" style={{content:'inherit'}} >
                <h2>Hello, I'm Rahma Samir and I'm a Frontend Developer | Intern @
              Information Technology Institute </h2><br/><br/>
                <p>Innovative Front End Developer with 7 months of experience building and maintaining responsive websites in the recruiting industry.</p>
                <p>Bachelor of Computer Science</p>
                <p>7 months of experience in Front End Development.</p>
                <br/>
                <div className="Buttons"  style={{ display: 'flex' , alignItems:'center' }}>
                <a
                href="https://github.com/RahomaSamir"
                placeholder="Github Account">
                <button className="btn btn-secondary" style={{marginRight:"6px"}}>Github</button>
              </a>
              <a
                href="https://www.linkedin.com/in/"
                placeholder="LinkedIn Account">
                <button className="btn btn-secondary" style={{marginRight:"6px"}}>Linkedin</button>
              </a>
            </div>
        </div>
        </div>
       
  );
};

export default  Aboutme;