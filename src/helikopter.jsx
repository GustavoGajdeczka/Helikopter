import React, {Component} from "react"
import './helikopter.css'

class Helikopter extends Component {
    render() {
        return (
            <div class="body-container">
                <div class="helicopter">
                    <div class="helicopter--body">
                        <div class="mirror"></div>
                        <div class="body__strip"></div>
                        <div class="heli-foot-container">
                            <div class="front-foot"></div>
                            <div class="rear-foot"></div>
                            <div class="foot"></div>
                        </div>
                        <div class="helicopter--top">
                            <div class="top-blade top-blade__spinning"></div>
                        </div>
                        <div class="helicopter--tail">
                            <div class="tail-container">
                                <div class="tail-bearing"></div>
                                <div class="tail-blade tail-blade__spinning"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Helikopter;

   

    
         