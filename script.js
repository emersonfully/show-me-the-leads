* {
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Lato', sans-serif;
    background-image: url(images/background.jpg);
    background-size: cover;
    background-position: center; 
    height: 100vh;
    overflow: hidden;
  }

  header {
    background-color: rgb(0,0,0);
    height: 11vh;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }
  
  header img {
    height: 50px;
  }

  nav {
      line-height: 1.5;
  }

  .quiz {
    width: 100%;
    height: 89vh;
    background-color: rgba(255,255,255,0.4);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 4em 2em 4em;
    float: right;
  }
  
  .stem {
    font-size: 3em;
    margin: 0 auto 1.2em;
  }
  

.choice-flexbox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .options {
    width: 50%;
    font-size: 1em;
    color: white;
    background-color: rgb(0,0,0);
    margin: 0.2em;
    border-radius: 0px;
    padding: 0.5em;
    float: right;
  }
  


  .progress {
    visibility: hidden;
  }
  
  .refresh {
    font-size: 1.5em;
    color: white;
    background-color: lightseagreen;
    margin: 0.2em;
    border-radius: 8px;
    margin-top: 1em;
    padding: 0.5em;
    width: 150px;
    text-align: center;
  }
  
  .refresh:hover {
    transform: scale(1.02);
    box-shadow: 0 3px 4px black, inset 0 0 4px grey;
    cursor: pointer;
  }
  
  .refresh:focus {
    outline: none;
  }
  
  @media only screen and (max-width: 1200px) {
    .quiz {
      width: 100%;
    }
    .progress {
      width: 100%;
      padding-top: 1em;
      margin-top: 1em;
    }
  }
  
  @media only screen and (max-width: 550px) {
    .quiz {
      padding: 0.5em 1em 0.5em;
    }
    .stem {
      font-size: 2em;
    }
    .options {
      font-size: 1.2em;
      width: 80%
    }
    .progress {
      width: 100%;
      padding-top: 0.7em;
      margin-top: 0.7em;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    .options:hover {
      transform: scale(1.02);
      box-shadow: 0 3px 4px black, inset 0 0 4px grey;
      cursor: pointer;
    }
    .options:focus {
      outline: none;
    }
  }
  
  
  
          /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 90vw;
    height: 90vh;
  }
  
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }