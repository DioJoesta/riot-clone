import React from "react";
import TableWithFilter from "./tableWithFilter";

export function WorkWithUsPage (){
    return(
        <div>
            
            <div className="pt-[100px] border flex flex-col justify-center items-center gap-3">
                <h2 className="font-bold text-[50px]">Work with us</h2>
                <div className="flex gap-2">
                <h3>Open Positions:</h3> <h3 className="font-bold">141</h3>
                </div>
            </div>
            <div className="w-full h-[50px] pt-[20px]">
            <TableWithFilter></TableWithFilter>
            </div>
            
            

        </div>
    )
};