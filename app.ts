const greeting: string = "Hello, world! TypeScript is working!";
console.log(`Title: ${greeting}`);

const a: null = null;
const b: undefined = undefined;

let m: Array<number> = [1, 2, 3];

for (let i = 0; i < m.length; i++) {
  if (m[i] % 2 == 0) {
    console.log(`${m[i]} is even`);
  } else {
    console.log(`${m[i]} is odd`);
  }
}

m.forEach(element => {
  console.log(element);
});