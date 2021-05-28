const initState = {
    listCustomer: [
        {id: 1 , name: "Mohammed" , firstname: "Aidi" , email: "mohammed@gmail.com", tel: "0633356139"},
        {id: 2 , name: "Karim" , firstname: "Bouade" , email: "karim@gmail.com", tel: "0665874858"},
        {id: 3 , name: "Ahmed" , firstname: "hamadi" , email: "ahmed@gmail.com", tel: "0621548987"},

    ]
};

export default function(state = initState,action)
{
    /* 
        Actions 
            Add New Customer
            Update Customer 
            Remove Customer
    */
    switch (action.type) 
    {
        case "GET_CUSTOMER":
            {return state}

        default:
            {return state}
    }
}