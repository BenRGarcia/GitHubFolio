import React from 'react';
import "./TemplatePage.css";
import  { SaveTemplateBtn } from "../../components/SaveTemplateBtn/SaveTemplateBtn";
import  { TemplateToggleBtns } from "../../components/TemplateToggleBtns/TemplateToggleBtns";

export const TemplatePage = props => {
  return(
    <div className='col-lg-10 offset-lg-2'>
      <SaveTemplateBtn />
      <TemplateToggleBtns />
    </div>
  )
}