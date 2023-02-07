import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Motivations Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
<<<<<<< HEAD
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
=======
          <div key={thought._id} className=" mb-3">
            <h4 style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40,  backgroundImage: `url("/bg-colorful-polygon.png")` }} className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  style={{ fontFamily: "cursive"}}
                  className="text-dark"
>>>>>>> mikes
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this motivation on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this motivation on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
<<<<<<< HEAD
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
=======
            <div style={{ backgroundImage: `url("/grey-gradient.png")`, backgroundSize: "cover",  backgroundRepeat: "no-repeat" }} className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              style={{ color:'black', fontWeight: "bolder", borderBottomLeftRadius: 40, borderBottomRightRadius: 40,   backgroundImage: `url("/purp-triangles.png")` }}
>>>>>>> mikes
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this motivation.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
