import useNotesDitails from "../hooks/use-note-ditails";
import Loding from "../Components/Loding";

import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatenote } from "../reduxState/noteSlice";
import withGuarded from "../utility/withGuarded.jsx";
import { useFormik } from "formik";
import { noteSchema } from "../utility/validationSchema.js";

function NoteEdit() {
  const { record, loding, error } = useNotesDitails();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: record?.title || "",
      description: record?.description || ""
    },
    enableReinitialize: true,

    validationSchema: noteSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        updatenote({
          id: record?.id,
          title: values.title,
          description: values.description
        })
      )
        .unwrap()
        .then(() => {
          resetForm();
          navigate("/");
        });
    }
  });

  return (
    <>
      {" "}
      <Loding loding={loding} error={error}>
        <Container className=" col-sm-12 col-md-8    p-2 ">
          <h3 className=" text-success text-center ">
            {" "}
            Edit: {record?.title}{" "}
          </h3>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
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

            <Button type="submit" variant="outline-success">
              Submit
            </Button>
          </Form>
        </Container>
      </Loding>
    </>
  );
}
export default withGuarded(NoteEdit);
