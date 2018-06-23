import React from "react";
import "./TemplateToggleBtns.css";

export const TemplateToggleBtns = props => {
    // onClick = (id) => {
    //     if (id === "Minimalist") {
    //         return <img src={ require('./minimalist-temp.png') } />
    //     } else {
    //         return <img src={ require('./stylized-temp.png') } />
    //     }
    // }
  return(
    <div class="toggle-buttons pt-4 pb-4 btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="radio" name="options" id="Minimalist" autocomplete="off" checked /> Minimalist
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options" id="Stylized" autocomplete="off" /> Stylized
        </label>
    </div>
  )
}