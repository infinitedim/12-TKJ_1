import "regenerator-runtime";
import main from "./views/main";
import GithubApi from "./services/GithubApi";
import StateManagement from "./services/StateManagement";
// import "animate.css";
import "../css/style.css";
import "../css/responsive.css";

main();

const state = new StateManagement();

async function getData() {
    const Api = new GithubApi("infinitedim");
    const data = await Api.getData();

    state.setState({ githubData: data });
}

getData();
