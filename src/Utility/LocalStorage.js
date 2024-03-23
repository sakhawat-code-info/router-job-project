const getStoredJobApplication = () => {
    const alreadyStoredJobApplication = localStorage.getItem('job-application');
    if (alreadyStoredJobApplication) {
        return JSON.parse(alreadyStoredJobApplication);
    } else {
        return [];
    }
}


const saveJobApplication = (id) => {
    const allreadyHave = getStoredJobApplication();
    const exist = allreadyHave.find(itemId => itemId === id);

    if (!exist) {
        allreadyHave.push(id)
        localStorage.setItem('job-application', JSON.stringify(allreadyHave))
    }
}



















export { getStoredJobApplication, saveJobApplication }