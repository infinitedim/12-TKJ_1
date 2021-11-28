class StateManagement {
    constructor() {
        this.state = {
            githubData: {},
        };
    }

    getState(state) {
        return this.state[state];
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        console.info(this.getState("githubData"));
    }
}

export default StateManagement;
