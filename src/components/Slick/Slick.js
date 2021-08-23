import React, { Component } from 'react'
import Slider from 'react-slick'
import ArticleArray from '../../components/Articles/ArticleArray'
import { Link } from 'react-router-dom'

export default class Slick extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        }

        const SliderFilter = ArticleArray.filter(
            (SliderFilter) => SliderFilter.category == 'slider'
        )
        return (
            <div className="slider-slick">
                <Slider {...settings}>
                    {SliderFilter.map(({ id, heading, image }) => (
                        <div className="history slide-block" key={id}>
                            <div>
                                <img src={image} />
                            </div>
                            <span>
                                <Link
                                    to={`/article/${id}`}
                                    className="heading-decoration heading-main"
                                >
                                    {heading}
                                </Link>
                            </span>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}
