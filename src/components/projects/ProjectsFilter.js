const selectOptions =  [
    "Web Application",
    // add more options here in future
]

const ProjectsFilter = ({ setSelectedProject }) => {
    return(
        <select
            onChange={(e)=> {
                setSelectedProject(e.target.value)
            }}    
            className="px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light"
        >
            <option value={setSelectedProject} className="text-sm sm:text-md">
                All Projects
            </option>

            { selectOptions.map(( option ) => (
                <option className="text-normal sm:text-md" key={option}>
                    { option }
                </option>
            ))}
        </select>
    )
}

export default ProjectsFilter;