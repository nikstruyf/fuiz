import Button from '@mui/material/Button';

export default function ChoiceBox(props: any) {
    return (
        <Button 
            className="container-fluid border-3 rounded-pill my-2 py-0 fs-5" 
            color={props.isClick ? props.value ? "success" : "error" : "secondary"} 
            variant="outlined" 
            style={{fontFamily: "Concert One", backgroundColor: "white"}}
            onClick={props.onClick} 
        >
            {props.answer}
        </Button>
        
    )
}