import React from 'react';
import About from './About';

const Home = () => {
  return (
    <div>
      <div className='box'>
        <div className='section-home'>
          <header className='header'>
            {/* IMAGE */}

            <div>
              <div alt='Demo' className='header-image' />
            </div>

            {/* Content */}

            <div className='header-content'>
              <h1 className='header-primary'>Welcome to EveMa</h1>
              <p>
                Greetings to everyone, <br /> This is the Event Management page
                for the large events and <br /> for more about events <br />{' '}
                scroll down
              </p>
            </div>
          </header>
        </div>
        <About />
      </div>
      <div className='footer'>
        <div className='copyright'>Copyright &copy; 2020.</div>
        <div className='social'>
          <i className='fa fa-facebook' />
          Facebook
          <i className='fa fa-twitter' />
          Twitter
          <i className='fa fa-linkedin' />
          LinkedIn{' '}
        </div>
      </div>
    </div>
  );
};

export default Home;
