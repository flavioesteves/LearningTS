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
    * "sourceMap:" Works for debugging so in the browser devtools can be found the .ts files in the source tab. 
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

# Section 4: Next-generation Javascript & Typescript
48. Module Introduction
49. "let" and "const"
    * Compatibility table [https://kangax.github.io/](https://kangax.github.io/)
50. Arrow Functions
51. Default Function Parameters
    * Example function add(a:number; b:number = 1): "b:number = 1". 1 is the default value when called the function without the 2nd Parameter.
    * Default values parameters needs to be declared in the last positions, because default arguments are not skipped
    * (non-default parameters, default parameters)
52. The Spread Operator (...)
53. Rest Parameters
54. Array & Object Desctructuring
55. How Code Gets Compiled & Wrap Up
56. Useful Resources & Links

# Section 5:Classes & Interfaces
57. Module Introduction
58. What are Classes?
    * OOP
    * Example: 
    - ProductList --> Renders a list of products which were fetched from a server (database) --> Object holds rendering + fetching logic
    - Product --> Renders details about a product and allows addition to cart --> Object holds rendering + cart adding logic
    - ShoppingCart --> Renders cart products and total and allows user to order them --> Object holds rendering + ordering (server commmunication) logic
    * Objects: "The things you work with in code", Instances of classes (=based on classes), Class-based creation is an alternative to using object literals!
    * Classes: "Blueprints for objects" (theoretical definition), Define how objects look like, which properties and methods they have, Classes make creation of multiple similar       objects much easier
59. Creating a First Class
60. Compiling to Javascript
    * Difference ES5 to ES6
61. Constructor Functions & the "this" Keyword
62. "private" and "public" Access Modifiers
    * Modifiers: Public, Private
    * Default is Public
    * Beside properties, you can also mark methods as "private"
63. Shorthand Initialization
64. "readonly" Properties
65. Inheritance
    * "super" to access the parent class. In this case the constructor.
66. Overriding Properties & the "protected" Modifier
    * protected is like private but can accessible by the inherented classes
67. Getters & Setters
    * Getters & Setters are accessable as a property and not as a function call.
    * Getter: get keyword. Example: get nameOfTheGetter () {return something}
      - Access: class.nameOfTheGetter
    * Setter: set keyword. Example: set nameOfTheSetter(newValue: type){}
      - Access: class.nameOfTheSetter = newValue
68. Static Methods & Properties
    * static keyword 
69. Abstract Classes
    * abstract keyword: used in class and methods
70. Singletons & Private Constructors
71. Classes - A Summary
72. A First Interface
73. Using Interfaces with Classes
74. Why Interfaces?
75. Readonly Interface Properties
76. Extending Interfaces
77. Interfaces as Function Types
78. Optional Parameters & Properties
79. Compiling Interfaces to JavaScript
80. Wrap Up
81. Useful Resources & Links
    * [More on (JS) Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    * [More on TS Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)


# Section 6:Advanced Types
82. Module Introduction
    - Intersection Types
    - Type Guards
    - Discriminated Unions
    - Type Casting
    - Function Overloads
83. Intersection Types
84. More on Type Guards
85. Discriminated Union
86. Type Casting
87. Index Properties
88. Function Overloads
89. Optional Chaining
90. Nullish Coalescing
91. Wrap Up
92. Useful Resources & Links

# Section 7:Generics
93. Module Introduction
94. Built-in Generics & What are Generics?
95. Creating a Generic Function
96. Working with Constraints
97. Another Genericc Function
98. The "keyof" Constraint
99.  Generic Classes
100. First Summary
101. Generic Utility Types
102. Generic Types vs Union Types
103. Useful Resources & Links
    * [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)

# Section 8: Decorators
104. Module Introduction
    - Meta-Programming
105. A First Class Decorator
106. Working with Decorator Factories
107. Building More Useful Decorators
108. Adding Multiple Decorators
109. Diving into Property Decorators
110. Accessor & Parameter Decorators
111. When Do Decorators Execute?
112. Returning (and changing) a Class in a Class Decorator
113. Other Decorator Return Types
114. Example: Creating an "Autobind" Decorator
115. Validation with Decorators - First Steps
116. Validation with Decorators - Finished
117. Fixing a Validator Bug
118. Wrap Up
    - Example package Validator: typestack/class-validator
    - Angular or Nestjs code is heavy in Decorators is a good source to see some implementation examples in production
119. Useful Resources & Links
    * [More on Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

# Section 9: Practice Time!Let's build a Drag & Drop Project
120. Module Introduction
121. Getting Started
122. DOM Element Selection & OOP Rendering
123. Interacting with DOM Elements
124. Creating & Using an "Autobind" Decorator
125. Fetching User Input
126. Creating a Re-Usable Validation Functionality
127. Rendering Project Lists
128. Managing Application State with Singletons
