var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
<<<<<<< HEAD
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var more_kittens = [...kittens, name];
  return more_kittens;
}

function prependKitten(name) {
  var more_kittens = [name, ...kittens];
  return more_kittens;
}

function removeLastKitten() {
  var less_kittens = kittens.slice(0, kittens.length - 1);
  return less_kittens;
}

function removeFirstKitten() {
  var less_kittens = kittens.slice(1, kittens.length);
  return less_kittens;
=======
function destructivelyAppendKitten(array, kitten) {
  array.unshift(kitten);
  return array;
>>>>>>> 2340904df1e875d45d28cee0300e84f490692b86
}
