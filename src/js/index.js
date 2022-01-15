import "regenerator-runtime";
import main from "./views/main";
import StudentApi from "./services/StudentApi";
import "../css/style.css";
import "../css/responsive.css";

main();

async function fetchData() {
    const data = await StudentApi.getStudents();

    // console.log(await data);
    const showCards = await (data) => {
        return /*html*/ `<div class="col-md-4 my-5 text-center">
                            <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${data.photo_picture}" alt="Card image cap">
                                <div class="card-body">
                                    <h1 class="card-text">${data.name}</h1>
                                    <p class="card-text">${data.future_goals}</p>
                                </div>
                            </div>
                        </div>`;
    };

}

fetchData();
