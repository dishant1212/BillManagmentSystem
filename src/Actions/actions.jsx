

export const  addBill = (bill)=>{
    console.log(bill)
    return{
        type:"LIST_DATA",
        payload:bill
    }
}