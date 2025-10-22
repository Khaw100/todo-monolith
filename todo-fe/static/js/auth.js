// auth.js


async function loginUser(event) {
  event.preventDefault();
  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const res = await fetch(`${API_BASE_URL}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    localStorage.setItem("access_token", data.access_token);
    alert("Login successful!");
    window.location.href = `todo.html`;
  } else {
    alert("Invalid credentials");
  }
}

async function registerUser(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));

  if (data.password !== data.password2) {
    alert("Passwords do not match");
    return;
  }

  const payload = {
    email: data.email,
    username: data.username,
    first_name: data.first_name,
    last_name: data.last_name,
    role: data.role,
    phone_number: data.phone_number,
    password: data.password,
  };

  const res = await fetch(`${API_BASE_URL}/auth/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  if (res.ok) {
    alert("Registration successful!");
    window.location.href = `login.html`;
  } else {
    alert(`Error: ${result.detail || result.message}`);
  }
}

// Attach listeners if forms exist
document.getElementById("loginForm")?.addEventListener("submit", loginUser);
document.getElementById("registerForm")?.addEventListener("submit", registerUser);
