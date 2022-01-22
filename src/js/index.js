import "regenerator-runtime";
import main from "./views/main";
import StudentApi from "./services/StudentApi";
import "../css/style.css";
import "../css/responsive.css";
import cards from "./views/cards.js";

main();

async function fetchData() {
    const studentContainer = document.querySelector(".list-student-section .row");
    const data = await StudentApi.getStudents();

    const updateStudentSection = (students) => {
        students.forEach((student) => {
            studentContainer.innerHTML += cards(student);
        });
    };

    updateStudentSection(data);

    // console.log(await data);
}

fetchData();
