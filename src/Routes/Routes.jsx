import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from "../Pages/Layout";
import Index from "../Pages/Index";
import ErrorPage from "../Pages/ErrorPage";
import { lazy, Suspense } from "react";
const NoteEdit = lazy(() => import("../Pages/NoteEdit"));
const AddNote = lazy(() => import("../Pages/AddNote"));
const Ditails = lazy(() => import("../Pages/Ditails"));
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
      <Route path="home" element={<Index />} />
      <Route index element={<Index />} />
      <Route
        path="notes/:id/edit"
        element={
          <Suspense
            fallback={
              <div className=" text-center text-success h5">
                <p>Loading ...</p>
              </div>
            }
          >
            <NoteEdit />
          </Suspense>
        }
      />
      <Route
        path="notes/add"
        element={
          <Suspense
            fallback={
              <div className=" text-center text-success h5">
                {" "}
                <p>Loading ...</p>{" "}
              </div>
            }
          >
            <AddNote />
          </Suspense>
        }
      />
      <Route
        path="notes/:id"
        element={
          <Suspense
            fallback={
              <div className=" text-centertext-success h5">
                {" "}
                <p>Loading ...</p>{" "}
              </div>
            }
          >
            <Ditails />
          </Suspense>
        }
      />
    </Route>
  )
);

export default routes;
// loader={({ params }) => {
//         if (isNaN(params.id)) {
//             throw new Response("Bad Request", { status: 404 });
//         }
//       }}
