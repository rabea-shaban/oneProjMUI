import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../Pages";
import Create from "../Pages/Create";
import Home from "../Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </>
  )
);

export default router;
