import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import Workout from './Workout';

import { QUERY_THOUGHTS, QUERY_WORKOUT } from '../utils/queries';


const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS, QUERY_WORKOUT);
  const thoughts = data?.thoughts || [];
  const workout = data?.workout || [];

  return (
    <main>

        {/* who are we */}
        <section id="who-are-we">
          <h2>who are we?</h2> <br />
          <p>We are here to inspire you to get up and start working out!<br />
            how many times have you told your self you need to start working out and eating better?<br />
            I am sure most of you are nodding your head right now saying yes that me!<br />
            Well we have the perfect solution for you with just one click away you can start your journey of exercising and
            eating healthy.<br />
            Click that sign up button and GETUP and do the exercises.</p>
          <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="workout img" />
        </section>
        {/* upcoming-events */}
        <section id="events">
          <h2>Get UP and join us for upcoming events!</h2>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="YOGA" />
              <div className="card-body">
                <h5 className="card-title">YOGA</h5>
                <p className="card-text">Join our Yoga class. EVERY thursday at 6pm!</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1591504771094-a1ca4de142d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym94aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="boxing image" />
              <div className="card-body">
                <h5 className="card-title">BOXING</h5>
                <p className="card-text">Join our boxing class. For all experience levels. EVERY friday at 6pm!
                </p></div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0=" alt="weight lifting" />
              <div className="card-body">
                <h5 className="card-title">WEIGHT LIFTING</h5>
                <p className="card-text">Join our Weight lifting class. EVERY saturday at 2pm!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial" style={{paddingLeft: '10%'}}>
          <div className="innerdiv">
            {/* div1 */}
            <div className="div1 eachdiv">
              <div className="userdetails">
                <div className="detbox">
                  <p className="name">Brad</p>
                  <p className="designation">Gym user</p>
                </div>
              </div>
              <div className="review">
                <h4>Best EXPERIENCE!</h4>
                <p>“ The staff is super friendly and outgoing! You can tell they really care about you. If you ask them how to use a specfic machine they will get up and show you! I have never had this type of experience any where else.”</p>
              </div>
            </div>
            {/* div2 */}
            <div className="div2 eachdiv">
              <div className="userdetails">
                <div className="detbox">
                  <p className="name">John</p>
                  <p className="designation">Member</p>
                </div>
              </div>
              <div className="review">
                <h4>Love it!</h4>
                <p>“By far one of the best experiences I have ever had! The gym is so clean and organized. There is so much space in between machines you dont feel squished! I love all the classes that they have; i wish i had more time to go to more!”</p>
              </div>
            </div>
            {/* div3 */}
            <div className="div3 eachdiv">
              <div className="userdetails">
                <div className="detbox">
                  <p className="name dark">Casey</p>
                  <p className="designation dark">Active Member</p>
                </div>
              </div>
              <div className="review dark">
                <h4>Lost so much weight!</h4>
                <p>“ The staff at the gym helped me lose so much weight! They came up with the perfect exercises and food plan for me! I have never felt so good; i cant wait to continue my journey here!  ”</p>
              </div>
            </div>
            {/* div4 */}
            <div className="div4 eachdiv">
              <div className="userdetails">
                <div className="detbox">
                  <p className="name dark">John</p>
                  <p className="designation dark">Gym member</p>
                </div>
              </div>
              <div className="review dark">
                <h4>Wonderful experience</h4>
                <p>“ This is by far one of the best gyms I have been to. I usually do not recommend places to people, but I recommended this gym to all my friends and family. ”</p>
              </div>
            </div>
            {/* div5 */}
            <div className="div5 eachdiv">
              <div className="userdetails">
                <div className="detbox">
                  <p className="name">Fred</p>
                  <p className="designation">Gym member</p>
                </div>
              </div>
              <div className="review">
                <h4>By far best experiences.</h4>
                <p>“I was always so nervous to go to a gym because I was nervous people will judge me becuase I do not know what to do at the gym. I dont know how to use the machines and I dont know what exercises I need. Everyone there was so helpful and helped me; they showed me how to use the machines and what machines to use for the results I need. Will defiently go back! "</p>
              </div>
            </div>
          </div>
          <div className="img" style={{display: 'flex'}}>
            <img src="https://1000logos.net/wp-content/uploads/2017/10/bbb-logo-colors.jpg" style={{width: '100%', height: '100%', marginLeft: '300%'}} />
            <img src="https://www.revitalifemd.com/wp-content/uploads/2019/09/google-reviews-logo-e1569437396506.jpg" style={{width: '100%', height: '100%', marginLeft: '100%'}} />
          </div>
        </section>
      </main>
    );
  }
      /* <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >

          <Workout 
            workout={workout}
            title="Try this workout"
          
          />

          
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Find some motivation today..."
            />
          )}
        </div>
      </div> */
    
 
export default Home;
