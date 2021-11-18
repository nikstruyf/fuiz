import React from 'react';
import {useNavigate} from 'react-router-dom';
import Background1 from '../pics/bg-3.jpg';
import QuizWall from '../pics/quizwall2.png';
import SortPicWall from '../pics/sortwall.png';

export default function Home() {

    const navigate = useNavigate();

    return (
        <>
            <div className="container-fluid d-flex align-items-center" style={{backgroundImage: `url(${Background1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100%", height: "100vh"}}>
                <div className="text-center container-sm" style={{maxWidth: "500px", borderStyle: "solid", borderColor: "#6f168c", borderWidth: "5px", borderRadius: "15px", backgroundColor: "#f4e9f7"}}>
                    <div className="fs-2 my-2" style={{fontFamily: "Bungee Shade", color: "#6d0091"}}>WELCOME TO FUIZ!</div>
                    <div className="fs-4 mt-2" style={{fontFamily: "Fugaz One", color: "#7d219c"}}>Let's Enjoy</div>
                    <div className="fs-4 mb-3" style={{fontFamily: "Fugaz One", color: "#7d219c"}}>select mini game that you prefer</div>
                    <div className="flex flex-col divide-y-4 rounded divide-purple-800 divide-dashed my-2">
                        <div className="mt-2">
                            <div className="rounded-t-lg overflow-hidden w-full hover:bg-purple-200" style={{cursor: "pointer"}} onClick={() => navigate('/quiz')}>
                                <img src={QuizWall} alt="Quiz" className="h-28 w-44 float-left " />
                                <div className="p-2">
                                    <div className="fs-5 font-semibold" style={{fontFamily: "Concert One", color: "#651880"}}>Quiz</div>
                                    <div style={{fontFamily: "Concert One", color: "#651880"}}>Mini game about question with four choices answer</div>
                                </div>
                            </div>
                        </div>
                        <div className="my-1">
                            <div className="mt-1 rounded-b-lg overflow-hidden w-full hover:bg-purple-200" style={{cursor: "pointer"}} onClick={() => navigate('/sortpic')}>
                                <img src={SortPicWall} alt="Quiz" className="h-28 w-44 float-right " />
                                <div className="p-2">
                                    <div className="fs-5 font-semibold " style={{fontFamily: "Concert One", color: "#651880"}}>Sort Pic</div>
                                    <div style={{fontFamily: "Concert One", color: "#651880"}}>Mini game about sort pictures</div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}