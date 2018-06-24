import React, {Component} from "react";
import "./TemplateToggleBtns.css";

export class TemplateToggleBtns extends Component {
    // state = {
    //     template: <img src={ require('./minimalist-temp.png') } />
    // }

    // handleClickMinimalist = () => {
    //     this.setState({
    //         template: <img src={ require('./minimalist-temp.png') } />
    //     })
    // }

    // handleClickStylized = () => {
    //     this.setState({
    //         template: <img src={ require('./stylized-temp.png') } />
    //     })
    // }

    render() {
        return(
            <div>
                <div className="toggle-buttons pt-4 pb-4 btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active"  onClick={this.handleClickMinimalist}>
                        <input type="radio" name="options" id="Minimalist" autoComplete="off"/> Minimalist
                    </label>
                    <label className="btn btn-secondary" onClick={this.handleClickStylized}>
                        <input type="radio" name="options" id="Stylized" autoComplete="off"/> Stylized
                    </label>
                </div>
                <div id="template">
                    {this.state.template}
                </div>
            </div>
        )
    }
}