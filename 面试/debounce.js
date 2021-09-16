const debounce = (func, delay) => {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      func()
    }, delay)
  }
}
const log = debounce(() => console.log('call'), 5000)
log();
log();
log();