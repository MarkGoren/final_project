import logo from './website_logo.PNG'

export default function MyNavbar(props){
    return (
        <nav className="navbar navbar-expand-xl navbar-light" style={{padding: '0 20px 25px 20px'}}>
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <div id="website_logo_div" className="col-3">
                            <img src={logo} alt="website_logo" id="website_logo"></img>
                        </div>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="#" className="nav-item nav-link active my-auto">
                                <div>
                                    <input type="text" name="search_bar" id="search_bar" placeholder="Search"></input>
                                    <span id="search_button"><i className="fa fa-search" aria-hidden="true"></i></span>
                                </div>
                                
                            </a>
                            <a href="#" className="nav-item nav-link my-auto"><div onClick={props.onClickLogin} id="login_button">login</div></a>
                            <a href="#" className="nav-item nav-link my-auto"><div onClick={props.onClickSignup} id="signup_button">signup</div></a>
                            {/* <a href="#" className="nav-item nav-link my-auto"><div id="favorites_button"><i className="fa fa-heart" aria-hidden="true" title="favorites"></i></div></a>
                            <a href="#" className="nav-item nav-link my-auto"><div id="shopping_list_button"><i className="fa fa-shopping-cart" aria-hidden="true" title="shopping cart"></i></div></a> */}
                        </div> 
                    </div> 
                </div>
        </nav>
    )
}