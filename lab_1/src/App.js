import './App.css';

function App() {
  return (
      <main>
        <div className="container">
        <div className="header">
          <h2>Site Name</h2>
          <div className="X">
            <h2 className="Title">Some X</h2>
          </div>
        </div>
        <div className="left-top">
          <p>
            Page 1 Content Page 1 Content Page 1 Content Page 1 Content Page 1
            Content Page 1 Content
          </p>
          <p>
            Page 1 Content Page 1 Content Page 1 Content Page 1 Content Page 1
            Content Page 1 Content
          </p>
        </div>
        <div className="middle">
          <h2>Page 1 Title</h2>
          <p>
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
          </p>
          <p>
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
          </p>
        </div>
        <div className="right">
          <div className="menu">
            <ul>
              <li>
                <a href="/" >Page 1</a>
              </li>
              <li>
                <a href="/page2" >Page 2</a>
              </li>
              <li>
                <a href="/page3" >Page 3</a>
              </li>
              <li>
                <a href="/page4" >Page 4</a>
              </li>
              <li>
                <a href="/page5" >Page 5</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="left-bottom">
          <p>
            Page 1 Content Page 1 Content Page 1 Content Page 1 Content Page 1
            Content Page 1 Content
          </p>
          <img
            className="image-leftside"
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            alt=""
          />
        </div>
        <div className="footer">
        <div className="text_footer">
          <p>
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text Some text
            Some text Some text Some text Some text Some text Some text
          </p>
          </div>
          <div className="Y">
            <h2 className="Title">Some Y</h2>
          </div>
        </div>
      </div>
      </main>
  );
}

export default App;
