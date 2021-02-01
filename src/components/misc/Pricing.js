import React from 'react'
import './Pricing.css'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <ul className="price">
                    <li className="col-header">Basic</li>
                    <li className="grey">$ 9.99 / year</li>
                    <li>12 consultation sessions</li>
                    <li>1 user</li>
                    <li>Same day audit logs</li>
                    <li>Communiity support</li>
                    <li className="grey"><button className="button">Sign Up</button></li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header" style={{backgroundColor:'#37387a'}}>Pro</li>
                    <li className="grey">$ 24.99 / year</li>
                    <li>Unlimited Consultation</li>
                    <li>10 - 25 Users</li>
                    <li>7 days Audit logs</li>
                    <li>3 days SLA support</li>
                    <li className="grey"><button className="button">Sign Up</button></li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header">Premium</li>
                    <li className="grey">$ 49.99 / year</li>
                    <li>Unlimited Consultation</li>
                    <li>Unlimiited Users</li>
                    <li>Audit logs with full history</li>
                    <li>24×7×365 premium support</li>
                    <li className="grey"><button className="button">Sign Up</button></li>
                </ul>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home;