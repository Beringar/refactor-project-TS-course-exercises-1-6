const message = "Hello world";

console.log(message);

enum Color {
  red,
  green,
  blue,
}

interface A {
  pere: string;
}

interface B {
  numero: number;
}

interface C extends A, B {
  id: number;
}

let miqui: C = {
  pere: "ert",
  numero: 45,
  id: 34,
};

type D = {
  height: number;
};

interface E extends D {
  weight: number;
}

let manolo: E = {
  weight: 34,
  height: 1000,
};

type K = E & { level: number };

let gara: K = {
  weight: 45,
  height: 67,
  level: 999,
};
