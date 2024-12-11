import { Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function NotesListItem({ data, deleteitems, isLoggedIn }) {
  const navigate = useNavigate();
  const deleteNode = (note) => {
    if (window.confirm(`Are you sure you want to delete ${note.title}?`)) {
      deleteitems(note.id);
    }
  };
  return (
    <>
      {data?.map((ele, index) => {
        return (
          <tr key={ele?.id}>
            <td> {index + 1}</td>
            <td>
              <Link className=" link link-success h5 " to={`notes/${ele?.id}`}>
                {ele?.title}
              </Link>
            </td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button
                  disabled={!isLoggedIn}
                  onClick={() => {
                    navigate(`notes/${ele.id}/edit`);
                  }}
                  className=" "
                  variant="success"
                >
                  Edit
                </Button>
                <Button
                  disabled={!isLoggedIn}
                  onClick={() => {
                    deleteNode(ele);
                  }}
                  className=""
                  variant="danger"
                >
                  Delete
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        );
      })}
    </>
  );
}
