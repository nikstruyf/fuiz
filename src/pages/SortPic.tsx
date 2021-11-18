import { useState } from "react"
import Background1 from '../pics/bg-3.jpg';
import Button from '@mui/material/Button';
import SortPicLine from '../components/SortPicLine'
import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';

import buffalo from '../pics/sort-pic/buffalo.png';
import frog from '../pics/sort-pic/frog.png';
import hamster from '../pics/sort-pic/hamster.png';
import horse from '../pics/sort-pic/horse.png';
import koala from '../pics/sort-pic/koala.png';
import llama from '../pics/sort-pic/llama.png';
import panther from '../pics/sort-pic/panther.png';
import penguin from '../pics/sort-pic/penguin.png';
import sheep from '../pics/sort-pic/sheep.png';
import wolf from '../pics/sort-pic/wolf.png';

export default function SortPic() {

    const navigate = useNavigate();

    const [round, setRound] = useState(1)
    const [remain, setRemain] = useState(8)
    const [n, setN] = useState(1)

    const [isStart, setIsStart] = useState<boolean>(false)
    const [isWin, setIsWin] = useState<boolean>(false)

    const [ans, setAns] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1])

    function randomNum() {
        return Math.floor(Math.random() * 10);
    }

    const [bestAns, setBestAns] = useState([randomNum(), randomNum(), randomNum(), randomNum()])

    const [showRes, setShowRes] = useState([false, false, false, false, false, false, false, false])

    const [Picture, setPicture] = useState([0, 0, 0, 0, 0, 0, 0, 0])
    const [Position, setPosition] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    function checkAns(a: any, b: any, c: any, d: any, z: any) {
        let pic = 0;
        let pos = 0;

        let P = [true, true, true, true];

        if (a === bestAns[0] && b === bestAns[1] && c === bestAns[2] && d === bestAns[3]) {
            setIsWin(true);
        }
        // check position
        if (a === bestAns[0]) {
            pos += 1;
        }
        if (b === bestAns[1]) {
            pos += 1;
        }
        if (c === bestAns[2]) {
            pos += 1;
        }
        if (d === bestAns[3]) {
            pos += 1;
        }
        Position[round - 1] = pos;
        // check pic
        for (let i = 0; i < 4; i++) {
            if (P[i] && (a === bestAns[i])) {
                P[i] = false;
                pic += 1;
                break;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (P[i] && (b === bestAns[i])) {
                P[i] = false;
                pic += 1;
                break;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (P[i] && (c === bestAns[i])) {
                P[i] = false;
                pic += 1;
                break;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (P[i] && (d === bestAns[i])) {
                P[i] = false;
                pic += 1;
                break;
            }
        }
        Picture[round - 1] = pic;
    }

    function setAnswer(a: any) {

        ans[((round - 1) * 4) + n - 1] = a;
        if (n === 4) {
            checkAns(ans[((round - 1) * 4) + n - 4], ans[((round - 1) * 4) + n - 3], ans[((round - 1) * 4) + n - 2], ans[((round - 1) * 4) + n - 1], round);
            showRes[round - 1] = true;
        }

        setN(n + 1)
        if (n >= 4) {
            setN(1);
            setRound(round + 1);
            setRemain(remain - 1);
        }
    }

    function Again() {
        setIsWin(false);
        setRound(1);
        setRemain(8);
        setN(1);
        setBestAns([randomNum(), randomNum(), randomNum(), randomNum()]);
        setAns([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
        setPosition([0, 0, 0, 0, 0, 0, 0, 0]);
        setPicture([0, 0, 0, 0, 0, 0, 0, 0]);
        setShowRes([false, false, false, false, false, false, false, false]);
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${Background1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100%", height: "100vh" }}>
                <HomeIcon sx={{ fontSize: 40 }} color="secondary" onClick={() => navigate('/')} style={{ cursor: "pointer" }} className="mt-1 ms-1"/>
                <div className="container-fluid d-flex align-items-center" style={{ height: "90vh" }}>
                    <div className="text-center container-sm" style={{ maxWidth: "500px", borderStyle: "solid", borderColor: "#6f168c", borderWidth: "5px", borderRadius: "15px", backgroundColor: "#f4e9f7" }}>
                        <div className="fs-2 my-2 mb-3" style={{ fontFamily: "Bungee Shade", color: "#6d0091" }}>Sort Pic Game</div>
                        {isStart ? (
                            <div>
                                <div className="flex flex-col my-4">
                                    <div className="row d-">
                                        <SortPicLine ans1={ans[0]} ans2={ans[1]} ans3={ans[2]} ans4={ans[3]} pic={Picture[0]} pos={Position[0]} show={showRes[0]} />
                                    </div>
                                    <div className="row">
                                        <SortPicLine ans1={ans[4]} ans2={ans[5]} ans3={ans[6]} ans4={ans[7]} pic={Picture[1]} pos={Position[1]} show={showRes[1]} />
                                    </div>
                                    <div className="row">
                                        <SortPicLine ans1={ans[8]} ans2={ans[9]} ans3={ans[10]} ans4={ans[11]} pic={Picture[2]} pos={Position[2]} show={showRes[2]} />
                                    </div>
                                    <div className="row">
                                        <SortPicLine ans1={ans[12]} ans2={ans[13]} ans3={ans[14]} ans4={ans[15]} pic={Picture[3]} pos={Position[3]} show={showRes[3]} />
                                    </div>
                                    <div className="row">
                                        <SortPicLine ans1={ans[16]} ans2={ans[17]} ans3={ans[18]} ans4={ans[19]} pic={Picture[4]} pos={Position[4]} show={showRes[4]} />
                                    </div>
                                    <div className="row">
                                        <SortPicLine ans1={ans[20]} ans2={ans[21]} ans3={ans[22]} ans4={ans[23]} pic={Picture[5]} pos={Position[5]} show={showRes[5]} />
                                    </div>
                                    <div className="row">
                                        <SortPicLine ans1={ans[24]} ans2={ans[25]} ans3={ans[26]} ans4={ans[27]} pic={Picture[6]} pos={Position[6]} show={showRes[6]} />
                                    </div>
                                    <div className="row">
                                        <SortPicLine ans1={ans[28]} ans2={ans[29]} ans3={ans[30]} ans4={ans[31]} pic={Picture[7]} pos={Position[7]} show={showRes[7]} />
                                    </div>
                                </div>
                                {isWin ? (
                                    <div>
                                        <div className="mb-3 mx-0">
                                            <div className="mb-2 fs-4" style={{fontFamily: "Concert One", color: "#651880"}}>You Got it!</div>
                                            <div className="my-2 mb-3 border border-2 border-success rounded-pill">
                                                <SortPicLine ans1={bestAns[0]} ans2={bestAns[1]} ans3={bestAns[2]} ans4={bestAns[3]} />
                                            </div>
                                            <Button color="secondary" variant="outlined" onClick={() => { Again() }}>Play Again</Button>
                                        </div>

                                    </div>
                                ) : !isWin && remain === 0 ? (
                                    <div>
                                        <div className="mb-3 mx-0">
                                            <div className="fs-4" style={{fontFamily: "Concert One", color: "#651880"}}>You lose!</div>
                                            <div className="my-2 mb-3 border border-2 border-danger rounded-pill">
                                                <SortPicLine ans1={bestAns[0]} ans2={bestAns[1]} ans3={bestAns[2]} ans4={bestAns[3]} />
                                            </div>
                                            <Button color="secondary" variant="outlined" onClick={() => { Again() }}>Play Again</Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="mb-3 mx-0 fs-5" style={{fontFamily: "Concert One", color: "#651880"}}>
                                            {remain} Rounds remaining
                                        </div>
                                        <div className="mb-3 mx-0">
                                            <div className="row d-flex justify-content-center">
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(0) }}><img src={buffalo} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(1) }}><img src={frog} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(2) }}><img src={hamster} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(3) }}><img src={horse} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(4) }}><img src={koala} alt="" style={{ width: "30px" }} /></Button>
                                            </div>
                                            <div className="row d-flex justify-content-center">
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(5) }}><img src={llama} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(6) }}><img src={panther} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(7) }}><img src={penguin} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(8) }}><img src={sheep} alt="" style={{ width: "30px" }} /></Button>
                                                <Button color="secondary" className="col-auto" onClick={() => { setAnswer(9) }}><img src={wolf} alt="" style={{ width: "30px" }} /></Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
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