import {
  createContext,
  useContext,
  useReducer,
} from "react";

const StudentContext = createContext();

const initialState = {
  students: [],
};

function studentReducer(state, action) {
  switch (action.type) {

    case "ADD_STUDENT":
      return {
        ...state,
        students: [
          ...state.students,
          action.payload,
        ],
      };

    default:
      return state;
  }
}

export function StudentProvider({ children }) {

  const [state, dispatch] = useReducer(
    studentReducer,
    initialState
  );

  const addStudent = (student) => {
    dispatch({
      type: "ADD_STUDENT",
      payload: student,
    });
  };

  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        addStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}