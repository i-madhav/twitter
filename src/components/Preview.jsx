import React from "react";
import JobDetails from "./JobDetails";
import EditJobDetails from "./EditJobDetails";

const Preview = () =>{
    return(
        <div className=" flex mb-10">
            <JobDetails/>
            <EditJobDetails/>
        </div>
    )
}

export default Preview;