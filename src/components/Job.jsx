
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id, logo, job_title, company_name } = job;
    // console.log(id);
    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{job_title}</span>
                <h2 className="text-xl font-semibold tracking-wide">{company_name}</h2>
            </div>
            <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            <br />
            <Link to={`/job/${id}`}><button className='btn btn-accent'>Show Details</button></Link>
        </div>
    );
};


Job.propTypes = {
    job: PropTypes.boj
};

export default Job;