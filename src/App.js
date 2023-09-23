import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <div className="lorem">
            LOREM IPSUM
          </div>
          <div className="link">
            LINK1 
          </div>
        </nav>
      </header>
      <main className="main">
        <div className="left-side" >
          THIS IS SOME CONTENT ALIGNED IN THE CENTER<br />VERTICALY AND HORIZONTALLY</div>
        <div>

        </div>
      </main>

      <div className="footer">
        THIS IS THE FOOTER CONTENT WHICH IS ALIGNED <br /><span className="footer-txt">LEFT</span>
      </div>


    </div>
  );
}

export default App;