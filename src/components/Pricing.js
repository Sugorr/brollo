import './integration.css';

export default function Pricing() {
    return (
        <>
            <div className="pricing-section container-fluid d-flex justify-content-center align-items-center flex-column mx-auto mb-3">
                <h1>Brollo priced your way</h1>
                <h4>Trusted by millions, Trello powers teams all around the world.</h4>
                <div className="price-container d-flex gap-3">
                    <div className="card card-outlined box-price p-2 shadow">
                        <h4>Free</h4>
                        <h1>$<span>0</span>usd</h1><hr />
                        <p>Free for your whole team</p>
                        <p className='fw-bold mt-3'>For individuals or teams looking to organize any projects</p>
                        <button type='button' className='btn btn-outline-primary position-absolute bottom-0 start-0 text-dark fw-bold price-button'>Try it for free</button>
                    </div>
                    <div className="card card-outlined box-price p-2 shadow">
                        <h4>Standard</h4>
                        <h1>$<span>5</span>usd</h1><hr />
                        <p>Per user/month if billed annually ($6 billed monthly)</p>
                        <p className='fw-bold mt-3'>For small teams that need to manage work and scale collboration</p>
                        <button type='button' className='btn btn-outline-primary position-absolute bottom-0 start-0 text-dark fw-bold price-button'>Get Started</button>
                    </div>
                    <div className="card card-outlined box-price p-2 shadow">
                        <h4>Premium</h4>
                        <h1>$<span>10</span>usd</h1><hr />
                        <p>Per user/month if billed annually ($12.50 billed monthly)</p>
                        <p className='fw-bold mt-3'>For teams that need to visualize multiple projects in several ways, including boards, timeline, calendars, etc.</p>
                        <button type='button' className='btn btn-outline-primary position-absolute bottom-0 start-0 text-dark fw-bold price-button'>Get Started</button>
                    </div>
                    <div className="card card-outlined box-price p-2 shadow">
                        <h4>Enterprise</h4>
                        <h1>$<span>17.50</span>usd</h1><hr />
                        <p>Per user/month - billed annually ($210.00 annual price per user)</p>
                        <p className='fw-bold mt-3'>For organizations that need to connect work across teams with more security and controls.</p>
                        <button type='button' className='btn btn-outline-primary position-absolute bottom-0 start-0 text-dark fw-bold price-button'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}