import React from 'react';
import { Wrap } from './Home.styled';

const Home = () => {
    return (
      <Wrap >
        <h1>
          Welcome! To see your contacts please Log in or Sign up{' '}
          <span role="img" aria-label="Arrow icon">
          ↗️
          </span>
        </h1>
      </Wrap>
    );
  }

export default Home