document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    alert("Please log in first!");
    window.location.href = "login.html";
    return;
  }

  const res = await fetch("http://127.0.0.1:8080/todos/all", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    alert("Failed to fetch todos.");
    return;
  }

  const todos = await res.json();
  const tbody = document.getElementById("todoBody");

  todos.forEach((todo, index) => {
    const row = document.createElement("tr");
    row.className = todo.complete ? "alert alert-success" : "";
    row.innerHTML = `
      <td>${index + 1}</td>
      <td class="${todo.complete ? "text-decoration-line-through" : ""}">
        ${todo.title}
      </td>
      <td>
        <button onclick="editTodo(${todo.id})" class="btn btn-info">Edit</button>
      </td>
    `;
    tbody.appendChild(row);
  });
});

function editTodo(id) {
  window.location.href = `edit-todo.html?id=${id}`;
}


fetch("http://127.0.0.1:8020/healthy")
  .then(res => res.json())
  .then(data => console.log("Backend says:", data))
  .catch(err => console.error("Error:", err));
