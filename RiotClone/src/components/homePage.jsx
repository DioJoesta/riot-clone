export function HomePage () {
    return (
        <div>
            <div className="video w-full h-[70vh]">
            <video className="w-full h-full object-cover"  autoPlay loop muted playsInline>
                <source src="/rise-video.mp4" type="video/mp4"/>
            </video>
            </div>

            
            <div className="whats-new bg-slate-950 w-[100vw] h-[150vh] " >
                        {/*intro text divs*/}
                    <div className="intro flex items-center justify-evenly w-full h-[200px]">
                        <div className="bg-none w-[500px] flex justify-center items-center h-28 text-center text-white
                        text-[45px] font-bold translate-x-[-300px]">
                            What's happening?
                        </div>
                        <button className=" w-[99px] h-[28px] flex justify-center items-center text-white translate-x-[200px]
                        bg-slate-800 rounded-md">
                            SEE MORE
                        </button>
                    </div>
                        {/*intro divs*/}
                <div className="bigflex flex translate-x-[-15px] justify-evenly gap-5">

                    <div className="pic flex flex-col items-start">
                        <div className="">
                            <img src="/pic1.jpeg" alt="####" className="w-full rounded-md"/>
                        </div>
                        <div className="text-white text-[40px] font-bold">
                            Celebrating games
                        </div>
                        <button className="text-white text-[20px] font-bold flex gap-3">
                             <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" />News</button>
                    </div>

                    <div className="cards flex flex-col gap-5">
                        <div className="w-[600px] h-[150px] bg-slate-700 shadow-lg rounded-lg flex">
                            <div className=" flex flex-col p-5 gap-5">
                                <div className="text-white text-[20px] font-bold">
                                    Dev Double Up: Making Unbound and Chibi...
                                </div>
                                <button className="text-white text-[20px] font-bold flex gap-3">
                                    <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" />News</button>
                            </div>
                            <div className="border-red w-full">
                                <img className="rounded-lg w-[300px] h-[150px] translate-x-[51px] translate-y-[0px]"  src="/pic1.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="w-[600px] h-[150px] bg-slate-700 shadow-lg rounded-lg flex">
                            <div className=" flex flex-col p-5 gap-5">
                                <div className="text-white text-[20px] font-bold">
                                    Dev Double Up: Making Unbound and Chibi...
                                </div>
                                <button className="text-white text-[20px] font-bold flex gap-3">
                                    <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" />News</button>
                            </div>
                            <div className="border-red w-full">
                                <img className="rounded-lg w-[300px] h-[150px] translate-x-[51px] translate-y-[0px]"  src="/pic1.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="w-[600px] h-[150px] bg-slate-700 shadow-lg rounded-lg flex">
                            <div className=" flex flex-col p-5 gap-5">
                                <div className="text-white text-[20px] font-bold">
                                    Dev Double Up: Making Unbound and Chibi...
                                </div>
                                <button className="text-white text-[20px] font-bold flex gap-3">
                                    <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" />News</button>
                            </div>
                            <div className="border-red w-full">
                                <img className="rounded-lg w-[300px] h-[150px] translate-x-[51px] translate-y-[0px]"  src="/pic1.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="w-[600px] h-[150px] bg-slate-700 shadow-lg rounded-lg flex">
                            <div className=" flex flex-col p-5 gap-5">
                                <div className="text-white text-[20px] font-bold">
                                    Dev Double Up: Making Unbound and Chibi...
                                </div>
                                <button className="text-white text-[20px] font-bold flex gap-3">
                                    <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" />TECH BLOG</button>
                            </div>
                            <div className="border-red w-full">
                                <img className="rounded-lg w-[300px] h-[150px] translate-x-[51px] translate-y-[0px]"  src="/pic1.jpeg" alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            {/*games divs*/}
            <div className="games bg-slate-800 text-white
                        text-[45px] font-bold ">
                <h2 className="p-10">Games</h2>
                <div className="grid grid-cols-2 place-items-center gap-x-1 gap-y-1">
                <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                            <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                            <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                            <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                            <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden col-span-2">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                </div>
                {/*esports divs*/}
            </div>
            <div className="esports bg-slate-400 text-white
                        text-[45px] font-bold">
                 <h2 className="p-10">Esports</h2>
                <div  className="grid grid-cols-2 place-items-center gap-x-1 gap-y-1" >
                    <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                                <h2 className="col-span-2">Esports</h2>
                                <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="relative w-[589px] h-[310px] bg-slate-700 shadow-lg rounded-lg flex overflow-hidden">
                                    <div className=" flex flex-col p-5 gap-5 justify-center w-[110px]">
                                        <div className="text-white text-[20px] font-bold ">
                                            LEAGUE OF LEGENDS
                                        </div>
                                        <button className="text-white text-[20px] font-bold flex gap-3">
                                            <img className="rounded-full size-8" src="/Riot Icon.jpeg" alt="" /></button>
                                    </div>
                                    <div className="absolute rounded-lg w-[650px] h-[350px]  flex justify-items-center" style={{top:'-40px', left: '100px', perspective:'800px', transform: 'rotateZ(15deg) rotateY(52deg)'}}>
                                        <img className="rounded-lg w-full h-full"  src="/pic1.jpeg" alt="" />
                                    </div>
                                </div>
                   
                </div>
            </div>

                {/*before the footer nav*/}
        
            <div className="w-full bg-white h-[600px] flex justify-start">
                <div className=" flex flex-col justify-center items-center gap-4 bg-white w-[790px] h-full relative z-10" style = {{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100% )'}}>
                    <h3 className="text-[50px] justify-center items-center flex translate-y-[70px]">We're hiring!</h3>
                    <h3 className="flex w-full whitespace-normal items-center h-[200px] text-[20px] justify-center">Team up  with Riot to forge your path and craft <br /> unforgettable experiences for players</h3>
                    <div className="flex w-[600px] gap-5 translate-y-[-50px]  h-[150px] justify-center">
                        <button className="bg-slate-300 rounded-2xl w-[250px] h-[150px]">132</button>
                        <button className="bg-slate-300 rounded-2xl w-[250px] h-[150px]">Open positions</button>
                    </div>
                    <button className="bg-red-500 rounded-2xl translate-y-[-30px] w-[250px] h-[60px] text-white text-[20px] font-bold">Explore Careers</button>
                </div>
                {/*left pic divs*/}
                <div className=" h-[599px]  z-0 w-[990px] translate-x-[550px] absolute ">
                    <img className="h-full w-full" src="/pic2.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}