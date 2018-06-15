import React from "react";
import "./PreviewPage.css";

export const PreviewPage = props => {
  return(
  <div className= "minPageContainer">
    <div className="container pt-4">
      <div className="section pt-4 pb-4">
        <div className="titlefont pt-4 pb-4">
            <a>Preview Page</a>
        </div>
      </div>
    </div>
  </div>
  )
}

// const stylelistic = {
//   style: {
//     // ...
//   },
//   layout: {
//     // ...
//   }
// };

// const minimalist = {
//   style: {
//     // ...
//   },
//   layout: {
//     // ...
//   }
// };

// export class Example extends Component {
//   this.state = {
//     chosenStyle: ''
//   };

//   componentDidMount() {
//     this.getChosenStyle()
//   }

//   getChosenStyle = () => {
//     fetch('/portfolio')
// 	  .then(resp => resp.json())
//       .then(data => {
//       this.setState({
//         chosenStyle: data.chosenStyle
//       });
//     })
//   };

//   render() {
//     return (
//       <SomeComponent 
//         chosenStyle={this.state.chosenStyle === 'stylistic' ? stylelistic : minimalist}
//       />
//     );
//   }
// }