import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import placeholder from '../images/3409139.jpg';
import horiseon from '../images/horiseon.png';
import timeapp from '../images/timeapp.png';
import mixitup from '../images/mix-it-up.png';
import sql from '../images/sql.png';
import noteapp from '../images/noteapp.png';
import regex from '../images/regex.png';

function Project() {
   
    return (
    <div className ='container'>
        <div className='row' xs={1} md={2} lg={2}>
            <div className='card'>
                <img className='card-img-top' src={horiseon} 
                  alt="HTML CSS code refactor"/>
                <div className='card-body'>
                <h5 className='card-title'>HTML and CSS Refactoring</h5>
                <a href='https://github.com/suecmorin/horiseon-coderefactor'><button>GitHub Repo</button></a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img-top' src={timeapp}
                   alt="Javascript arrays and Moment API" />
                <div className='card-body'>
                <h5 className='card-title'>Javascript to generate day planner</h5>
                <a href='https://github.com/suecmorin/timeapp'><button>GitHub Repo</button></a>
                </div>
            </div>
        <div className="row">
                <div className='card'>
                <img className='card-img-top' src={mixitup}
                    alt="team project with RESTful API"/>
                <div className='card-body'>
                <h5 className='card-title'>Team Project: Using RESTful API</h5>
                <a href='https://github.com/lizbailey75/Mix-It-Up-'><button>GitHub Repo</button></a>
                </div>
            </div>
            <div className='card'>
                <img className= 'card-img-top' src={noteapp} 
                    alt="Note App"/>
                     <h5 className='card-title'>Express and Heroku</h5>
                <a href='https://notes-sue.herokuapp.com'><button>GitHub Repo</button></a>
                </div>
            </div> 
        </div>
        <div className="row">
            <div className='card'>
                <img className='card-img-top' src={sql} alt='MySQL'/>
                <div className='card-body'>
                <h5 className='card-title'>MySQL and Inquirer</h5>
                <a href='https://github.com/suecmorin/mysql'><button>GitHub Repo</button></a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img-top' src={regex}
                   alt="Github Gist and Regex"/>
                <div className='card-body'>
                <h5 className='card-title'>Creating a Regex</h5>
                <a href='https://gist.github.com/suecmorin/948325809126796f2d5825f4382dceaa'><button>GitHub Gist</button></a>
                </div>
            </div>
        </div>
    </div>
)
}



  export default Project;