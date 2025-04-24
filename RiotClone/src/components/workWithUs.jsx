import React from "react";
import TableWithFilter from "./tableWithFilter";

export function WorkWithUsPage (){
    return(
        <>
            {/* text section */}
            <div className="lg:pt-[100px] md:pt-[100px] pt-[100px] border flex flex-col justify-center items-center gap-3">
                <h2 className="font-bold text-[50px]">Work with us</h2>
                <div className="flex gap-2">
                <h3>Open Positions:</h3> <h3 className="font-bold">141</h3>
                </div>
            </div>
            {/* table section */}
            <div className="flex justify-center items-center  lg:w-full md:w-full w-full h-[500px] pt-[20px]">
            <TableWithFilter></TableWithFilter>
            </div>
            
            

        </>
    )
};