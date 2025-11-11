import { useParams } from "react-router-dom";
const FilmDetails: React.FC = () => {
 const  { FilmId } = useParams();
 return (

    <div>
        <h1>FilmDetails FilmId: {FilmId}</h1>
    </div>
 );
}


export default FilmDetails;