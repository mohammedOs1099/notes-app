import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../reduxState/authSlice";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header ">
      <h1 className=" text-success  ">Notes APP</h1>
      <ul className="nav  bg-success">
        <li>
          <NavLink className={"nav-link"} to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-link"} to="/notes/add">
            Add Note
          </NavLink>
        </li>
        <li className="login">
          {" "}
          <button
            onClick={() => {
              dispatch(logIn());
            }}
            className=" btn btn-outline-light"
          >
            login
          </button>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
