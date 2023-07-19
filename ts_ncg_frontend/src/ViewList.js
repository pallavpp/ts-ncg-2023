import {useHistory, Link} from 'react-router-dom'
import useFetch from "./useFetch";

const ViewList = () => {
    const {data: views, isPending, error} = useFetch("http://localhost:8000/view")
    const history = useHistory()

    const handleClick = (delId) => {
        fetch("http://localhost:8000/view/"+delId, {
            method: "DELETE"
        }).then(() => {
            console.log("view deleted")
            history.push("/view")
        })
    }

    return (
        <div className="view-list">
            <h2>Saved Views</h2>
            {!isPending && views.map((view) => (
                <div className="view-preview" key = {view.id}>
                    <Link to={`/view/${view.id}`}>
                        <span>{view.name}</span>
                        <span></span>
                        <span>{view.country}</span>
                        <span></span>
                        <span>{view.indicator}</span>
                        <span></span>
                        <span>{view.chartType}</span>
                        <span></span>
                        <span>{view.startDate}</span>
                        <span></span>
                        <span>{view.endDate}</span>
                        <span></span>
                        <span>{view.timestamp}</span>
                        <span></span>
                        <span><Link to={`/del/${view.id}`}>Delete</Link></span>
                    </Link>
                </div>
            ))}
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
        </div>
    );
}

export default ViewList;
