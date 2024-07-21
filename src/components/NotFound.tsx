import { Link } from "react-router-dom";

const NotFound = () => {
  return <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <p>Please check the URL and try again.</p>
    <Link to="/">Go back to the home page</Link>
  </div>;
};

export default NotFound;