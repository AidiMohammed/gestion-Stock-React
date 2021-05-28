const initState = {
    listProducts: [
        {id: 1 , ref: "1254" , Qt: 35 , Provaider: "Carreaux deco", Unite: "m²" , Descreption: "Carrelage de sol 40 x 40", buyingprice: "60,00", sellingprice: "65.00"},
        {id: 2 , ref: "Mazar" , Qt: 125 , Provaider: "Ceram oujda", Unite: "m²" , Descreption: "Carrelage de sol 35 x 35", buyingprice: "58,00", sellingprice: "62.00"},
        {id: 3 , ref: "Malaga" , Qt: 95 , Provaider: "Carreaux deco", Unite: "m²" , Descreption: "faience de mur 25 x 40", buyingprice: "56,00", sellingprice: "60.00"},
    ]
};

export default function(state = initState,action)
{
    /* 
        Actions 
            get Products
            Add New Product
            Withdraw a quantity
            Add quantity
            Update Product
    */
    switch (action.type) {
        case "GET_PRODUCTS":
            return{...state}
        default:
            {return state}
    }
}