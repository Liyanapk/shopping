import React, { createContext, useState } from "react";
import { mockProducts } from "../data/mockProducts";


export const DataContext = createContext()


export const DataProvider = ({children})=>{


    const[data] = useState(mockProducts)


    return(
       <DataContext.Provider value={data} >
       {children}
       </DataContext.Provider>

    )


}