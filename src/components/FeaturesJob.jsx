import { useEffect, useState } from "react";
import Job from "./Job"



const FeaturesJob = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        // const res = await fetch('jobData.json');
        // const data = await res.json();
        // setJobs(data);

        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])

    // console.log(jobs);

    return (
        <div>
            <h1 className="text-2xl font-extrabold">This is feater job ...... </h1>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={`flex items-center justify-center mt-4 ${dataLength == jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show all</button>
            </div>
        </div>
    );
};

export default FeaturesJob;