document.addEventListener('DOMContentLoaded', function() {
    const taskSections = document.querySelectorAll('section.taskse');

    taskSections.forEach(section => {
        const button = section.querySelector('button');
        const input = section.querySelector('input[type="text"]');

        function addTask() {
            const taskText = input.value.trim();
            if (taskText) {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.textContent = taskText;

                taskItem.addEventListener('click', function() {
                    this.classList.toggle('completed');
                });

                taskItem.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    this.remove();
                });

                section.appendChild(taskItem);
                input.value = '';
            }
        }

        button.addEventListener('click', addTask);

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    });
});
