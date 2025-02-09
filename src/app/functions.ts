export function getUser() {
  const user = JSON.parse(localStorage.getItem("advanta-user")!) || null;
  console.log(user);
  return user;
}
