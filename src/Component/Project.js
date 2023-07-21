import React from "react";
import './Styles.css'

const Project = () => {
  return (
    <section id="portfolio">
      <h1 class="section-heading mb75px">
        <span>
          <i class="fas fa-th-list"></i>
        </span>
        <span> Projects</span>
      </h1>

      <div id="portfolio-container">
        {/* <!-- Rove india  --> */}
        <a href="https://github.com/avi112bala/MERN-PROJECT">
          <div class="portfolio-image-container">
            <img src="./Rove India.jpg"></img>
            <div class="portfolio-details">
              <p>
                <h6>Rove India</h6>
                It is Trave-Website in this there is booking section , contact
                section ,and also some packages .
              </p>
            </div>
          </div>
        </a>
        {/* <!-- Rove india  --> */}

        {/* <!-- Movie App  --> */}
        <a href="https://github.com/avi112bala/MOVIE-APP">
          <div class="portfolio-image-container">
            <img src="https://www.androidpolice.com/wp-content/uploads/2013/12/nexusae0_2013-12-19-15.03.17.png"></img>
            <div class="portfolio-details">
              <p>
                <h6>MOVIE-APP</h6>
                It is a Movie App Website You can search movie and add to
                favourite list and can also store it unfavourite.
              </p>
            </div>
          </div>
        </a>

        {/* <!-- movie App  --> */}

        {/* <!-- Imdb Project  --> */}

        <a href="https://avi112bala.github.io/IMDB-PROJECT/">
          <div class="portfolio-image-container">
            <img src="./Imdb movie.png"></img>
            <div class="portfolio-details">
              <p>
                <h6>IMDB Rating</h6>
                In this you can search any movie and see all the detail of
                movies like release date , star cast , imbd rating and also add
                in favourite list.
              </p>
            </div>
          </div>
        </a>

        {/* <!-- Imdb Project  --> */}

        {/* <!-- To-Do List  --> */}
        <a href="https://todo-list-13fd5.web.app/">
          <div class="portfolio-image-container">
            <img src="./Screenshot (66).png"></img>
            <div class="portfolio-details">
              <p>
                <h6>TO-DO List</h6>
                In this you can add any task , mark it as a complete , delete
                the task , edit the task.
              </p>
            </div>
          </div>
        </a>

        {/* <!-- TO-Do List  --> */}

        {/* <!-- Habit - tracker  --> */}
        <a href="https://myhabittracker-e8a00.web.app/">
          <div class="portfolio-image-container">
            <img src="./Screenshot (67).png"></img>
            <div class="portfolio-details">
              <p>
                <h6>Habit-Tracker</h6>
                In this you can add any habit like exercise and track it all the
                week as the day pass you can mark it done, in progress, or not
                done.
              </p>
            </div>
          </div>
        </a>

        {/* <!-- Habit tracker --> */}

        {/* <!-- Album List  --> */}
        <a href="https://albumlist-16e5a.web.app/">
          <div class="portfolio-image-container">
            <img src="./Screenshot (68).png"></img>
            <div class="portfolio-details">
              <p>
                <h6>Album List</h6>
                It is Album list project , in this you can add your favourite
                album and also you can update it and delete it .
              </p>
            </div>
          </div>
        </a>
        {/* <!-- album List  --> */}

        {/* <!-- PING-PONG GAME  --> */}
        <a href="https://avi112bala.github.io/Ping_Pong-Game/">
          <div class="portfolio-image-container">
            <img src="./Screenshot (69).png"></img>
            <div class="portfolio-details">
              <p>
                <h6>Album List</h6>
                IT is Ping-pong game build using javaScrip. in which you can
                play the game easily with enjoyment. .
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Project;
