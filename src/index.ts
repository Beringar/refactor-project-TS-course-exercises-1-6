// Ej1

type Difficulty = "Easy" | "Medium" | "Hard";

// Ej2

enum OrderState {
  Pending,
  inProgress,
  Delivered,
  Returned,
}

// Ej3

// 1.modelar un juego

interface Game {
  id: string;
  name: string;
  description: string;
  difficulty: Difficulty;
  price: number;
  platforms: string[];
}

// 2.modelar un comprador
interface Customer {
  id: string;
  name: string;
  email: string;
  age: number;
  username: string;
  password: string;
}

// 3.modelar un pedido
interface Order {
  id: string;
  customer: Customer;
  games: Game[];
  state: OrderState;
  totalAmount: number;
}

// 4. Crear un var con 3 juegos

const games: Game[] = [
  {
    id: "1",
    name: "The Witcher 3",
    description: "Juego de rol de mundo abierto",
    difficulty: "Hard",
    price: 20,
    platforms: ["PC", "PS4", "XBOX"],
  },
  {
    id: "2",
    name: "The Last of Us",
    description: "Juego de aventura y acción",
    difficulty: "Medium",
    price: 30,
    platforms: ["PS4"],
  },
  {
    id: "3",
    name: "God of War",
    description: "Juego de acción y aventura",
    difficulty: "Medium",
    price: 40,
    platforms: ["PS4"],
  },
];

// 5. Crear una var con 1 comprador

const customerJohn: Customer = {
  id: "1",
  name: "John",
  email: "john@dfgt.com",
  age: 30,
  username: "john",
  password: "1234",
};

const adultAge = 18;
// 6. Crear funcion createOrder

const createOrder = (games: Game[], customer: Customer): Order => {
  if (customer.age < adultAge) {
    throw new Error("Customer is not adult");
  }

  return {
    id: `${customer.id}-${Date.now()}`,
    customer,
    state: OrderState.Pending,
    games,
    totalAmount: games.reduce(
      (totalAmount, { price }) => totalAmount + price,
      0
    ),
  };
};

// 7. crear var con una order

const orderA: Order = createOrder(games, customerJohn);

// 8. crear func orderstatus

const getOrderStatus = (order: Order): OrderState => order.state;

// 9. crear func getOrderTotal

const getOrderTotal = (order: Order): number => order.totalAmount;

// 10. crear getOrderGames

const getOrderGames = (order: Order): Game[] => order.games;

// Ejercicio 4

const getWrappedValue = <T>(value: T): { value: T } => ({ value });

// Ejercicio 5

interface Book {
  title: string;
  author: string;
  genre: string;
  year: number;
}

interface ExtendedBook extends Book {
  format: "Digital" | "Paper";
}

const getBookInfo = (book: Book): string => {
  return `The book ${book.title} written by ${book.author} was published in year ${book.year}`;
};

const getBookExtendedInfo = (extendedBook: ExtendedBook): string => {
  return `${getBookInfo(extendedBook)} in ${extendedBook.format} format`;
};
