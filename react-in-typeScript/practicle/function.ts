function addTwo(a: number, b: number) {
  return a + b;
}

function getUpper(a: string) {
  return a.toUpperCase();
}

function signUpUser(nmae: string, email: string, isPaid: boolean) {
  return console.log(name, email, isPaid);
}

//called function
// addTwo(3, "called");  gives error
addTwo(4, 8);
getUpper("Called");
signUpUser("Vipul", "vipul@example.com", false);
