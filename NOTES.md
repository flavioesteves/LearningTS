# Section 1 Getting Started
01. Introduction
02. Introduction
03. Introduction
04. Installing & Using Typescript
05. Typescript notes and objectives of the course
06. Typescript notes and objectives of the course
07. Typescript notes and objectives of the course
08. Typescript notes and objectives of the course
09. Setup template for the lessons


# Section 2:TypeScript Basics & Basic Types
* Core Types:
  - number (1,5.3,-10) - All numbers, no differentiation between integers or floats
  - string ('Hello', "Hello", `Hello`) - All text values
  - boolean (true, false) - just these two, no "truthy" or "falsy" values
  - object {age:30} - Any JavaScript object, more specific types (type of object) are possible
  - Array ([1,2,3]) - Any Javascript array, type can be flexible or strict (regarding the lements types)
  - Tuple ([1, 'Hello'])- Added by TypeScript: fixed-length array
  - Enum - enum ({New, Old}) - Added by TypeScript: Automatically enumerated global constant identifiers.
  - Any - * : Any kind of value no specific type assignment 
10. Module Introduction
11. Using Types
12. TypeScript Types vs JavaScript Types
13. Important: Type Casing
14. Working with Numbers, Strings & Booleans
15. Type Assignment & Type Inference
16. Obejct Types
17. Nested Objects & types
18. Array Types
19. Working with Tuples
20. Working with Enums
21. The "any" Type
    * Avoid use the "any", because will be nullify the advantages of Typescript
22. Union Types
    * The special char to union is '|'. Example: (input: number | string)
23. Literal Types
    * Example: resultConversion: 'as-number' | 'as-text'
24. Type Aliases / Custom Types
25. Type Aliases & Object Types    
26. Function Return Types & "void"
    * Return type syntax: function name(param: type):("--> Return type") type {}
    * Void and Undefined as return type
27. Functions as Types
    * Function types syntax: let variableName: (param: type) => type
28. Functions Types & Callbacks
29. The "unknown" Type
    * "unknown" is a type that can be used when don't know what type will be stored, more resctrictive then "Any"
30. The "never" type
31. Wrap Up
32. Useful Resources & Links

# Section 3:The Typescript Compiler(and it's Configuration)
33. Module Introduction
34. Using "Watch Mode"
    * Watch mode: --watch or -w, this way is not necessary to recompile after other changes the compiler is watching everytime the file changes to recompile automatically.
    Example: tsc app.ts -- watch or tsc .app.ts -w 
35. Compiling the Entire Project/Multiple Files
    * tsc --init (In the beginning of the project)
    * tsc -w or tsc --watch (watch all files)
36. Including & Excluding Files
    * tsconfig.json:
      - "exclude": [(path)]
      - "include": [(path)] -> if is configured then will only compile the ones configured in this array
    * Those two configurations can be used for folders, subfolders and files
      - "files": [(path to the file)]
37. Setting a Compilation Target
    * "target": is the version of Javascript that will be converted during the compilation process
38. Understanding TypeScript Core Libs
    * "lib": by default is not configured
    Example: "lib": ["dom", "es6", "dom.iterable", "scripthost"] --> default config
39. More Configuration & Compilation Options
    * "allowJs", "checkJs" --> for vanilla JavaScript
    * "declarion", "declarionMap" --> for export as a library
40. Working with Source Maps
    * Works for debugging so in the browser devtools can be found the .ts files in the source tab. 
    * Create a new file ".js.map"
41. rootDir and outDir
    * Good practices, a folder "dist" for all .js files, and a folder "src" for the .ts files
    * "outDir": is the path where the .js will be created. The subfolders of the src of .ts files will be replicated as well.
    * "rootDir": root for the compiler looking into .ts to compile in the project. Keeping the structure
    * "removeComments", "noEmit", "downlevelInteraction"
42. Stop Emitting Files on Compilation Errors
    * "noEmitOnError": false(default value) --> this property is not in the tsconfig.json in the past versions
    * This property allow to compile/generate .js files with errors (false)
43. Strict Compilation
    * "strict" is all Strict Type-checking Options
    * "noImplicity", "strictNullChecks" -!, "strictFuntionTypes", "strictPropertyInitization"
44. Code Quality Options
    * "noUnusedLocals", "noUnusedParameters", "noImplicitReturns" 
45. Debugging with VS Code
    * Extensions: ESLint, Prettier, Debugger for Chrome
46. Wrap Up
47. Useful Resources & Links
    * tsconfig Docs: [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
    * Compiler Config Docs: [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
    * VS Code TS Debugging: [https://code.visualstudio.com/docs/typescript/typescript-debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)
