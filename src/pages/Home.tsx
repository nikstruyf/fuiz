import Background1 from '../pics/bg-3.jpg';

export default function Home() {
    return (
        <>
            <div className="container-fluid d-flex align-items-center" style={{backgroundImage: `url(${Background1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100%", height: "100vh"}}>
                <div className="text-center container-sm" style={{maxWidth: "500px", borderStyle: "solid", borderColor: "#6f168c", borderWidth: "5px", borderRadius: "15px", backgroundColor: "#f4e9f7"}}>
                    <div className="fs-2 mt-2" style={{fontFamily: "Bungee Shade", color: "#6d0091"}}>WELCOME TO FUIZ!</div>
                    <div className="btn">Quiz</div>
                    <div className="btn">Sort Pic</div>
                </div>
            </div>
        </>
    )
}