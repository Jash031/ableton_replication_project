import React from "react";
import * as Unicons from '@iconscout/react-unicons';
import './Header.css';
export default function Header(){
    return(
        <>
            <header className="">
            <div className="grid grid-cols-2 p-7 text-xl border-b-2 border-[#eee] ">
                <div>
                        <ul className="flex flex-row justify-evenly text-lg font-semibold gap-8">
                            <li className="flex flex-row"> <svg role="img" aria-label="Logo Ableton" class="main-nav__logo__image" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="45" height="30" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg></li>
                            <li>Live</li>
                            <li>Push</li>
                            <li>Move</li>
                            <li>Note</li>
                            <li>Link</li>
                            <li>Shop</li>
                            <li>Packs</li>
                            <li>Help</li>
                            <li className="text-[#ff764d]">More +</li>
                        </ul>
                </div>
                <div className="">
                    <ul className="flex flex-row float-end">
                        <li className="mr-5 text-[#0000ff]">
                            Try Live 12 for free
                        </li>
                        <li className="text-base font-semibold my-1">Log in or register</li>
                    </ul>
                </div>
            </div>
            <div className="p-5">
                <ul className="flex flex-row font-semibold gap-5 justify-start px-2 ">
                    <li className="text-[#ff764d]">About</li>
                    <li>Jobs</li>
                    <li>Apprenticeships</li>
                </ul>
            </div>
            </header>
        </>
    )
}