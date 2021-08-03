import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></Script>
            <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></Script>
            <Script src="https://kit.fontawesome.com/a076d05399.js"></Script>
            <Link href="/">
                <a className="navbar-brand" >Độc Shop</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/cart">
                            <a className="nav-link"><i className="fas fa-shopping-cart"></i>Cart</a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link href="/signin">
                            <a className="nav-link"><i className="fas fa-user"></i>Sign in</a>
                        </Link>
                    </li>

                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            User Name
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li> */}

                </ul>
            </div>
        </nav>
    )
}

export default NavBar
