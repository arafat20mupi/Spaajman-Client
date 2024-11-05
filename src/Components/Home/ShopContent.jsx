const ShopContent = () => {
    let mapimage = "https://cdn.buttercms.com/aY8pmetzRZzc3fYxkOUg";
    let spaImage =
        "https://www.msccruises.com/int/-/media/global-contents/on-board/spa-beauty-and-fitness/enjoy_spa_01.jpg?bc=transparent&as=1&dmc=0&iar=0&mh=1080&mw=1380&sc=0&thn=0&udi=0&hash=DA8CBA48267890F67A160BB07E8ECC23";
    return (
        <div className="md:flex items-center gap-5 justify-around overflow-x-hidden bg-[right_bottom] md:bg-[right_center]">
            <div className="w-full md:w-6/12">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl">BOOK ONLINE </h1>
                    <h1 className="text-2xl my-2">GIFT CARDS</h1>
                    <p className="my-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
                        nemo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Officia, nemo! Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officia, nemo!
                    </p>
                    <h3 className="text-xl">Bogura, Rajshahi Bangladesh.</h3>
                </div>
                <hr className="bt-1 border-[#696969] my-5" />
                {/* Here aet the map */}

                <img
                    src={mapimage}
                    alt="Map"
                    className="w-full h-[155px] ring-1 ring-gray-400"
                />

                {/* Here set the map */}
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5  mx-auto flex flex-wrap">
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    // src="https://dummyimage.com/500x300"
                                    src={spaImage}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    // src="https://dummyimage.com/501x301"
                                    src={spaImage}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    // src="https://dummyimage.com/600x360"
                                    src={spaImage}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    // src="https://dummyimage.com/601x361"
                                    src={spaImage}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    // src="https://dummyimage.com/502x302"
                                    src={spaImage}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    // src="https://dummyimage.com/503x303"
                                    src={spaImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopContent;