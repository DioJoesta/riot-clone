export function HomePage () {
    return (
        <>
        {/* section 1 */}
        {/**video */}
        <div>
            <div className=" overflow-hidden
            video
            min-w-[100px] 
            max-h-[750px]">
                <video className="h-full w-full"  autoPlay loop muted playsInline>
                    <source src="/rise-video.mp4" type="video/mp4"/>
                </video>
            </div>  
        </div>

        {/**section 2 */}
        <div className="flex items-center justify-center bg-slate-950 w-full lg:h-[800px] md:h-[1200px]">
            <div className="lg:w-[1350px]  md:w-[900px] w-[380px] bg-slate-950  text-white lg:h-[800px] md:h-[1200px]">

                {/* featured game picture with news */}

                <div className="w-full flex justify-center md:justify-start items-center mb-[60px] mt-[60px]">
                    <h2 className="lg:text-[48px] md:text-[50px] text-[31px] font-bold">What's happening?</h2>
                </div>
                {/* major flex starts here */}
            <div className="  lg:w-[1350px] lg:h-[600px] md:h-[900px] md:w-[900px] w-[380px]  lg:grid lg:grid-cols-2 lg:gap-[280px]">
                {/* left side starts here     */}
                <div>
               <a href="">
                    <div className="flex justify-center lg:w-[795px] lg:h-[400px] rounded-[10px] overflow-hidden">
                            <img className="lg:w-[849px]   rounded-[10px] 
                            transition-transform duration-300 ease-in-out transform hover:scale-110
                            " src="/background-01.jpg" alt="###" />
                    </div>
               </a>
                <div className="lg:w-[800px] lg:h-[100px] ">
                        <h3 className="mb-[16px] lg:text-[29px] md:text-[29px] text[16px] font-bold">Introducing Riftbound-The League of Legends <br/> Trading Card Game</h3>
                    <div className="flex md:mb-[30px] mb-[10px] gap-4">
                        <img className=" w-[25px] rounded-[10px]" src="/Riot-Icon.jpeg" alt="fist logo" />
                        <span className="font-bold "><p>NEWS</p></span>
                    </div>
                </div>
                </div>
                {/* left side ends here */}

                {/* right side starts here */}

                {/* what is happening cards */}
                <div className="lg:w-[530px] md:w-[899px] lg:flex lg:gap-5 md:pl-2 lg:flex-col md:grid md:grid-cols-2 md:gap-y-5 lg:h-[550px]">
                    {/* first card */}
                    <div className="flex lg:h-[120px] md:h-[120px] lg:w-[520px] md:w-[420px] rounded-[10px] lg:mb-0 bg-slate-800 lg:bg-orange-950 transition-transform duration-500 ease-in-out transform hover:scale-[1] hover:-translate-y-2 md:mb-0 mb-5">
                        {/* left side of the card */}
                        <div className="rounded-tl-[10px] rounded-bl-[10px] flex-col flex lg:gap-[15px] lg:w-[370px] md:w-[290px] lg:h-[150px] gap-[13px] h-[120px] w-[185px] p-[10px]">
                            <h3 className="leading-snug lg:text-[22px] text-[15.5px]">TFT Dev Drop:Cyber City<br/>|Dev Video-Teamfight... </h3>

                            <div className="flex gap-4 lg:pt-[0px] md:pt-[20px] items-center lg:w-[100px]  lg:h-[30px] ">
                            <img className=" lg:w-[25px] w-[20px] rounded-[10px]" src="/Riot-Icon.jpeg" alt="fist logo" />
                            <span className="font-bold lg:text-[20px] text-[10px]"><p>NEWS</p></span>
                            </div>
                        </div>
                        {/* right side of the card */}
                        <div className=" rounded-tr-[10px] rounded-br-[10px] lg:w-[302px] md:w-[302px] lg:h-[120px]">
                            <img className="lg:w-[302px] md:w-[302px] lg:h-[120px] rounded-tr-[10px] rounded-br-[10px] w-[200px] h-[120px]" src="/card-pic3.jpg" alt="card-pic" />
                        </div>
                    </div>

                    {/* second card */}
                    <div className="flex lg:h-[120px] md:h-[120px] lg:w-[520px] md:w-[420px] rounded-[10px] lg:mb-0 bg-slate-800 lg:bg-orange-950 transition-transform duration-500 ease-in-out transform hover:scale-[1] hover:-translate-y-2 md:mb-0 mb-5">
                        {/* left side of the card */}
                        <div className="rounded-tl-[10px] rounded-bl-[10px] flex-col flex lg:gap-[15px] lg:w-[370px] md:w-[290px] lg:h-[150px] gap-[13px] h-[120px] w-[185px] p-[10px]">
                            <h3 className="leading-snug lg:text-[22px] text-[15.5px]">TFT Dev Drop:Cyber City<br/>|Dev Video-Teamfight... </h3>

                            <div className="flex gap-4 lg:pt-[0px] md:pt-[20px] items-center lg:w-[100px]  lg:h-[30px] ">
                            <img className=" lg:w-[25px] w-[20px] rounded-[10px]" src="/Riot-Icon.jpeg" alt="fist logo" />
                            <span className="font-bold lg:text-[20px] text-[10px]"><p>NEWS</p></span>
                            </div>
                        </div>
                        {/* right side of the card */}
                        <div className=" rounded-tr-[10px] rounded-br-[10px] lg:w-[302px] md:w-[302px] lg:h-[120px]">
                            <img className="lg:w-[302px] md:w-[302px] lg:h-[120px] rounded-tr-[10px] rounded-br-[10px] w-[200px] h-[120px]" src="/card-pic1.jpg" alt="card-pic" />
                        </div>
                    </div>

                    {/* third card */}
                    <div className="flex lg:h-[120px] md:h-[120px] lg:w-[520px] md:w-[420px] rounded-[10px] lg:mb-0 bg-slate-800 lg:bg-orange-950 transition-transform duration-500 ease-in-out transform hover:scale-[1] hover:-translate-y-2 md:mb-0 mb-5">
                        {/* left side of the card */}
                        <div className="rounded-tl-[10px] rounded-bl-[10px] flex-col flex lg:gap-[15px] lg:w-[370px] md:w-[290px] lg:h-[150px] gap-[13px] h-[120px] w-[185px] p-[10px]">
                            <h3 className="leading-snug lg:text-[22px] text-[15.5px]">TFT Dev Drop:Cyber City<br/>|Dev Video-Teamfight... </h3>

                            <div className="flex gap-4 lg:pt-[0px] md:pt-[20px] items-center lg:w-[100px]  lg:h-[30px] ">
                            <img className=" lg:w-[25px] w-[20px] rounded-[10px]" src="/Riot-Icon.jpeg" alt="fist logo" />
                            <span className="font-bold lg:text-[20px] text-[10px]"><p>NEWS</p></span>
                            </div>
                        </div>
                        {/* right side of the card */}
                        <div className=" rounded-tr-[10px] rounded-br-[10px] lg:w-[302px] md:w-[302px] lg:h-[120px]">
                            <img className="lg:w-[302px] md:w-[302px] lg:h-[120px] rounded-tr-[10px] rounded-br-[10px] w-[200px] h-[120px]" src="/card-pic2.jpg" alt="card-pic" />
                        </div>
                    </div>

                    {/* fourth card */}
                    <div className="flex lg:h-[120px] md:h-[120px] lg:w-[520px] md:w-[420px] rounded-[10px] lg:mb-0 bg-slate-800 lg:bg-orange-950 transition-transform duration-500 ease-in-out transform hover:scale-[1] hover:-translate-y-2 md:mb-0 mb-5">
                        {/* left side of the card */}
                        <div className="rounded-tl-[10px] rounded-bl-[10px] flex-col flex lg:gap-[15px] lg:w-[370px] md:w-[290px] lg:h-[150px] gap-[13px] h-[120px] w-[185px] p-[10px]">
                            <h3 className="leading-snug lg:text-[22px] text-[15.5px]">TFT Dev Drop:Cyber City<br/>|Dev Video-Teamfight... </h3>

                            <div className="flex gap-4 lg:pt-[0px] md:pt-[20px] items-center lg:w-[100px]  lg:h-[30px] ">
                            <img className=" lg:w-[25px] w-[20px] rounded-[10px]" src="/Riot-Icon.jpeg" alt="fist logo" />
                            <span className="font-bold lg:text-[20px] text-[10px]"><p>NEWS</p></span>
                            </div>
                        </div>
                        {/* right side of the card */}
                        <div className=" rounded-tr-[10px] rounded-br-[10px] lg:w-[302px] md:w-[302px] lg:h-[120px]">
                            <img className="lg:w-[302px] md:w-[302px] lg:h-[120px] rounded-tr-[10px] rounded-br-[10px] w-[200px] h-[120px]" src="/card-pic4.jpg" alt="card-pic" />
                        </div>
                    </div>

                </div>    
            </div> {/*major flex div endline*/}
                {/* card ends here */}
                {/* right side ends here */}

            </div>
        </div>
        
        {/* section 3 */}
        {/* background div */}
        <div className="flex  justify-center bg-slate-900 text-white lg:w-full lg:h-[1200px] md:h-[850px] h-[1360px]">
            {/* container div */}
            <div className="lg:w-[1350px] md:w-[855px] lg:h-[1205px] md:h-[905px] h-[1355px]">
                <h2 className="lg:text-[48px] flex lg:justify-start md:justify-start justify-center md:text-[48px] text-[31px] lg:pb-[40px] md:pb-[40px] lg:pt-[20px] md:pt-[40px] pt-[40px] pb-[40px]">Games</h2>

                {/* cards div */}
                <div className="lg:w-[1350px] lg:h-[1010px] md:h-[700px] h-[1200px] lg:flex md:flex lg:flex-wrap md:flex-wrap lg:gap-x-[20px] md:gap-x-[20px] lg:gap-y-0  place-items-center justify-center">
                    {/* first card */}
                    <div className="bg-[url('/games-image1.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>
                    {/* second card */}
                    <div className="bg-[url('/games-image2.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>
                    {/* third card */}
                    <div className="bg-[url('/games-image3.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>
                    {/* fourth card */}
                    <div className="bg-[url('/games-image4.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>
                    {/* fifth card */}
                    <div className="bg-[url('/games-image5.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* section 4 */}
        {/* background div */}
        <div className="flex  justify-center bg-slate-900 text-white lg:w-full lg:h-[550px] md:h-[450px] h-[630px]">
            {/* container div */}
            <div className="lg:w-[1350px] md:w-[855px] lg:h-[605px] md:h-[505px] h-[655px]">
                <h2 className="lg:text-[48px] flex lg:justify-start md:justify-start justify-center md:text-[48px] text-[31px] lg:pb-[40px] md:pb-[40px] lg:pt-[20px] md:pt-[40px] pt-[40px] pb-[40px]">Esports</h2>

                {/* cards div */}
                
                <div className="lg:w-[1350px] lg:h-[410px] md:h-[300px] h-[480px] lg:flex md:flex lg:flex-wrap md:flex-wrap lg:gap-x-[20px] md:gap-x-[20px] lg:gap-y-0  place-items-center justify-center">
                    {/* first card */}
                    <div className="bg-[url('/lol-esports-card1.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>
                    
                    {/* second card */}
                    <div className="bg-[url('/lol-esports-card2.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* section 5 */}
        {/* background div */}
        <div className="flex  justify-center bg-slate-900 text-white lg:w-full lg:h-[650px] md:h-[550px] h-[660px]">
            {/* container div */}
            <div className="lg:w-[1350px] md:w-[855px] lg:h-[605px] md:h-[505px] h-[655px]">
                <h2 className="lg:text-[48px] flex lg:justify-start md:justify-start justify-center md:text-[48px] text-[31px] lg:pb-[40px] md:pb-[40px] lg:pt-[20px] md:pt-[40px] pt-[40px] pb-[40px]">Entertainment</h2>

                {/* cards div */}
                
                <div className="lg:w-[1350px] lg:h-[410px] md:h-[300px] h-[480px] lg:flex md:flex lg:flex-wrap md:flex-wrap lg:gap-x-[20px] md:gap-x-[20px] lg:gap-y-0  place-items-center justify-center">
                    {/* first card */}
                    <div className="bg-[url('/entertainment-card1.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>
                    
                    {/* second card */}
                    <div className="bg-[url('/entertainment-card2.png')] bg-cover bg-center lg:w-[650px] md:w-[400px] w-[390px] lg:h-[300px] md:h-[200px] h-[200px] lg:mb-0 md:mb-0 mb-10 rounded-[10px] hover:ring-2 ring-slate-300">
                        <div className="lg:w-[200px] lg:h-[300px] md:w-[150px] w-[130px] md:h-[50px] h-[200px] lg:pl-0 md:pl-0 md:pt-0 lg:pt-0 pt-20 pl-5 ">
                            <img className="lg:mt-24 md:mt-20  lg:ml-10 md:ml-5 lg:w-[150px] md:w-[100px] w-[100px]" src="/League_of_Legends_2019_vector.svg" alt="LOL" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

            {/* section 6 */}
            {/* container div */}
            <div className="lg:w-full md:w-full lg:h-[500px] md:h-[500px] flex flex-col lg:flex-row md:flex-row ">
                {/* left side */}
                <div className="bg-white lg:w-[850px] md:w-[510px] w-[469px] lg:h-[500px] md:h-[500px] h-[500px] lg:[clip-path:polygon(0_0,_100%_0,_90%_100%,_0_100%)] md:[clip-path:polygon(0_0,_100%_0,_90%_100%,_0_100%)]" >

                    {/* leftside content */}
                    <div className=" lg:w-[683px] md:w-[387px] lg:h-[500px] md:h-[500px] h-[500px] flex lg:flex-col md:flex-col flex-col lg:justify-center md:justify-center justify-center lg:items-center md:items-center items-center gap-5 md:pl-7">
                        <h2 className="lg:text-[48px] md:text-[48px] text-[28px] font-bold flex justify-center items-center">We're hiring!</h2>
                        <p className="lg:text-[20px] md:text-[20px] text-[20px] lg:w-[400px] md:w-[400px] w-[300px] text-slate-400 flex justify-center items-center">Team up with Riot to forge your path and craft unforgettable experiences for players</p>
                        {/* work links */}
                        <div className="flex gap-[20px] translate-x-[-25px] lg:translate-x-0 md:translate-x-0 lg:justify-center md:justify-center justify-center lg:items-center md:items-center items-center ">
                            {/* left */}
                            <a href="" className="rounded-[10px] text-slate-400 lg:w-[180px] md:w-[180px] w-[180px] lg:h-[180px] md:h-[180px] h-[180px] text-[26px] flex flex-col justify-center items-center text-center bg-slate-200 p-3"><span className="text-black lg:text-[56px] md:text-[56px] text-[56px]">136</span> open positions</a>
                            {/* right */}
                            <a href="" className="pb-[43px] rounded-[10px] text-slate-400 lg:w-[180px] md:w-[180px] w-[180px] lg:h-[180px] md:h-[180px] h-[180px] text-[26px] flex flex-col bg-slate-200  justify-center items-center"><span className="text-black lg:text-[56px] md:text-[56px] text-[56px]">25</span> offices</a>
                        </div>
                        <a href="/work-with-us"><button className="bg-red-500 rounded-[10px] text-white lg:w-[200px] md:w-[200px] w-[200px] lg:h-[50px] md:h-[50px] h-[50px] text-[20px]">Explore Careers</button></a>
                    </div>
                </div>

                {/* right side */}
                <div className="bg-[url('/hiring-pic.jpg')] bg-cover lg:bg-[position:calc(100%_+_0px)_center] bg-[position:calc(100%_+_140px)_center] lg:w-[850px] md:w-[610px] w-[469px] lg:h-[500px] md:h-[500px] h-[350px] -ml-[10%]  lg:[clip-path:polygon(0_100%,_100%_100%,_100%_0,_10%_0)] md:[clip-path:polygon(0_100%,_100%_100%,_100%_0,_10%_0)]" ></div>

            </div>
        </>
    )
}