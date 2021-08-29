# Tyler is learning TypeScript

I've been using TypeScript at work for a few years now. I was very hesistant about it at first, but now I love it. After mainly using it with React and GraphQL; 
I want to take some time to better understand its internals and find boundaries to be aware of.

My primary source for this is O'Reilly's "Effective TypeScript" book by Dan Vanderkam. 

## 62 Rules (In-Progress) 

### 1. Understand the relationship between TypeScript & JavaScript 
- TypeScript is a superset of JavaScript
- All of JavaScript fits under TypeScript, but not all of TypeScript fits under JavaScript 

### 2. Know which TypeScript options you're using 
- The TypeScript compiler has many options that developers can set 
- You can use the `tsconfig` file to set these options 
- You should turn on `noImplicitAny` unless you're migrating repos (best practice) 
- Use `strictNullChecks` to prevent runtime errors like "undefined is not an object" 

### 3. Understand that code generation is independent of types 
- The TypeScript compiler takes your `*.ts` files and generates `*.js` files
- The files that are produced do not have types within them, it's solely a build step
- The files that are produced are meant to run within browsers and applications that cannot run TypeScript natively 
- TypeScript types cannot be checked at runtime
- TypeScript types are "erasable" when they become JavaScript
- Type operations cannot affect runtime values 
- Types have no effect on runtime performance 
- You cannot overload functions based on types like you can in C++ where you can write multiple versions of a function 

### 4. Get comfortable with structural typing 
- JavaScript is duck typed (if it walks like a duck, talks like a duck, it's a duck) 
- TypeScript uses structural typing, which means that an object might have additional properties than what you expect 
- When types are sealed, that means you expect the properties you declare and no others... however in TypeScript the types are not sealed 
- Classes also follow structural typing rules.

### 5. Limit use of the `any` type 
- The type system is gradual and optional, you can disable the type checker and just write pure JavaScript
- There is not any type safety with `any` types 
- `any` lets you break contracts 
- There are no language services for `any` types because TypeScript has no addtitional context about them
- `any` hides any typing you've done in upstream declarations 
- `any` undermines confidence in the type system because mistakes are left to be caught at runtime 
- `any` silences the type checker 
- `any` silences the TypeScript language service 

### 6. Use your editor to interrogate and explore the type system 
- Out of the box TypeScript gives you two executables: `tsc` and `tsserver`
- `tsc` is the TypeScript compiler
- `tsserver` is the TypeScript standalone server 
- The server runs the language services that are used in IDEs (autocomplete, inspection, navigation, and refactoring)
- The language service provides the ability to use "Go to definition" 

### 7. Think of types as sets of values 
- Before code runs, TypeScript checks it for errors. Every variable has a type, and that is considered a set of possible values.
- The set of possible values is known as the domain of the type. 
- Depending on `strictNullChecks` null and undefined may or may not be part of the domain.
- The smallest domain is the empty set, assignable with the type `never`
- The next smallest sets are single value domains also known as unit types
- The next smallest sets are types with two values known as union types (unioning unit types)
