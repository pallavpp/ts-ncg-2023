import {useParams, useHistory} from 'react-router-dom'

const Delete = () => {
    const {id} = useParams()
    const history = useHistory()

    const handleClick = () => {
        fetch("http://localhost:8000/view/"+id, {
            method: "DELETE"
        }).then(() => {
            console.log("view deleted")
            history.push("/view")
        })
    }

    return (
        <div className="del-confirm">
            <button onClick={handleClick}>Confirm?</button>
        </div>
    );
}

export default Delete;
