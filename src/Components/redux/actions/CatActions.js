export const addNewAccount = (account)=>{

    return async(dispatch, getState,getFirestore)=>{
        let firestore = getFirestore()
        try {
            await firestore.collection("banks").add({
                ...account, timestamp: firestore.fieldValue.serverTimestamp()})
        } catch (error) {
            
        }
       
        // dispatch({
        //     type:"ADD_ACCOUNT",
        //     payload:account
        // })
    }
}

export const deleteAccount = (id)=>{

    return (dispatch, getState,getFirestore)=>{
        let firestore = getFirestore()
        firestore.collection("banks").doc(id).delete()
        // dispatch({
        //     type:"DELETE_ACCOUNT",
        //     payload:id
        // })
    }



    // return       {
    //     type:"DELETE_ACCOUNT",
    //     payload:id
    // }
}

export const editAccount = (account)=>{
    return async(dispatch, getState,getFirestore)=>{
        let firestore = getFirestore()
        try {
            await firestore
            .collection("banks")
            .doc(account.id)
            .update(account)
        } catch (error) {
            
        }
        
        // dispatch({
        //     type:"UPDATE_ACCOUNT",
        //     payload:account
        // })
}}


export const getAllAccounts = (account)=>{

    return (dispatch, getState,getFirestore)=>{
        let firestore = getFirestore()
        try {
            firestore
            .collection("banks")
            .orderBy("timestamp", "asc")
            .onSnapshot(account.id)
            .set(account)

        } catch (error) {
            
        }
        // dispatch({
        //     type:"ADD_ACCOUNT",
        //     payload:account
        // })
    }
}
 

// export function removeAccount(id){
//     return {
//         type:"DELETE_ACCOUNT",
//         payload:id
//     }
// }

// export function updateAccountInfo(account){
//     return {
//         type:"UPDATE_ACCOUNT",
//         payload:account
//     }
// }