import React from 'react'
import './App.css';


function App() {

  return (
    <div className="App">

    <div>

    <div className="ani namenbtn">
          <h1 className="myfont My_name"> 
          Hi, my name is <span className = "NAME">Nitin Negi </span> <br/> 
          I'm the<span className = "NAME"> MERN STACK </span> Developer.</h1>
          <div className ="Mybutton">
                <div class="container">
                  <div class="center">
                    <button class="btn" id="btn">
                      <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />'
                        <a class="cta-btn cta-btn--hero" href="#about">Know more</a>
                      </svg>
                      
                      <span><a class="cta-btn cta-btn--hero" href="#about">Know more</a></span>

                    </button>
                  </div>
                </div>
            </div>  
          </div>
    <div className="about" id="about">
        <h1 className="myfont abouttext" style = {{color:"white"}} > ABOUT ME</h1>

      <div className="mydisbox">

      <div className="nitinphotos">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

  <div className="carousel-inner">
    <div className="item active">
      <img src="a.jpeg" alt="Nitin images"/>
    </div>

    <div className="item">
      <img src="b.jpeg" alt="Nitin images"/>
    </div>

    <div className="item">
    <img src="c.jpeg" alt="Nitin images"/>
    </div>

    <div className="item">
    <img src="d.jpeg" alt="Nitin images"/>
    </div>

  </div>

  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>  
      </div>

        <div> 
        <h6 className="myfont my_des" style = {{color:"white"}} > This is where you can describe about yourself. The more you describe about yourself, the more chances you can!
        Extra Information about you! like hobbies and your goals.</h6>
        </div>
      </div>
      <div class="resumecontainer">
          <button class="btn" id = "mybtn" >
            <span style = {{color:"white"}}><a href="https://bit.ly/3tO1gJp" color="white" > View Resume </a>   </span>
          </button>
        </div>
      </div>
    <div class="projectdiv">
      <h1 className="myfont abouttext"> MY PROJECTS</h1>
      <div class = "Myprojects">
      <div classNames = "leftpro">
        <h1 className = "myfont Projectname">Project Title 0</h1>
          <p className="myfont prodes"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate ex architecto itaque molestiae. </p>
          <button class="btn" >
            <span style = {{color:"light_black"}} > view code </span>
          </button>
        </div>
          <div className= "rightpro">
            <img src="a.jpeg" height="600px" width= "600px" alt = "project"/>
          </div>
       </div>
      </div>
    <div class="projectdiv2">
      <h1 className="myfont abouttext"> MY PROJECTS</h1>
      <div class = "Myprojects">
      <div classNames = "leftpro">
        <h1 className = "myfont Projectname">Project Title 0</h1>
          <p className="myfont prodes"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate ex architecto itaque molestiae. </p>
          <button class= "btn bb">
            <span style = {{color:"light_black"}} > view code </span>
          </button>
        </div>
          <div className= "rightpro">
            <img src="a.jpeg" height="600px" width= "600px" alt = "project"/>
          </div>
       </div>
      </div>
    <div className="contact">
    <h1 className="myfont " style = {{color:"white"}}> CONTACT</h1>
    <div className = "mycontact">
      <center>
      <h2 className="contactme" style = {{color:"white"}}>  MyNumber : 9634470622 </h2>
      <h2 className="contactme" style = {{color:"white"}} > Email : Santynitin7@gmail.com </h2>
      </center>
    </div>
    <button class="btn" >
    <a className = "myfont email" style = {{color:"white"}}  href="mailto:Santynitin7@email.com">Email to Action </a> 
    </button>
      </div>

    <div className="myfooter">

        <div className="footer">
          <div className="socialmedia">

          <a href = "https://github.com/1dudecoder"> <img className = "abc" src="https://img.icons8.com/material-rounded/60/ffffff/github.png" alt = "github"/> </a>
          <a href = "https://www.linkedin.com/in/nitin-negi-b17681137/"> <img className = "abc" src="https://img.icons8.com/android/55/ffffff/linkedin.png" alt = "linkedin" /> </a>
          <a href = "https://twitter.com/santy_nitin"> <img className = "abc" src="https://img.icons8.com/android/55/ffffff/twitter.png" alt = "twitter"/> </a>
          <a href = "https://www.instagram.com/man_long_time/"> <img className = "abc" src="https://img.icons8.com/carbon-copy/55/ffffff/instagram-new.png" alt = "instagram"/> </a>
          </div>

        </div>
        <p className = "licence" style = {{ color : "white"}}>  © 2021 - Template developed by Nitin Negi </p> 
  </div>
    </div>
    </div>
  );
}

export default App;
