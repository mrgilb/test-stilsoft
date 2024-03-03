export function scrollLock(status) {
  const body = document.querySelector("body");

  status ? body.classList.add("lock") : body.classList.remove("lock");
}

export function generateUniqueId(array) {
  let id = Math.floor(Math.random() * 1000) + 1; // Генерируем случайное число от 1 до 1000
  while (array.some(item => item.id === id)) {
    id = Math.floor(Math.random() * 1000) + 1; // Если ID уже существует, генерируем новый
  }
  return id;
}
