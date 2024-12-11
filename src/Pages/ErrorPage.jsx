import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row className=" text-center  mt-5 text-danger   ">
          <Col>
            <div id="error-page ">
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{error.statusText || error.message} </i>
              </p>
              <Button
                onClick={() => {
                  navigate("/", { replace: true });
                }}
                variant="outline-success"
              >
                back to home{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
