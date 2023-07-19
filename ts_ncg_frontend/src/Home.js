import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to the homepage.</h2>
            <div className="nav-link">
                <Link to="/create">Create a new view</Link>
            </div>
            <div className="nav-link">
                <Link to="/view">View all saved view</Link>
            </div>
        </div>
    )
}

export default Home;
