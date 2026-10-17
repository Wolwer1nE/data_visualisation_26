import {useEffect, useRef} from "react"
function Chart({forecast}){


    const svgRef = useRef(null);
    // todo: render svg!
    return (
        <div>
            <svg ref={svgRef} className="chart">

            </svg>
        </div>
    )
}

export {Chart}