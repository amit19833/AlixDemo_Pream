import { useParams } from "react-router-dom";
const PickSeats: React.FC = () => {
 const  { ShowingId } = useParams();
 return (

    <div>
        <h1>Pick Your Seat with ShowingID: {ShowingId}</h1>
    </div>
 );
}


export default PickSeats;