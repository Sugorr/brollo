import cardIntegPic from '../resources/vectors/card-integ-logo.png'
import Carousel from './Carousel';


export default function Integration(){
    return (
        <>
            <div className='container-fluid p-5 d-flex integration-section flex-column'>
                <h5 className='mx-5 px-5 text-white'>POWERFUL WAYS TO GROW</h5>
                <h2 className='mx-5 px-5 fs-1 text-white'>Do more with Brollo</h2>
                <div className='d-flex align-items-center justify-content-around flex-wrap'>
                    <div className='p-3 d-flex flex-column justify-content-start bg-white card-integration'>
                        <img alt='card-integ.png' src={cardIntegPic}/>
                        <h1>Integrations</h1>
                        <h4>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</h4>
                        <button className='w-50 btn browse-btn'>Browse</button>
                    </div>
                    <div className='p-3 d-flex flex-column justify-content-start bg-white card-integration'>
                        <img alt='card-integ.png' src={cardIntegPic}/>
                        <h1>Integrations</h1>
                        <h4>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</h4>
                        <button className='w-50 btn browse-btn'>Browse</button>
                    </div>
                    <div className='p-3 d-flex flex-column justify-content-start bg-white card-integration'>
                        <img alt='card-integ.png' src={cardIntegPic}/>
                        <h1>Integrations</h1>
                        <h4>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</h4>
                        <button className='w-50 btn browse-btn'>Browse</button>
                    </div>
                    <div className='p-3 d-flex flex-column justify-content-start bg-white card-integration'>
                        <img alt='card-integ.png' src={cardIntegPic}/>
                        <h1>Integrations</h1>
                        <h4>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</h4>
                        <button className='w-50 btn browse-btn'>Browse</button>
                    </div>
                </div>

                {/* carousel section */}
                <Carousel />
            </div>
        </>
    );
}