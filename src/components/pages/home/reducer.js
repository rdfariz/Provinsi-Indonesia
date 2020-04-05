const initialState = {
    users: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "TES":
            return {
                ...state,
                users: [
                    {
                        id: "Fariz",
                        text: "TesText",
                        completed: false
                    }
                ]
            }
            break;
        default:
            return {
                ...state,
                users: [
                    {
                        id: "Fariz",
                        text: "TesText",
                        completed: false
                    }
                ]
            }
            break;
    }
}