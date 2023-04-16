import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className={'app-wrapper'}>
          <header className={'header'}>
              <img
                  className={'logo'}
                  src={'https://cfcdn.apowersoft.info/astro/picwish/_astro/scene-logo-after@530w.df3314dd.png'}
                  alt={logo}/>
          </header>

          <nav className={'nav'}>
              <div>
                  <a href={'#'}>Profile</a>
              </div>
              <div>
                  <a href={'#'}>Messages</a>
              </div>
              <div>
                  <a href={'#'}>News</a>
              </div>
              <div>
                  <a href={'#'}>Music</a>
              </div>
              <div>
                  <a href={'#'}>Settings</a>
              </div>
          </nav>


          <div className={'content'}>
              <div>
                <img className={'space'} src={'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'}/>
              </div>
              <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU'}/>

              </div>
          </div>


      </div>
  );
}

export default App;
