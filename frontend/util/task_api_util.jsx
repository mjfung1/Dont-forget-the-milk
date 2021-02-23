export const createTask = (task) => {
    return $.ajax({
        method: 'POST',
        url: '/api/tasks',
        data: { task: task }
    });
};

export const deleteTask = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/tasks/${id}`
    })
}

export const updateTask = (task) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/tasks/${task.id}`,
        data: { task: task }
    });
};

export const fetchAllTasks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tasks'
    })
}

export const fetchTask = (id) => {
  return $.ajax({
    url: `api/tasks/${id}`,
    method: 'GET',
  });
};