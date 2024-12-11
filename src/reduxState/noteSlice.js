import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getNotes = createAsyncThunk(
  "notes/getNotes",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("https://notes-server-iota.vercel.app/notes");
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// add note
export const addNote = createAsyncThunk(
  "notes/AddNote",
  async (note, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    note.userId = auth.id;
    try {
      const res = await fetch("https://notes-server-iota.vercel.app/notes", {
        method: "POST",
        body: JSON.stringify(note),
        headers: { "Content-type": "application/json; charest=UTF-8" }
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete
export const deleteNode = createAsyncThunk(
  "notes/DeleteNote",
  async (noteId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`https://notes-server-iota.vercel.app/notes/${noteId}`, {
        method: "DELETE"
      });

      return noteId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//  get one note
export const getOneNote = createAsyncThunk(
  "notes/getOneNote",
  async (noteId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://notes-server-iota.vercel.app/notes/${noteId}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// up to date
export const updatenote = createAsyncThunk(
  "notes/update",
  async (note, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(
        `https://notes-server-iota.vercel.app/notes/${note.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(note),
          headers: { "Content-type": "application/json; charest=UTF-8" }
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { records: [], record: null, loding: false, error: null };

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: { cleanRecord: state => (state.record = null) },
  extraReducers: builder => {
    builder.addCase(getNotes.pending, state => {
      state.loding = true;
      state.error = null;
    });
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.loding = false;
      state.records = action.payload;
    });
    builder.addCase(getNotes.rejected, (state, action) => {
      state.loding = false;
      state.error = action.payload;
    });

    // add note
    builder.addCase(addNote.pending, state => {
      state.loding = true;
      state.error = null;
    });
    builder.addCase(addNote.fulfilled, (state, action) => {
      state.loding = false;
      state.records.push(action.payload);
    });
    builder.addCase(addNote.rejected, (state, action) => {
      state.loding = false;
      state.error = action.payload;
    });
    // Delete Notes

    builder.addCase(deleteNode.pending, state => {
      state.loding = true;
      state.error = null;
    });
    builder.addCase(deleteNode.fulfilled, (state, action) => {
      state.loding = false;
      state.records = state.records.filter(note => note.id !== action.payload);
    });
    builder.addCase(deleteNode.rejected, (state, action) => {
      state.loding = false;
      state.error = action.payload;
    });

    // get one note
    builder.addCase(getOneNote.pending, state => {
      state.loding = true;
      state.error = null;
      state.record = null;
    });
    builder.addCase(getOneNote.fulfilled, (state, action) => {
      state.loding = false;
      state.record = action.payload || null;
    });
    builder.addCase(getOneNote.rejected, (state, action) => {
      state.loding = false;
      state.error = action.payload;
      state.record = null;
    });
    // update note
    builder.addCase(updatenote.pending, state => {
      state.loding = true;
      state.error = null;
    });
    builder.addCase(updatenote.fulfilled, (state, action) => {
      state.loding = false;
      state.record = action.payload;

      // const index = state.records.findIndex(
      //   note => note.id === action.payload.id
      // );
      // if (index!== -1) {
      //   state.records[index] = action.payload;
      // }
    });
    builder.addCase(updatenote.rejected, (state, action) => {
      state.loding = false;
      state.error = action.payload;
    });

    // // reset
    // builder.addCase(getNotes.fulfilled, (state, action) => {
    //   state.records = action.payload;
    // });
  }
});
export const { cleanRecord } = noteSlice.actions;
export default noteSlice.reducer;
