import React from "react";

export function NewsPage (){
    return(
        <>
        <div className="relative pt-[200px] flex justify-center w-full min-h-[400px] items-center border-[3px] bg-slate-600 border-red-700">
                <div className="max-w-[1200px] border-[3px] border-blue-600 absolute">
                    <div className="min-w-[400px]">
                        <img  src="/valorant-pic-03.jpg" alt="###" />
                    </div>
                    <h3 className="text-[40px] font-extrabold font-serif">
                       DAWN BREAKS // NEW AGENT TRAILER - VALORANT
                    </h3>
                    <p className="text-[20px] text-gray-600">
                        Unlock a new agent this season - Act II.
                    </p>
                </div>
        </div>

        <div className="w-full border-[3px] border-red-600 min-h-[400px] bg-slate-300">

        </div>
        </>
    )
};