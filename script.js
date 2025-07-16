document.getElementById("contactForm").addEventListener("submit", (e) => {
  const email = e.target.email.value.trim();
  const good = /.+@.+\..+/.test(email);
  if (!good) {
    alert("Please enter a valid e‑mail address 😊");
    e.preventDefault();
  }
});

const input = document.getElementById("taskInput");
const list  = document.getElementById("taskList");
document.getElementById("addBtn").onclick = () => {
  const text = input.value.trim();
  if (!text) return;
  const li  = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `${text} <button aria-label="Delete task">✕</button>`;
  li.querySelector("button").onclick = () => li.remove();
  list.appendChild(li);
  input.value = "";
};
