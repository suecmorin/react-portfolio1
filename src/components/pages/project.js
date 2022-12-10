import React from 'react';
import 'http://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css';

function Project() {
    return (
    <div class ='container'>
        <div class='row' xs={1} md={2} lg={2}>
            <div class='card'>
                <img class='card-img-top' src="http://suecmorin.github.io/horiseon-coderefactor" 
                  alt="HTML CSS code refactor"></img>
                <div class='card-body'>
                <h5 class='card-title'>HTML and CSS Refactoring</h5>
                <button variant="light">http://github.com/suecmorin/horiseon-coderefactor</button>
                </div>
            </div>
            <div class='card'>
                <img class='card-img-top' src="http://suecmorin.github.io/timeapp/" 
                   alt="Javascript arrays and Moment API" ></img>
                <div class='card-body'>
                <h5 class='card-title'>Javascript to generate day planner</h5>
                <button variant="light">http://github.com/suecmorin/timeapp</button>
                </div>
            </div>
                <div class='card'>
                <img class='card-img-top' src="http://lizbailey75.github.io/Mix-It-Up-" 
                    alt="team project with RESTful API"></img>
                <div class='card-body'>
                <h5 class='card-title'>Team Project: Using RESTful API</h5>
                <button variant="light">http://github.com/lizbailey75/Mix-It-Up-/</button>
                </div>
            </div>
            <div class='card'>
                <img class= 'card-img-top' src="../images/3409139.jpg" 
                    alt="placeholder"></img>
                <div class='card-body'>
                <h5 class='card-title'>Express and Heroku</h5>
                <button variant="light">http://github.com/suecmorin/notes</button>
                </div>
            </div> 
            <div class='card'>
                <img class='card-img-top' src="http://drive.google.com/file/d/1FoCZZ444tsvQ-AwpWLS5q4E0yegB1g63/view" 
                    alt="MySQL"></img>
                  <div class='card-body'>
                <div class='card-body'>
                <h5 class='card-title'>MySQL and Inquirer</h5>
                <button variant="light">http://github.com/suecmorin/mysql</button>
                </div>
            </div>
            <div class='card'>
                <img class='card-img-top' src="http://gist.github.com/suecmorin/948325809126796f2d5825f4382dceaa" 
                   alt="Github Gist and Regex"></img>
                <div class='card-body'>
                <h5 class='card-title'>Creating a Regex</h5>
                <button variant="light">http://gist.github.com/suecmorin/948325809126796f2d5825f4382dceaa</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}



  export default Project;