console.log("Section 10 - Module & Namespaces");
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";


//main render
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
