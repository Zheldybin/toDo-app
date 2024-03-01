import { getAsValue, add as addLS } from "./LS";

// Вернет первый true
let tasks = getAsValue("tasks") ?? [];

const add = (value) => {
  const newTask = {
    id: Date.now(),
    text: value,
    done: false,
  };

  tasks.push(newTask);

  addLS("tasks", tasks);
};

const removeTask = (id) => {
  tasks = tasks.filter((item) => item.id !== Number(id));
  addLS("tasks", tasks);
};

const toggleDone = (id) => {
  const index = tasks.findIndex((el) => el.id === Number(id));
  tasks[index].done = !tasks[index].done;
  addLS("tasks", tasks);
};

export { add, tasks, removeTask, toggleDone };
