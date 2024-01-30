const ProjectList = (props) => {
    const { projects } = props;
    return (
        <div className="projectlist">
        {projects.map((item) => (
            <img className="projectlist-item" src={item.img} alt={item.category} />
        ))}
        </div>
    );
}

export default ProjectList;
