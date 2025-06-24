import React from "react";
import './faq.css';


function Faq(){
    return(
        <section className="faq">
  <div className="faq-empty-1" />
  <div className="faq-empty-2" />
  <p className="faq-p1">FAQ’s</p>
  <p className="faq-p2">We want to help you with all your doubts</p>
  <div className="faq-container">
    <div className="faq-item active">
      <div className="faq-question">
        <h3>This is a frequently asked question?</h3>
        <span className="arrow">⌃</span>
      </div>
      <div className="faq-answer">
        <p>
          Lorem ipsum dolor sit amet consectetur. Tellus eget consequat
          tortor odio maecenas cursus leo dui. Pulvinar quam sit quam
          feugiat laoreet morbi tellus dui massa.
        </p>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">
        <h3>This is a frequently asked question?</h3>
        <span className="arrow">⌃</span>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">
        <h3>
          This is a very long frequently asked question about our services
          with more than one line?
        </h3>
        <span className="arrow">⌃</span>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">
        <h3>This is a Frequently asked question?</h3>
        <span className="arrow">⌃</span>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">
        <h3>This is a question?</h3>
        <span className="arrow">⌃</span>
      </div>
    </div>
    <div className="faq-item">
      <div className="faq-question">
        <h3>This is a question?</h3>
        <span className="arrow">⌃</span>
      </div>
    </div>
  </div>
</section>

    )
}
export default Faq;