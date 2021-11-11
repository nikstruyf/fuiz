// import { useState , useEffect } from "react"
import CropSquareIcon from '@mui/icons-material/CropSquare';

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

export default function SortPicLine(props: any) {

    let one = "";
    let two = "";
    let three = "";
    let four = "";

    // one
    if (props.ans1 === 0) {
        one = buffalo;
    }
    if (props.ans1 === 1) {
        one = frog;
    }
    if (props.ans1 === 2) {
        one = hamster;
    }
    if (props.ans1 === 3) {
        one = horse;
    }
    if (props.ans1 === 4) {
        one = koala;
    }
    if (props.ans1 === 5) {
        one = llama;
    }
    if (props.ans1 === 6) {
        one = panther;
    }
    if (props.ans1 === 7) {
        one = penguin;
    }
    if (props.ans1 === 8) {
        one = sheep;
    }
    if (props.ans1 === 9) {
        one = wolf;
    }
    // two
    if (props.ans2 === 0) {
        two = buffalo;
    }
    if (props.ans2 === 1) {
        two = frog;
    }
    if (props.ans2 === 2) {
        two = hamster;
    }
    if (props.ans2 === 3) {
        two = horse;
    }
    if (props.ans2 === 4) {
        two = koala;
    }
    if (props.ans2 === 5) {
        two = llama;
    }
    if (props.ans2 === 6) {
        two = panther;
    }
    if (props.ans2 === 7) {
        two = penguin;
    }
    if (props.ans2 === 8) {
        two = sheep;
    }
    if (props.ans2 === 9) {
        two = wolf;
    }
    // three
    if (props.ans3 === 0) {
        three = buffalo;
    }
    if (props.ans3 === 1) {
        three = frog;
    }
    if (props.ans3 === 2) {
        three = hamster;
    }
    if (props.ans3 === 3) {
        three = horse;
    }
    if (props.ans3 === 4) {
        three = koala;
    }
    if (props.ans3 === 5) {
        three = llama;
    }
    if (props.ans3 === 6) {
        three = panther;
    }
    if (props.ans3 === 7) {
        three = penguin;
    }
    if (props.ans3 === 8) {
        three = sheep;
    }
    if (props.ans3 === 9) {
        three = wolf;
    }
    // four
    if (props.ans4 === 0) {
        four = buffalo;
    }
    if (props.ans4 === 1) {
        four = frog;
    }
    if (props.ans4 === 2) {
        four = hamster;
    }
    if (props.ans4 === 3) {
        four = horse;
    }
    if (props.ans4 === 4) {
        four = koala;
    }
    if (props.ans4 === 5) {
        four = llama;
    }
    if (props.ans4 === 6) {
        four = panther;
    }
    if (props.ans4 === 7) {
        four = penguin;
    }
    if (props.ans4 === 8) {
        four = sheep;
    }
    if (props.ans4 === 9) {
        four = wolf;
    }

    return(
        <>
            <div className="d-flex flex-row row align-items-center justify-content-center" style={{height: "50px"}}>
                <div className="d-flex flex-column col-1 pt-2">
                    {one === "" ? <CropSquareIcon color="secondary" fontSize="large" /> : <div className="pb-4 ps-1"><img src={one} alt="" style={{position: "absolute", width: "25px"}}/></div>}
                </div>
                <div className="d-flex flex-column col-1 pt-2">
                    {two === "" ? <CropSquareIcon color="secondary" fontSize="large" /> : <div className="pb-4 ps-1"><img src={two} alt="" style={{position: "absolute", width: "25px"}}/></div>}
                </div>
                <div className="d-flex flex-column col-1 pt-2">
                    {three === "" ? <CropSquareIcon color="secondary" fontSize="large" /> : <div className="pb-4 ps-1"><img src={three} alt="" style={{position: "absolute", width: "25px"}}/></div>}
                </div>
                <div className="d-flex flex-column col-1 pt-2">
                    {four === "" ? <CropSquareIcon color="secondary" fontSize="large" /> : <div className="pb-4 ps-1"><img src={four} alt="" style={{position: "absolute", width: "25px"}}/></div>}
                </div>
                {props.show && (<div className="d-flex flex-column col-auto ps-3 " style={{fontFamily: "Concert One", color: "#651880"}}>{props.pic} Picture {props.pos} Position correct</div>)}
            </div>
        </>
    )
}