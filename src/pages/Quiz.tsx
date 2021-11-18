import Background1 from '../pics/bg-3.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import Button from '@mui/material/Button';

import HomeIcon from '@mui/icons-material/Home';

import ChoiceBox from '../components/ChoiceBox';
import { findAllByDisplayValue } from '@testing-library/dom';

export default function Quiz() {

    const ex = [[], ["Orange is ?", ["fruit", false], ["color", false], ["all is not correct", false], ["more than 2 is correct", true]], ["what is ...?", ["a", false], ["b", false], ["c", false], ["d", true]], ["what is ...?", ["a", false], ["b", false], ["c", false], ["d", true]], ["what is ...?", ["a", false], ["b", false], ["c", false], ["d", true]]]

    const navigate = useNavigate();

    const [isStart, setIsStart] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)
    
    const [article, setArticle] = useState(1);
    const [point, setPoint] = useState(0);

    function SubmitAnswer(ans: any) {
        if (!isClick) {
            setIsClick(true);
            if (ex[article][ans][1]) {
                setPoint(point+1);
            }
            else {
                alert("โง่");
            }
        }
    }

    function NextArticle() {
        setIsClick(false);
        setArticle(article+1);
    }

    function Retry() {
        setIsClick(false);
        setArticle(1);
        setPoint(0);
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${Background1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100%", height: "100vh" }}>
                <HomeIcon 
                    sx={{ fontSize: 40 }} 
                    color="secondary" 
                    onClick={() => navigate('/')} 
                    style={{ cursor: "pointer" }} 
                    className="mt-1 ms-1"
                />
                <div className="container-fluid d-flex align-items-center" style={{ height: "90vh" }}>
                    <div 
                        className="text-center container-sm py-2" 
                        style={{
                            maxWidth: "500px", 
                            borderStyle: "solid", 
                            borderColor: "#6f168c", 
                            borderWidth: "5px", 
                            borderRadius: "15px", 
                            backgroundColor: "#f4e9f7"}}
                    >
                        <div className="fs-2 mb-4" style={{fontFamily: "Bungee Shade", color: "#6d0091"}}>Quiz Game</div>
                        {isStart ? (
                            <div>
                                <div className="d-flex justify-content-between">
                                    <div className="fs-5" style={{fontFamily: "Concert One", color: "#651880"}}>
                                        Article {article} :
                                    </div>
                                    <div 
                                        className="text-center"
                                        style={{
                                            borderStyle: "solid",
                                            borderColor: "#6f168c",
                                            borderWidth: "3px",
                                            borderRadius: "10px"
                                        }}
                                    >
                                        <div className="p-1" style={{fontFamily: "Concert One"}}>
                                            {point} / 4
                                        </div>
                                    </div>
                                </div>
                                <div className="fs-3 mb-3" style={{fontFamily: "Concert One", color: "#651880"}}>
                                    {ex[article][0]}
                                </div>
                                <ChoiceBox 
                                    answer={ex[article][1][0]}
                                    value={ex[article][1][1]}
                                    onClick={() => {SubmitAnswer(1)}} 
                                    isClick={isClick}
                                />
                                <ChoiceBox 
                                    answer={ex[article][2][0]}
                                    value={ex[article][2][1]}
                                    onClick={() => {SubmitAnswer(2)}} 
                                    isClick={isClick}
                                />
                                <ChoiceBox 
                                    answer={ex[article][3][0]}
                                    value={ex[article][3][1]}
                                    onClick={() => {SubmitAnswer(3)}} 
                                    isClick={isClick}
                                />
                                <ChoiceBox 
                                    answer={ex[article][4][0]}
                                    value={ex[article][4][1]}
                                    onClick={() => {SubmitAnswer(4)}} 
                                    isClick={isClick}
                                />
                                {isClick && article < 4 ? 
                                    <Button className="mb-2 mt-3" color="secondary" variant="outlined" onClick={() => { NextArticle() }}>Next</Button> 
                                    : isClick && article === 4 ? <Button className="mb-2 mt-3" color="secondary" variant="outlined" onClick={() => { Retry() }}>Retry</Button> 
                                : <div className="mb-2"></div>}
                            </div>
                        ) : (
                            <div className="mb-2">
                                <Button color="secondary" variant="contained" onClick={() => { setIsStart(true) }}>START</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}