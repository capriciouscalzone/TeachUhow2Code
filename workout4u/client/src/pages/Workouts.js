import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUT } from '../utils/queries';

const Workouts = () => {
  const { workoutId } = useParams();

  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: { workoutId: workoutId },
  });

  const workout = data?.workout || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
    <br />
        <span style={{ fontSize: '1rem' }}>
          {workout.workoutName}

          {workout.workoutTime}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {workout.instructions}

        </blockquote>
      </div>
    </div>
  );
};

export default Workouts;
