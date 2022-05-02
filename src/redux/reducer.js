import { SetAmount, SetSize } from "./action";

const INITIAL_STATE = {
    amount: 1,
    size: "mid"
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_AMOUNT":
            return {...state, amount: action.payload}
        case "SET_SIZE":
            return {...state, size: action.payload}
        default:
            return state;
    }
}