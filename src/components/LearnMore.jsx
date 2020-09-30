import React from 'react';

function LearnMore() {
  return (
    <div className="learn-more">
      <div className="container">
        <h3 className="title">Learn more</h3>
        <div className="subtitle">
          Visit Hyundai official site for get more information about Hyundai
          Azera.
        </div>
        <a
          href="https://www.hyundai.ru/"
          target="_blank"
          className="button button__blue"
        >
          Visit Hyundai Now
        </a>
      </div>
    </div>
  );
}

export default LearnMore;
