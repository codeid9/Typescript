//basic types in TS

const name: string = "A";
const age: number = 25;
const isDev: boolean = true;

const skills: string[] = ["React", "TypeScript", "NumPy"];

type User = {
  id: number;
  username: string;
  isAdmin?: boolean;
};

const user: User = {
  id: 1,
  username: "devA",
};

function greet(user: User): string {
  return `Hello, ${user.username}`;
}

console.log(greet(user));
