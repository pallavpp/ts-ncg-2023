import { useState } from "react";
import {useHistory, Link} from 'react-router-dom'
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [indicator, setIndicator] = useState("")
    const [chartType, setChartType] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [timestamp, setTimestamp] = useState("aaaaa")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        // const timestamp = Date.now();
        const view = {name, country, indicator, chartType, startDate, endDate, timestamp}

        setIsPending(true)

        fetch("http://localhost:8000/blogs", {
            method: "POST", 
            mode: "cors", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(view)
        }).then(() => {
            console.log("new view added")
            setIsPending(false)
            // history.go(-1)
            history.push("/view")
        })
    }

    return (
        <div className="create">
            <h2>Add a New View</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>Country:</label>
                    <input 
                        type="text" 
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>Indicator:</label>
                    <input 
                        type="text" 
                        required
                        value={indicator}
                        onChange={(e) => setIndicator(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>Chart Type:</label>
                    <input 
                        type="text" 
                        required
                        value={chartType}
                        onChange={(e) => setChartType(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>Start Date:</label>
                    <input 
                        type="text" 
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>End Date:</label>
                    <input 
                        type="text" 
                        required
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                {!isPending && <button onClick={handleSubmit}>Add View</button>}
                {isPending && <button disabled>Adding blog...</button>}
                {!isPending && <Link to="/">Cancel</Link>}
            </form>
        </div>
    );
}

export default Create;
