import React, {Component} from 'react';

class Header extends React.Component {
    
    render(){
        return(
            <nav>
                <div class="nav-wrapper">
                    <a className='left brand-logo'>
                        Feedback App
                    </a>
                    <ul className='right'>
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Header;