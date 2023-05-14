import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepo = async (name) => {
  const response = await fetch(`https://api.github.com/repos/rsingh0/${name}`, {
    next: {
      revalidate: 60, //cache data for 60 secs
    },
  });

  // loading data
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const repos = await response.json();
  return repos;
};
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watcher_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
