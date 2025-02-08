export function HomePage () {
    return (
        <div>
            <div className="video w-full h-[70vh]">
            <video className="w-full h-full object-cover"  autoPlay loop muted playsInline>
                <source src="/rise video.mp4" type="video/mp4"/>
            </video>
            </div>

            
            <div className="whats-new bg-slate-950 w-[100vw] h-[150vh] " >

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

            <div className="w-100 bg-slate-600 h-32">
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}