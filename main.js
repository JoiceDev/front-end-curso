$(document).ready(function () {
    const inputElement = $(".new-task-input");
    const addTaskButton = $(".new-task-button");
    const tasksContainer = $(".tasks-container");

    const validateInput = () => inputElement.val().trim().length > 0;

    const handleAddTask = () => {
        const inputIsValid = validateInput();

        console.log(inputIsValid);

        if (!inputIsValid) {
            return inputElement.addClass("error");
        }

        const taskItemContainer = $("<div>").addClass("task-item");
        const taskContent = $("<p>").text(inputElement.val());

        taskContent.on("click", () => handleClick(taskContent));

        const deleteItem = $("<i>").addClass("far fa-trash-alt");

        deleteItem.on("click", () => handleDeleteClick(taskItemContainer, taskContent));

        taskItemContainer.append(taskContent, deleteItem);
        tasksContainer.append(taskItemContainer);

        inputElement.val("");

        updateLocalStorage();
    };

    const handleClick = (taskContent) => {
        const tasks = tasksContainer.children();

        tasks.each(function () {
            const currentTaskIsBeingClicked = $(this).children().first().is(taskContent);

            if (currentTaskIsBeingClicked) {
                taskContent.toggleClass("completed");
            }
        });

        updateLocalStorage();
    };

    const handleDeleteClick = (taskItemContainer, taskContent) => {
        const tasks = tasksContainer.children();

        tasks.each(function () {
            const currentTaskIsBeingClicked = $(this).children().first().is(taskContent);

            if (currentTaskIsBeingClicked) {
                taskItemContainer.remove();
            }
        });

        updateLocalStorage();
    };

    const handleInputChange = () => {
        const inputIsValid = validateInput();

        if (inputIsValid) {
            inputElement.removeClass("error");
        }
    };

    const updateLocalStorage = () => {
        const tasks = tasksContainer.children();

        const localStorageTasks = tasks.map(function () {
            const content = $(this).children().first();
            const isCompleted = content.hasClass("completed");

            return { description: content.text(), isCompleted };
        }).get();

        localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
    };

    const refreshTasksUsingLocalStorage = () => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

        if (!tasksFromLocalStorage) return;

        tasksFromLocalStorage.forEach(function (task) {
            const taskItemContainer = $("<div>").addClass("task-item");
            const taskContent = $("<p>").text(task.description);

            if (task.isCompleted) {
                taskContent.addClass("completed");
            }

            taskContent.on("click", () => handleClick(taskContent));

            const deleteItem = $("<i>").addClass("far fa-trash-alt");

            deleteItem.on("click", () => handleDeleteClick(taskItemContainer, taskContent));

            taskItemContainer.append(taskContent, deleteItem);
            tasksContainer.append(taskItemContainer);
        });
    };

    refreshTasksUsingLocalStorage();

    addTaskButton.on("click", () => handleAddTask());

    inputElement.on("change", () => handleInputChange());
});
    