import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-secondary text-white">
            <div className="container py-4">
                <div className="row py-6">
                    <div className="col-md-4 mb-3 mb-md-0 ">
                        <h6 className="text-uppercase mb-3">Customer services</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a className="footer-link text-black" href="#">Help &amp; Contact Us</a></li>                        
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-uppercase mb-3">Terms &amp; Conditions</h6>
                        <ul className="list-unstyled mb-0">                       
                            <li><a className="footer-link text-black" href="#">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-uppercase mb-3">Social media</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a className="footer-link text-black" href="#">Facebook</a></li>
                            <li><a className="footer-link text-black" href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </footer>
    );
}

export default Footer;