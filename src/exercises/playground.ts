/* eslint-disable */

// Primitive data types
const a = "4";
let b: "3.34" | "5.67" = "3.34";
let c = true;

// a = "4"
// b = "blabla";
// b = 5;

console.log(a);

/******* Scope *******/

// Function scope (var)

const testScope = () => {
  let newWord = "goodbye";
};
testScope();
// console.log(newWord);

// Block scope (let/const)
if (true) {
  var word = "hello";

  word;
}
console.log(word);

// Mutability

/* Complex data types */

const myObject = {
  a: "hello",
  b: "goodbye",
  x: "foo",
  z: {
    something: "else",
  },
  "c  $  d": "was anderes",
};

myObject.a = "Hallo!";
console.log(myObject["c  $  d"]);

let {
  a: otherA,
  x,
  z: { something },
} = myObject;
// const otherA = myObject.a;
// const x = myObject.x;
// const something = myObject.z.something;

x = "e";
console.log(something);
// z = { something: "other" };

console.log(otherA);

console.log(myObject);

// Array

const myArray: number[] = [1, 2, 3];
const myArray2: Array<Book> = [{ isbn: "sdfsd", title: "sdsd" }];
myArray[8] = 45;

type MyPromise = Promise<Book>;

const [myValue, , , , , , , , mySecondValue] = myArray;
console.log(myValue);
console.log(mySecondValue);

// const [state, setState] = useState();
// const myUseStateResult = useState();
// const state = myUseStateResult[0];
// const setState = myUseStateResult[1];

// Functions

const sayHi = function (firstName: string | undefined) {
  console.log(firstName);
  return "4";
};

sayHi(undefined);

type Address = {
  street: string;
  zipCode: string;
  city: string;
};

type Profile = {
  id: number;
  gender: string;
  name: string;
  pictureUrl?: string;
  address: Address;
};

interface Magazine {
  title: string;
  issn: string;
}

interface Book {
  title?: string;
  isbn: string;
}

type BookWithoutTitle = Omit<Book, "title">;
// type BookWithoutTitle = { isbn: string };

const myBookWithoutTitle: BookWithoutTitle = { isbn: "123" };

type ReadingMaterial = Book | Magazine;

const readingMaterial: ReadingMaterial[] = [
  {
    title: "Vogue",
    issn: "0042-8000",
  },
  {
    title: "Robinson Crusoe",
    isbn: "978-3401002569",
  },
];

const getBook = (title: string): ReadingMaterial | undefined =>
  readingMaterial.find((rM) => rM.title === title);

export {};
