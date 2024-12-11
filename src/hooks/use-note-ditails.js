import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneNote } from "../reduxState/noteSlice";

const useNotesDitails = () => {
    const { id } = useParams();
     const dispatch = useDispatch();
  const { record, loding, error } = useSelector(state => {
    return state?.notes;
  });
 

  useEffect(
    () => {
      dispatch(getOneNote(id));
    },
    [dispatch, id]
  );

  return { record, loding, error };
};
export default useNotesDitails;
