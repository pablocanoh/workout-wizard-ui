import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const TmpPortal = () => {
    const navigate = useNavigate();

    return <div>
        <Button onClick={() => navigate("/configure-routine")}>
            Routine configuration
        </Button>
        <Button onClick={() => navigate("/workout-tracker")}>
            Workout tracker     
        </Button>
    </div>;
}
export default TmpPortal;