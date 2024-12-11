import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { Provider } from "react-redux";
import store from "./reduxState/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
