import "./styles/update.css";
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <div className="comeSoon">
      <h2>This page has not been added yet</h2>
      <p>
        This page will be added within 1 week of the last update shown at the
        bottom
      </p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default Update;
