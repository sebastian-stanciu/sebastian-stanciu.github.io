import React, {Component} from 'react';
import './App.css';
import Img from './background.jpeg';
import { FaInstagram } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';


class App extends Component{

  render(){


    return(

      <div style = {{backgroundColor: "#2f4363"}}>

        <img src = {Img}/>

        <p>
        <MdKeyboardArrowRight/>
        <br/>
        <MdKeyboardArrowRight/>
        <br/>
        <MdKeyboardArrowRight/>
        </p>

        <div className = "box">

          <p1> Cine sunt eu? </p1>

            <br></br>

          <p> 

          Sunt în clasa a 10-a la științe sociale <br></br>
          "I" de la iubire, căci iubirea e-o culoare <br></br>
          Nu îmi e frica să îmi transform ideile în realitate <br></br>
          Iar zâmbetele îmi dau puteri nelimitate <br></br>
          Compun fotografii și fotografiez poezii senzaționale <br></br>
          Berbec, fecioară și scorpion îmi sunt punctele astrale <br></br>
          Iar "carpe diem" e ce mă ține în picioare <br></br>
          Am motivație și știu că pot să reușesc <br></br>
          Deoarece să ajut este tot ce iubesc <br></br>

          </p>

        </div>


        <p2>
          
          <a href = "https://www.instagram.com/biancasincrediblelife/"> <FaInstagram/> </a>  
          <a href = "https://www.instagram.com/biancasincrediblelife/"> Bianca Toader </a>

          <br/>

          <p3>
          made by Theodor Ioan P.
          </p3>

          <br/>

          <a href = "https://www.instagram.com/_theodor.17/"> <FaInstagram/> </a>  
          <a href = "https://www.instagram.com/_theodor.17/"> Theodor Ioan </a>

        </p2>


      </div>

    )

  }

}

export default App;