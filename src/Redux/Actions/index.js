export const incrementAction = (num) =>{
    return({
        type: "INCREMENT",
        payload: num
        })
}
export const decrementAction = (num) =>{
    return({
        type: "DECREMENT",
        payload: num
        })
}