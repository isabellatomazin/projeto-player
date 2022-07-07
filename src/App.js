import './style.css'


function App() {
  return (
   <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <spam className="login-form-title">Bem vindo!</spam>
         <div className="wrap-input">
          <input className='input' type="Username"/>
          <span className="focus-input" data-placeholder="Username"></span>
         </div>

         <div className="wrap-input">
          <input className='input' type="Password"/>
          <span className="focus-input" data-placeholder="Password"></span>
         </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>

            <div className="text-center">
              <span className="text1">Não possui conta?  </span>
              <a className="text2" href="#"> Sign in</a>
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
}
export default App;
