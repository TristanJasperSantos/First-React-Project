import React from "react";
import image from "../images/bgimage.png"

const navBar = ()=> {
    return(
        <nav className=" flex flex-col justify-center overflow-hidden">
            <img className="" src={image} alt="image of a woman" />
            <div className=" flex justify-center flex-col items-center py-2 text-white bg-zinc-800">
                <h1 className=" text-2xl font-bold">Laura Smith</h1>
                <h5 className=" text-orange-300"> Front End Developer</h5>
                <a className=" my-2" href="#">laurasmith.website</a>
                <div className=" my-2 w-full gap-10 flex justify-center sm:flex sm:gap-4">
                    <button className=" bg-white text-black rounded-md py-2 px-2 w-32 hover:bg-slate-300">Email</button> 
                    <button className=" bg-blue-500 rounded-md py-2 px-2 w-32 hover:bg-blue-700">LinkedIn</button>
                </div>
            </div>
        </nav>
    )
}

export default navBar;