import React from 'react'

function Footer(props) {
    return (
        <nav className={`navbar navbar-bottom opacity-100 ${props.footerBg} bg-body-tertiary`}>
            <div className="container d-flex justify-content-center">
            <a className="navbar-brand" href="#top"><img src={props.logo} alt="" width="25" height="25" className="d-inline-block align-text-top" /></a>
                <strong>TextEdit-2024&copy; </strong>&ensp; All Rights Reserved
            </div>
        </nav>
    )
}

export default Footer