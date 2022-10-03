# Section 1: Getting Started
01. Introduction
02. Introduction
03. Introduction
04. Installing & Using Typescript
05. Typescript notes and objectives of the course
06. Typescript notes and objectives of the course
07. Typescript notes and objectives of the course
08. Typescript notes and objectives of the course
09. Setup template for the lessons


# Section 2: TypeScript Basics & Basic Types
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
