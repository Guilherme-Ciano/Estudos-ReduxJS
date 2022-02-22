const initialState = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
      ],
    },
    {
      id: 2,
      title: "Iniciando com Redux",
      lessons: [
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" },
      ],
    },
  ],
};

export default function course(state = initialState, action) {
  console.log(action);

  if (action.type === "TOGGLE_LESSON") {
    const { module, lesson } = action;

    return {
      ...state,
      activeModule: module,
      activeLesson: lesson,
    };
  }

  return state;
}
