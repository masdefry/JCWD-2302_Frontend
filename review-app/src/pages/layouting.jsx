// Cara import image
import Logo from './../logopwdk-03.0909.png'

function Layouting() {
  return (
    <div>
      <div style={{ backgroundColor: 'red', display: 'flex', justifyContent: 'space-between', paddingLeft: '50px', paddingRight: '50px' }}>
        <div>
          <span>
            Icon
          </span>
          <span>
            Indonesia
          </span>
        </div>
        <div>
          <span>
            Facebook
          </span>
          <span>
            Twitter
          </span>
          <span>
            Linkedin
          </span>
          <span>
            Instagram
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '50px', paddingRight: '50px' }}>
        <div style={{ backgroundColor: 'blue', display: 'flex', alignItems: 'center' }}>
          <span>
            <img src={Logo} width="130px" height="130px" />
          </span>
          <span>
            Digital School
          </span>
        </div>
        <div>
          <span>
            Menu-1
          </span>
          <span>
            Menu-2 
          </span>
          <span>
            Menu-3
          </span>
          <span>
            <button>Sign in</button>
          </span>
          <span>
            <button>Sign up</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Layouting;