// src/utils/auth.js
const users = [{ username: "admin", password: "password123" }];

export function authenticate(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  return user ? true : false;
}
