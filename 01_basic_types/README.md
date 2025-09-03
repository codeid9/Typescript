# Basic Types in TypeScript

## What I Learned

- TypeScript allows us to define variable types explicitly.
- This helps catch errors early and improves code readability.

## Types Covered

| Type       | Description                          |
|------------|--------------------------------------|
| `string`   | Textual data                         |
| `number`   | Numeric values                       |
| `boolean`  | True/false values                    |
| `any`      | Opt-out of type checking             |
| `unknown`  | Safer alternative to `any`           |
| `never`    | Represents unreachable code          |

## Example

```ts
function greet(user: string, age: number): string {
  return `Hello ${user}, age ${age}`;
}
