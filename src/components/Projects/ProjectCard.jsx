export const ProjectCard = ({ title, text, src, href }) => {
  return (
    <div className="project-card-wrapper">
      <h3>{title}</h3>
      <div className="project-card-content">
        <img src={src} alt="" />
        <p>{text}</p>
        <button>
        <a href={href}>check out the live site</a>
        </button>
      </div>
    </div>
  );
};
