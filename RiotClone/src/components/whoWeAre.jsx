import React from "react";
import { useState } from "react";

export function WhoWeArePage (){
    const contentData = {
        "PLAYER FIRST": {
            title: "PLAYER FIRST",
            description: "We put players at the center of everything we do, ensuring their experience comes first."
        },
        "SERIOUS ABOUT GAMES": {
            title: "SERIOUS ABOUT GAMES",
            description: "We are dedicated to making the best games possible, with deep mechanics and engaging worlds."
        },
        "DREAM AND DELIVER": {
            title: "DREAM AND DELIVER",
            description: "We dream big and push boundaries, then work hard to bring those ideas to life."
        },
        "IN FOR THE LONG TERM": {
            title: "IN FOR THE LONG TERM",
            description: "We are committed to building a lasting legacy and continuously improving our games."
        },
        "ONE RIOT": {
            title: "ONE RIOT",
            description: "We collaborate as a team, unified by our passion for making amazing games."
        }
    };

    const [ content, setContent] = useState(contentData["PLAYER FIRST"]);
    
    function handleClickPlayerFirst () {
        setContent(contentData["PLAYER FIRST"])
    };
    function handleClickSeriousAboutGames () {
        setContent(contentData["SERIOUS ABOUT GAMES"])
    };
    function handleClickDreamAndDeliver () {
        setContent(contentData["DREAM AND DELIVER"])
    };
    function handleClickInForTheLongTerm () {
        setContent(contentData["IN FOR THE LONG TERM"])
    };
    function handleClickOneRiot () {
        setContent(contentData["ONE RIOT"])
    };

    {/**state for accordion */}

    const [expand, setExpand] = useState(false);


    return(
       <>
            <div className="top-[90px] w-full min-h-[650px] overflow-hidden pt-[90px] justify-items-center">
            <video autoPlay muted loop playsInline  className="w-full h-[650px] absolute top-0 left-0 object-cover">
                <source src="/Who-We-Are-Riot-Games.mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-[650] bg-black opacity-70 z-10"></div>
            {/**content*/}
            <div className="h-[350px] w-[900px] z-20 relative text-white text-center pt-20">
            <h3 className="text-[25px]">OUR VALUES</h3>
            <h3 className="text-[70px]">{content.title}</h3>
            <p className="text-[20px]">{content.description}</p>
            </div>
            {/**buttons for quotes */}
           <div className=" w-[1500px] h-[100px] relative mt-[109px] flex justify-evenly z-10">
                <div className="flex  h-[50px] w-[200px] gap-3 mt-[23px] transition-transform duration-300 hover:scale-110">
                <h3 className=" text-white ">01.</h3>
                <button className="text-white text-[25px] hover:border-b-[3px] border-red-600 " onClick={handleClickPlayerFirst}>PLAYER FIRST</button>
                </div>
                <div className="flex  h-[50px] w-[310px] gap-3 mt-[23px] transition-transform duration-300 hover:scale-110">
                <h3 className="text-white">02.</h3>
                <button className="text-white text-[25px] hover:border-b-[3px] border-red-600" onClick={handleClickSeriousAboutGames}>SERIOUS ABOUT GAMES</button>
                </div>
                <div className="flex  h-[50px] w-[280px] gap-3 mt-[23px] transition-transform duration-300 hover:scale-110">
                <h3 className="text-white">03.</h3>
                <button className="text-white text-[25px] hover:border-b-[3px] border-red-600" onClick={handleClickDreamAndDeliver}>DREAM AND DELIVER</button>
                </div>
                <div className="flex  h-[50px] w-[320px] gap-3 mt-[23px] transition-transform duration-300 hover:scale-110">
                <h3 className="text-white">04.</h3>
                <button className="text-white text-[25px] hover:border-b-[3px] border-red-600" onClick={handleClickInForTheLongTerm}>IN FOR THE LONG TERM</button>
                </div>
                <div className="flex  h-[50px] w-[200px] gap-3 mt-[23px] transition-transform duration-300 hover:scale-110">
                <h3 className="text-white">05.</h3>
                <button className="text-white text-[25px] hover:border-b-[3px] border-red-600" onClick={handleClickOneRiot}>ONE RIOT</button>
                </div>
            </div>

            
       </div>
        {/**second quotes */}
        <div className="w-full min-h-[350px] bg-gray-950 flex justify-center items-center gap-14 ">
            <div className="w-[300px] min-h-[200px] flex flex-col items-start gap-2 ">
                <h2 className="text-white text-[25px]">Hyper-serve the core</h2>
                <p className="text-white">
                We zero in on distinct groups of players who care the most, knowing they’ll bring others into the fold. As they evolve, so do we - learning what it takes to meet their needs and surpass their expectations.
                </p>
            </div>
            <div className="w-[300px] min-h-[200px] flex flex-col items-start gap-2 ">
                <h2 className="text-white text-[25px]">Be part of the community</h2>
                <p className="text-white">
                We meet players where they are and with empathy. Every interaction is an opportunity to add value, strengthen our relationship, and give them a sense of ownership in the games they love.
                </p>
            </div>
            <div className="w-[300px] min-h-[200px] flex flex-col items-start gap-2 ">
                <h2 className="text-white text-[25px]">Foster a thriving ecosystem</h2>
                <p className="text-white">
                Our games should be fair, safe, and welcoming for anyone who wants to love them. We push ourselves to design products and create environments that make it possible.
                </p>
            </div>
            <div className="w-[300px] min-h-[200px] flex flex-col items-start gap-2 ">
                <h2 className="text-white text-[25px]">Support players everywhere</h2>
                <p className="text-white">
                The investments we make, endeavors we pursue, and issues we address should benefit players around the world - no matter who they are, or the country or culture they live in.
                </p>
            </div>
        </div>
        {/**the who we are div with the big gif */}
        <div className="bg-white w-full min-h-[550px] flex justify-center items-center gap-20">
            <div className="max-w-[500px] min-h-[200px]">
                <img src="/zelda.gif" alt="###" />
            </div>
            <div className="max-w-[500px] min-h-[200px]">
                <h2 className="font-bold text-[40px]">
                WHO WE ARE
                </h2>
                <p>
                Riot Games was founded in 2006 to develop, publish, and support the most player-focused games in the world. As we went from one game to many, we have expanded to over 4,500 Rioters across more than 20 offices around the world bringing a global perspective to the games we create and the characters in them. From the streets of Piltover to the Radianite labs of Alpha Earth, we are all about making games and serving the people who love them.
                </p>
            </div>
        </div>
            {/**accordions */}
           <div className="min-w-[200px] min-h-[400px] flex sm:flex-col md:flex-row">
                <div   className={`min-w-[380px] md:min-h-[400px] flex md:flex-col hover:border-[3px] border-red-600 sm:flex-row  min-h-[200px] w-full
                    `}>
                        <div className="min-w-[200px] min-h-[300px] relative w-full ">
                            <img className="object-cover absolute w-full h-full" src="/valorant-pic-01.png" alt="###" />
                        </div>
                        <div className="bg-black flex justify-center items-center w-full">
                            <img src="/val-icon.png" alt="###" />
                        </div>
                        <div className="bg-black  flex justify-center items-center w-full">
                           <img src="/valorant-logotype.png" alt="###" />
                        </div>
                </div>
                <div   className={`min-w-[380px] md:min-h-[400px] flex hover:border-[3px] border-red-600 md:flex-col sm:flex-row  min-h-[200px] w-full
                   `}>
                        <div className="min-w-[200px] min-h-[300px] relative ">
                            <img className="object-cover absolute w-full h-full" src="/valorant-pic-02.jpg" alt="###" />
                        </div>
                        <div className="bg-black flex justify-center items-center w-full">
                            <img src="/val-icon.png" alt="###" />
                        </div>
                        <div className="bg-black  flex justify-center items-center w-full">
                           <img src="/valorant-logotype.png" alt="###" />
                        </div>
                </div>
                <div   className={`min-w-[380px] md:min-h-[400px] flex md:flex-col sm:flex-row  hover:border-[3px] border-red-600 min-h-[200px] w-full
                    `}>
                        <div className="min-w-[200px] min-h-[300px] relative  ">
                            <img className="object-cover absolute w-full h-full" src="/valorant-pic-03.jpg" alt="###" />
                        </div>
                        <div className="bg-black flex justify-center items-center w-full">
                            <img src="/val-icon.png" alt="###" />
                        </div>
                        <div className="bg-black  flex justify-center items-center w-full">
                           <img src="/valorant-logotype.png" alt="###" />
                        </div>
                </div>
                <div   className={`min-w-[380px] md:min-h-[400px] flex md:flex-col sm:flex-row hover:border-[3px] border-red-600 min-h-[200px] w-full`}>
                        <div className="min-w-[200px] min-h-[300px] relative  w-full ">
                            <img className="object-cover absolute w-full h-full" src="/valorant-pic-04.jpg" alt="###" />
                        </div>
                        <div className="bg-black flex justify-center items-center w-full">
                            <img src="/val-icon.png" alt="###" />
                        </div>
                        <div className="bg-black flex justify-center items-center w-full">
                           <img src="/valorant-logotype.png" alt="###" />
                        </div>
                </div>
                   
           </div>
           
       </>
       
    )
};