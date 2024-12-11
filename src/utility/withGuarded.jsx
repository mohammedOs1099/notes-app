import { useSelector } from "react-redux";

function withGuarded(Component) {
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <div className="text-center text-success h4 ">
        <p> please Login Frist ... </p>
      </div>
    );
  };
  return Wrapper;
}

export default withGuarded;
