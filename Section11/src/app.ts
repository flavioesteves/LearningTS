console.log("Section 10 - Module & Namespaces");
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";


//main render
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
