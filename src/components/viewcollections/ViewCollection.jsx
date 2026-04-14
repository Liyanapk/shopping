import React from "react";
import "./ViewCollection.css"
import { useNavigate } from 'react-router-dom';

export const ViewCollection = () => {
    const navigate = useNavigate();

    const handleViewCollections = () => {
        navigate('/product');
    };

    return(

        <div className="collections">
            <button className="viewcollection" onClick={handleViewCollections}>VIEW COLLECTIONS</button>
        </div>
    )
}