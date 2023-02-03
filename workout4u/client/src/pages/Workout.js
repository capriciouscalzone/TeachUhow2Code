import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_WORKOUT } from "../utils/queries";

const Workout = () => {
  const { workoutId } = useParams();

  const { loading, data } = useQuery(QUERY_WORKOUT);

  const workouts = data?.workouts || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        <br />
        <span style={{ fontSize: "1rem", margin: 5 }}>
          {workouts.map((workout) => (
            <div key={workout._id}>
              <div>Workout: {workout.workoutName}</div>
              <div>-----------------------------</div>
              <div>Time: {workout.workoutTime} mins</div>
              <div>-----------------------------</div>
              <div>Instructions: {workout.instructions}</div>
              <div>-----------------------------</div>
              <div>-----------------------------</div>
            </div>
          ))}
        </span>
      </h3>
    </div>
  );
};

export default Workout;
