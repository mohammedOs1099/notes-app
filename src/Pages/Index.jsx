import { useCallback, useEffect } from "react";
import NotesTable from "../Components/NotesTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteNode, getNotes } from "../reduxState/noteSlice";
import Loding from "../Components/Loding";

export default function Index() {
  const { records, loding, error } = useSelector((state) => state.notes);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(getNotes());
  }, [disPatch]);
  const deleteHandler = useCallback(
    (id) => {
      disPatch(deleteNode(id));
    },
    [disPatch]
  );
  return (
    <>
      <Loding loding={loding} error={error}>
        <NotesTable
          data={records}
          deleteNote={deleteHandler}
          isLoggedIn={isLoggedIn}
        />
      </Loding>
    </>
  );
}
