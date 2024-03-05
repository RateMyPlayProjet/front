import { isVisible } from "@testing-library/user-event/dist/utils";
import React from "react";

class Divider extends React.Component{
    constructor(props){
        super(props);
        console.log("Objet Actualisé")
        this.state = {
            isVisible: true,
            sentence: "tata",
        };
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    componentDidMount(){
        this.setState(() =>({
            sentence: "toto",
        }));
    }

    componentWillUnmount(){
        console.log("unMount")
    }

    componentDidUpdate(){
        console.log("c'est moi wsh")
    }

    handleVisibility(e){
        e.preventDefault()
        this.setState((prevState) =>({
                isVisible: !prevState.isVisible,
            }));
    }

    render(){
        return(
        <div 
        onDoubleClick={this.handleVisibility}
        style={
            {
                height:"10px",
                background:this.state.isVisible ? "blue" : "white",
                width:"90vw",
            }}
        >{this.state.sentence}</div>
        );
    }
}

export default Divider;