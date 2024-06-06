export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card">
              <img src="/images/react.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn bt-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card">
            <img src="/images/bach.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/0400/Home"
                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  MU0400 Introduction to Theory
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Classical music theory. 
                </p>
                <a href="#/Kanbas/Courses/0400/Home" className="btn bt-primary"> Go </a>
              </div>
            </div>
          </div>


          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card">
            <img src="/images/summertime.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/0570/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  MU0570 Jazz and Pop Harmony
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Develop an understanding of the Great American Songbook and learn to compose your own standards.
                </p>
                <a href="#/Kanbas/Courses/0570/Home" className="btn bt-primary"> Go </a>
              </div>
            </div>
          </div>
          
          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card">
            <img src="/images/racket.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/0170/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS17 Introduction to Computer Science
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Introductory computer science course. 
                </p>
                <a href="#/Kanbas/Courses/0170/Home" className="btn bt-primary"> Go </a>
              </div>
            </div>
          </div>
          

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card">
            <img src="/images/cs22.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/0220/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS22 Discrete Structures and Probability
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Feeling 22!
                </p>
                <a href="#/Kanbas/Courses/0220/Home" className="btn bt-primary"> Go </a>
              </div>
            </div>
          </div>


          <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card">
            <img src="/images/ipa.png" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/0300/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CLPS300 Introduction to Linguistics
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Introduction to phonology, syntax, semantics, and pragmatics.
                </p>
                <a href="#/Kanbas/Courses/0300/Home" className="btn bt-primary"> Go </a>
              </div>
            </div>
            </div>
          

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
          <div className="card">
            <img src="/images/banana.webp" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/101/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  BN101 Introduction to Bananas
                </a>
                <p className="wd-dashboard-course-title card-text">
                  What are they?
                </p>
                <a href="#/Kanbas/Courses/101/Home" className="btn bt-primary"> Go </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{width: "270px"}}>
          <div className="card">
          <img src="/images/bananas.jpg" />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/102/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                BN102 Banana Studies
              </a>
              <p className="wd-dashboard-course-title card-text">
                How are they?
              </p>
              <a href="#/Kanbas/Courses/102/Home" className="btn bt-primary"> Go </a>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>
  );}
  