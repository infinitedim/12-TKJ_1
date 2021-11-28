import 'regenerator-runtime';
import main from './views/main';
import RandomUserApi from './services/RandomUserApi';
import { setState, useState } from './services/StateManagement';
// import "animate.css";
import "../css/style.css";
import "../css/responsive.css"

main();

async function generateRandomUser() {
    const data = await RandomUserApi.generateUsers(5);

    setState({
        users: data,
    });

    console.info(JSON.stringify(useState("users"), 0, 4));
}

generateRandomUser();