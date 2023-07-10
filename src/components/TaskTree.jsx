import { hierarchy, select } from "d3"
import { useRef } from "react";

function TaskTree(props){
    
    const svgRef = useRef();
    const divRef = useRef();

    const root = hierarchy(props.task);
    console.log(root.descendants());
    return(
        <div ref={divRef}>
            <svg ref={svgRef}></svg>
        </div>
        
    )

}
export default TaskTree;