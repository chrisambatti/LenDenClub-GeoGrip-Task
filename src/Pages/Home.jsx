import '../assets/index.css'
// import './script'
export default function Home() {
  return (
    <>
    <div className="container-fluid">
      <div className="row align-item-center justify-content-center">
        <div className="col=md-5 p-3"><br/><br/><br/>

          <h2 style={{fontSize: '8vh'}}>Seamlessly manage <br/>addresses</h2>
          <p style={{fontSize: '40px'}}>
            one click at a time.<i className="ri-cursor-fill" style={{color:'black'}}></i>
          </p>

          <a href="add">
          <button className="click-btn">
            <span>Click Here</span>
          </button>
        </a>
        </div>

      </div>    
    </div>
    <br/><br/><br/><br/>
      <footer>
        <div className="footer__bar" style={{color: 'black', fontSize: '15px'}}>
            Made with <i className="ri-heart-fill" style= {{color: 'red'}}></i> by Christopher
          </div>
      </footer>
    </>
  );
}
