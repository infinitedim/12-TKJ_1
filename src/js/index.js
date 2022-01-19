import "regenerator-runtime";
import main from "./views/main";
import StudentApi from "./services/StudentApi";
import "../css/style.css";
import "../css/responsive.css";
import cards from "./views/cards.js";

main();

async function fetchData() {
    const data = await StudentApi.getStudents();

    const updateStudentSection = (students) => {
        let studentCards = "";
        students.forEach((student) => {
            studentCards += cards(student);
            const studentContainer = document.querySelector(
                ".student-list-section .row"
            );
            studentContainer.innerHTML = studentCards;
        });
    };

    updateStudentSection(data);

    // console.log(await data);
}

fetchData();
