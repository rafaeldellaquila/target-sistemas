const isFibonacci = (num)=> {
  let a = 0, b = 1;

  while (b <= num) {
      if (b === num) return true;
      [a, b] = [b, a + b];
  }
  return false;
}

const number = 45; // Número a verificar

console.log(
  `O número ${number} ${isFibonacci(number) ? "pertence" : "não pertence"} à sequência de Fibonacci.`
);
