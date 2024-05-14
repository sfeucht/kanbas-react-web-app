export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/react.png" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              {/* <a href="#/Kanbas/Courses/1234/Home"> Go </a> */}
            </div>
          </div>
          <div className="wd-dashboard-course"> 
          <img src="/images/bach.jpg" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/0400/Home">
                MU0400 Introduction to Theory
              </a>
              <p className="wd-dashboard-course-title">
                Learn about Western musical theory. 
              </p>
              {/* <a href="#/Kanbas/Courses/0400/Home"> Go </a> */}
            </div>
          </div>
          <div className="wd-dashboard-course">
          <img src="/images/summertime.png" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/0570/Home">
                MU0570 Jazz and Pop Harmony
              </a>
              <p className="wd-dashboard-course-title">
                Develop an understanding of the Great American Songbook and learn to compose your own standards.
              </p>
              {/* <a href="#/Kanbas/Courses/0570/Home"> Go </a> */}
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/racket.png" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/0170/Home">
                CS17 Introduction to Computer Science
              </a>
              <p className="wd-dashboard-course-title">
                Introductory computer science course. 
              </p>
              {/* <a href="#/Kanbas/Courses/0170/Home"> Go </a> */}
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/cs22.png" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/0220/Home">
                CS22 Discrete Structures and Probability
              </a>
              <p className="wd-dashboard-course-title">
                Feeling 22!
              </p>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/ipa.png" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/0220/Home">
                CLPS300 Introduction to Linguistics
              </a>
              <p className="wd-dashboard-course-title">
                Introduction to phonology, syntax, semantics, and pragmatics.
              </p>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/banana.webp" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/101/Home">
                BN101 Introduction to Bananas
              </a>
              <p className="wd-dashboard-course-title">
                What are they?
              </p>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/bananas.jpg" width={100} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/102/Home">
                BN102 Banana Studies
              </a>
              <p className="wd-dashboard-course-title">
                How are they?
              </p>
            </div>
          </div>

        </div>
      </div>
  );}
  