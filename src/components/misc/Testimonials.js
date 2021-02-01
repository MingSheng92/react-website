import React from 'react'
import user1 from '../../images/patrick.png'
import user2 from '../../images/nan.jpg'
import './Testimonials.css'


const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Testimonials</h2>
                    <p>What others say about us.</p>
                </div>
                <div className="cust-container">
                    <img src={user1} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>John Doe.</span> Content Writer.</p>
                    <p>Great attention to detail!</p>
                </div>

                <div className="cust-container">
                    <img src={user2} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>Rebecca Flex.</span> Reporter</p>
                    <p>Nice enviroment to run my personal projects.</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;