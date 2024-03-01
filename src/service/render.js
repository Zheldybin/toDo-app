const render = {
  task(container, item) {
    container.innerHTML += `
          <li id="${item.id}" class="task">
          <span class="${item.done ? "done" : "task-title"}">${item.text}</span>
            <div class="task-btn">
              <button class="task-done btn" data-action="done" data-id=${
                item.id
              }>Готово</button>
              <button class="task-remove btn" data-action="delete" data-id=${
                item.id
              }>Удлить</button>
            </div>
          </li>
          `;
  },
  allTasks(container, tasks) {
    container.innerHTML = "";
    tasks?.forEach((element) => {
      render.task(container, element);
    });
  },
};

export { render };
