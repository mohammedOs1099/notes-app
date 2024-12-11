import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../reduxState/noteSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Loding from "./../Components/Loding";
import withGuarded from "../utility/withGuarded.jsx";

import { useFormik } from "formik";
import { noteSchema } from "../utility/validationSchema.js";

function AddNote() {
  const { loding, error } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: ""
    },
    validationSchema: noteSchema,
    onSubmit: (values, { resetForm }) => {
      const id = uuidv4();
      dispatch(
        addNote({ id, title: values.title, description: values.description })
      )
        .unwrap()
        .then(() => {
          resetForm();
          navigate("/");
        })
        .catch((error) => window.alert(error));
    }
  });

  return (
    <Container className=" col-sm-12 col-md-8    p-2 ">
      <Form className="  " onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            isInvalid={!!formik.errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            isInvalid={!!formik.errors.description}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.description}
          </Form.Control.Feedback>
        </Form.Group>
        <Loding loding={loding} error={error}>
          <Button type="submit" variant="outline-success">
            Submit
          </Button>
        </Loding>
      </Form>
    </Container>
  );
}
export default withGuarded(AddNote);
