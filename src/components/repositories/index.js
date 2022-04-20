import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToStarredRepos,
  removeFromStarredRepos,
} from "../../redux/profileFinder.slice";

/**
 * If the first object's created_at property is less than the second object's created_at property,
 * return -1. If the first object's created_at property is greater than the second object's created_at
 * property, return 1. Otherwise, return 0.
 * @param a - The first object to compare.
 * @param b - the second object to compare
 * @returns the value of the comparison.
 */
function compare(a, b) {
  if (a.created_at < b.created_at) {
    return -1;
  }
  if (a.created_at > b.created_at) {
    return 1;
  }
  return 0;
}

const Repositories = ({ profileRepos }) => {
  const dispatch = useDispatch();
  const repos = [...profileRepos];
  const starredRepos = useSelector(
    (state) => state.profileFinderReducer.starredRepos
  );
  /* Sorting the repos array by the created_at property. */
  repos.sort(compare);
  return (
    <div className="mt-10 border-t-2 pt-3">
      {repos && repos.length > 0 ? (
        <VerticalTimeline lineColor="#ffb533">
          {repos.map((repo, idx) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f8745d",
                color: "#000",
              }}
              key={idx}
              contentArrowStyle={{
                borderRight: "7px solid  #f8745d",
              }}
              date={repo.created_at}
              icon={<RiGitRepositoryCommitsFill />}
              iconStyle={{ background: "#ffb533", color: "#fff" }}
            >
              <div className="text-white overflow-hidden">
                <a href={repo.html_url} target={"_blank"} rel="noreferrer">
                  <h3 className="vertical-timeline-element-title pt-2 uppercase text-sm sm:text-base md:text-lg">
                    {repo.name}
                  </h3>
                </a>
                <p>{repo.language}</p>
                {starredRepos.includes(repo) ? (
                  <AiFillStar
                    onClick={() => dispatch(removeFromStarredRepos({ repo }))}
                    className="text-3xl absolute right-1 top-1 sm:right-2 sm:top-2 hover:bg-black/10 rounded-full px-1 cursor-pointer"
                  />
                ) : (
                  <AiOutlineStar
                    onClick={() => dispatch(addToStarredRepos({ repo }))}
                    className="text-3xl absolute right-1 top-1  sm:right-2 sm:top-2 hover:bg-black/10 rounded-full px-1 cursor-pointer"
                  />
                )}
              </div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: "#e5e7eb", color: "#5B0A91" }}
          />
        </VerticalTimeline>
      ) : (
        <img
          src="./images/not-found.png"
          alt="not found"
          className="w-[70%] sm:w-[40%] mx-auto my-2"
        />
      )}
    </div>
  );
};

export default Repositories;
