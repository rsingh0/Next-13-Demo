import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
  const response = await fetch("https://api.github.com/users/rsingh0/repos", {
    next: {
      revalidate: 60, //cache data for 60 secs
    },
  });

  // loading data
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const repos = await response.json();
  return repos;
};

const RepoPage = async () => {
  const repos = await fetchRepos();
  return (
    <>
      <h2>{`Total ${repos.length} Projects`}</h2>
      <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar />
                    {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                  <span>
                    <FaEye>{repo.watcher_count}</FaEye>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RepoPage;
