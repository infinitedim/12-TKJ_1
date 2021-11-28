class StateManagement {
    constructor() {
        this.state = {
            users: [],
        };
    }

    getState(state) {
        return this.state[state];
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        console.info(this.getState("users"));
    }
}

export default StateManagement;
