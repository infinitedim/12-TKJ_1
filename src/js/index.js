import "regenerator-runtime";
import main from "./views/main";
import RandomUserApi from "./services/RandomUserApi";
import StateManagement from "./services/StateManagement";
// import "animate.css";
import "../css/style.css";
import "../css/responsive.css";

main();

async function getUsersExample() {
    const state = new StateManagement();
    const Api = new RandomUserApi();
    const data = await Api.getUsers(5);

    state.setState({ users: data });
}

getUsersExample();
