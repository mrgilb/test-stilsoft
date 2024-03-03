export function scrollLock(status) {
  const body = document.querySelector("body");

  status ? body.classList.add("lock") : body.classList.remove("lock");
}
