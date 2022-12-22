const projects = [
  {
    name: "Project 1",
    link: "https://www.google.com",
  },
];

const Portfolio = () => {
  return (
    <ul>
      {projects.map((project) => (
        <li>
          <span>{project.name}</span>
          <a href={project.link}>go to the project</a>
        </li>
      ))}
    </ul>
  );
};

export default Portfolio;
