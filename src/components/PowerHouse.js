

export default function PowerHouse(){
    return(
        <>
            <div className='container-fluid p-5 powerhouse' style={{color: '#1B2134'}}>
                <h5 className='mx-5 px-5 py-2'>Brollo</h5>
                <h1 className='mx-5 px-5 py-2'>A productivity powerhouse</h1>
                <h3 className='mx-5 px-5 py-2 w-75'>
                    Simple, flexible, and powerful.
                    All it takes are boards, lists,
                    and cards to get a clear view of who’s doing what and what needs to get done.
                    Learn more in our guide for getting started.
                </h3>
                <div className='container-fluid px-5 m-5 d-flex'>
                    <div className='board-section'>
                        <div className='board board-selected'>Board 1</div>
                        <div className='board'>Board 2</div>
                        <div className='board'>Board 3</div>
                    </div>
                    <div className='slide-section w-75'>
                        <div className='test'></div>
                    </div>
                </div>
            </div>
        </>
    );
}