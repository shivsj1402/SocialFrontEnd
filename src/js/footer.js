import React, { Component } from 'react';
import './../css/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                &copy; <p> Copyright Social Corporation. All rights reserved.
                <a href="/about" className="footerabout">   About</a>  </p>
                
            </div>
                        
                        
        );
    }
}