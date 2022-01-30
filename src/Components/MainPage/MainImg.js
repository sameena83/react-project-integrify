import React, {useState} from "react";
import './MainImg.css'

function MainImg(props) {

const [title,setTitle]=useState('Welcome to my Webshop')

  return (
    <div className="image__container">
      <div class="image__description">
        <h1 onMouseOver ={()=>setTitle('This is Sams Shop')} className="title">{title}</h1>
        <p  className = "desc">
          Kiersten’s site focuses on the intersection of fashion and travel.She
          gives tips and advice for women on what wear, pack, and see while
          overseas and focuses more on higher-end, comfort travel than I do. I
          think her blog is one of the best for female travelers and, though
          it’s not targeted to me, I find useful information that I share with
          others. Kiersten and I are friends, and I love seeing her site grow
          and expand, especially over the last year. She seems to be everywhere!
        </p>
      </div>
      <img class="image__portion"
        src="https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 "
        alt="travel"
      />
    </div>
  );
}

export default MainImg;