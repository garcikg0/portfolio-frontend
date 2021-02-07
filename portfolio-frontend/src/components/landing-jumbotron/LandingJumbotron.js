import React from 'react';
import './Styles.scss';

const LandingJumbotron = () => {

    return(
        <>
        <div class= 'container'>
            <div class="container_content">
                <div class="container_content_inner">
                    <div class="title">
                        <h1>Hello World</h1>
                    </div>
                    <div class="par">
                        <p> 
                            Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
                        </p>
                        <p>
                            Need to add a Navbar at top. Tabs could be Home, About, Projects, Contact
                        </p>
                    </div>
                    <div class="btns">
                        <button class='btns_more'> Social icon to LinkedIn </button>
                    </div>
                    <div class="btns">
                        <button class='btns_more'> Social icon to LinkedIn, Github </button>
                    </div>
                    <div class="btns">
                        <button class='btns_more'> Social icon to Blog </button>
                    </div>
                    <div class="btns">
                        <button class='btns_more'> Social icon to Twitter </button>
                    </div>
                </div>
            </div>
            <div class="container_outer_img">
                <div class="img-inner">
                    <img src='https://www.stockvault.net/data/2015/08/28/177182/preview16.jpg'  alt="" class="container_img"/>
                </div>
            </div>
        </div>
        <div class="overlay"></div>
        </>
    ) 
};

export default LandingJumbotron;