import { Container } from "react-bootstrap";

import Header from "./../Components/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Container className="p-2">
        <Header />
        <Outlet />
      </Container>
    </>
  );
}
