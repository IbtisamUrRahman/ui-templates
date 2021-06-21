const Carousel = () => {
    return ( 
        <div className="swiper-container h-64">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                    <img src="https://source.unsplash.com/weekly?water"/>
                </div>
                <div className="swiper-slide">
                    <img src="https://source.unsplash.com/weekly?mountain"/>
                </div>
            </div>
        </div>
     );
}
 
export default Carousel;