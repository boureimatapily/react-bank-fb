let initialState = [
    {
        accountName: "hello",
        accountNumber:"555569650",
        bankName:"bko",
        bankBranch:"kalaban",
        id:"2343777"
    },

    {
        accountName: "ous",
        accountNumber:"1558561",
        bankName:"susu",
        bankBranch:"booo",
        id:"5464445"
    }
]


export default (state = initialState, action)=>{
    switch(action.type){
        case "ADD_ACCOUNT":
            console.log('add')
            return [...state, action.payload]

        case "DELETE_ACCOUNT":
             return state.filter((account)=>{
                 return account.id!==action.payload
             })
        case "EDIT_ACCOUNT":
            return state.map(account=>{
                if(account.id===action.payload.id)
                    return action.payload;
                return account;

            })
        default:
            return state;
    }
}