import React from 'react';
import BgImg from "../../assets/pickle.png";
import Input from "../input/input";
import "./home.css";

const Home = () =>{
    return(
        <div style={{ backgroundImage:`url(${BgImg})`}} className="bg-home-div">
                <Input></Input>
        </div>
    )
}

export default Home;