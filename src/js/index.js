import "regenerator-runtime";
import main from "./views/main";
import StudentApi from "./services/StudentApi";
import "../css/style.css";
import "../css/responsive.css";

main();

async function fetchData() {
    const data = await StudentApi.getStudents();

    console.log(await data);
}

fetchData();
