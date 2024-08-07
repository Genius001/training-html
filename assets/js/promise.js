function nonton(tiketHabis) {
  return new Promise(function(resolve, reject) {
    if (tiketHabis) {
      reject("tidak jadi nonton");
    }
    setTimeout(function() {
      resolve("jadi nonton");
    }, 1000);
  });
}

console.log("ayo nonton");
nonton(true) //true = tidak jadi nonton , false = jadi nonton
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });
console.log("nonton Deadpool");
console.log(res);
