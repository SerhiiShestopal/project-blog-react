import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Slick extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        return (
            <div className="slider-slick">
                <Slider {...settings}>
                    <div className="history slide-block">
                        <div>
                            <img
                                src="images/girl_on_the_beach.jpg"
                                alt="girl_on_the_beach"
                            />
                        </div>
                        <span>Aenean ligula molstie viverra fermentum</span>
                    </div>
                    <div className="history slide-block">
                        <img src="images/man.jpg" alt="man" />
                        <span>
                            Vitae adipiscing turpis aenean rutrum leo aliquet
                        </span>
                    </div>
                    <div className="history slide-block">
                        <img src="images/boat_girl.jpg" alt="boat_girl" />
                        <span>
                            Suspen disse pellen tesque dui proin cursus magna
                        </span>
                    </div>
                    <div className="history slide-block">
                        <img
                            src="images/home_lifestyle_blog_hot_4.jpg"
                            alt="home_lifestyle_blog_hot_4"
                        />
                        <span>
                            Proin dui sodales imperdiet sit sapien fames ac
                            luctus
                        </span>
                    </div>
                </Slider>
            </div>
        )
    }
}
