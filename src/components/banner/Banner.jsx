import React from "react";
import "./Banner.css"
import { ViewCollection } from "../viewcollections/ViewCollection";

export const Banner = () => {


    return (
        <div className="banner">

            <div className="banner-items">
                <h5>WE ARE BEYOND IMAGINATION</h5>
                <h1 className="infinite">Infinite Possibilities </h1>
                <h3 className="incre">increase your exposure,costumers & sales</h3>
                <ViewCollection className="bannaer-button" />
            </div>

        </div>
    )
}