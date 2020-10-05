module.exports = function reverse (n) {
  n = Math.abs(n);
  let box = String(n);
  let box2 = '';
  for (let i = box.length - 1; i >= 0; i--) {
    box2 += box[i];
  }
return Number(box2);
}
