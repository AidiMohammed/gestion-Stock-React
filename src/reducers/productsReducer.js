const initState = {
    listProducts: [
        {id: 1 , ref: "1254" , Qt: 35 , Provaider: "Carreaux deco", Unite: "m²" , Descreption: "Carrelage de sol 40 x 40"},
        {id: 2 , ref: "Mazar" , Qt: 125 , Provaider: "Ceram oujda", Unite: "m²" , Descreption: "Carrelage de sol 35 x 35"},
        {id: 3 , ref: "Malaga" , Qt: 95 , Provaider: "Carreaux deco", Unite: "m²" , Descreption: "faince de mur 25 x 40"},
    ]
};

export default function(state = initState,action)
{
    /* 
        Actions 
            Add New Product
            Withdraw a quantity
            Add quantity
            Update Product
    */
    switch (action.type) {
        default:
            {return state}
    }
}