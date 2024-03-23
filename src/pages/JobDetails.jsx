import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const { job_title, job_description, experiences } = job;

    const handleApplyJobBtn = () => {
        saveJobApplication(idInt);
        toast("Apply successfully !");
    }


    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">{job_title}</h1>
                    <p className="px-8 mt-8 mb-12 text-lg">{job_description}</p>
                    <p className="px-8 mt-8 mb-12 text-lg">{experiences}</p>
                    <div className="flex flex-wrap justify-center">
                        <button onClick={handleApplyJobBtn} className="btn btn-secondary">Apply Now</button>

                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;