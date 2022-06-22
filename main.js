function hello(callback) {
  console.log(callback);
  console.log("hello " + callback());
}


hello(function () {
  return "sho";
});
