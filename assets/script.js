const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        alert("Digite a tarefa");
        input.focus();
        return;
    }

    const item = document.createElement("li");

    item.className =
        "flex justify-between items-center bg-gray-300 text-black p-3 rounded-full";

    item.innerHTML = `
        <p class="cursor-pointer">${text}</p>

        <div class="flex gap-2">
            <button class="edit text-blue-500 hover:text-blue-700">
                Editar
            </button>

            <button class="remove text-red-300 hover:text-red-600">
                Remover
            </button>
        </div>
    `;

    const task = item.querySelector("p");
    const edit = item.querySelector(".edit");
    const remove = item.querySelector(".remove");

    task.addEventListener("click", () => {
        item.classList.toggle("completed");
    });

    edit.addEventListener("click", () => {
        const newText = prompt("Editar tarefa:", task.textContent);

        if (newText !== null && newText.trim() !== "") {
            task.textContent = newText.trim();
        }
    });

    remove.addEventListener("click", () => {
        item.remove();
    });

    list.appendChild(item);

    input.value = "";
    input.focus();
}