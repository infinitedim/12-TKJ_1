class SimpleStateManagement {
    constructor({ name = "", initialState = {} }) {
        this._state = initialState;
        this._name = name;
    }

    getState(stateName) {
        return this._state[stateName];
    }

    setState(newState = {}) {
        this._state = { ...this._state, ...newState };
    }
}

const StateManagement = new SimpleStateManagement({
    name: "SimpleStateManagement",
    initialState: {
        users: [],
    },
});

const setState = (newState = {}) => {
    StateManagement.setState(newState);
};

const useState = (stateName = "") => {
    const state = StateManagement.getState(stateName);
    return state;
};

export { useState, setState };
