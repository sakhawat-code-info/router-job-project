import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    useEffect(() => {
        const getLocalData = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = jobs.filter(job => job.id === getLocalData.includes(job.id));
            console.log(jobs, jobApplied);
        }
    }, [])



    return (
        <div>
            <h1>this is applied jobs</h1>
        </div>
    );
};

export default AppliedJobs;