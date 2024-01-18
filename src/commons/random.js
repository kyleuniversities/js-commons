export function nextInt(start, upTo) {
  const length = upTo - start;
  return start + Math.floor(Math.random() * length);
}
