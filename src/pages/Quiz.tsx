import Background1 from '../pics/bg-3.jpg';
import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';

export default function Quiz() {

    const navigate = useNavigate();

    return (
        <>
            <div style={{ backgroundImage: `url(${Background1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100%", height: "100vh" }}>
                <HomeIcon sx={{ fontSize: 40 }} color="secondary" onClick={() => navigate('/')} style={{ cursor: "pointer" }} />
                <div className="container-fluid d-flex align-items-center" style={{ height: "90vh" }}>
                    <div className="text-center container-sm" style={{maxWidth: "500px", borderStyle: "solid", borderColor: "#6f168c", borderWidth: "5px", borderRadius: "15px", backgroundColor: "#f4e9f7"}}>
                        <div className="fs-2 my-2" style={{fontFamily: "Bungee Shade", color: "#6d0091"}}>Quiz Game</div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}