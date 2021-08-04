import React from 'react'
import ArticleArray from '../../components/Articles/ArticleArray'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const Main = () => {
    const PeopleFilter = ArticleArray.filter(
        (PeopleFilter) => PeopleFilter.category == 'people'
    )

    const PlacesFilter = ArticleArray.filter(
        (PlacesFilter) => PlacesFilter.category == 'places'
    )

    const StoriesFilter = ArticleArray.filter(
        (StoriesFilter) => StoriesFilter.category == 'stories'
    )

    return (
        <>
            <div className="stories">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a href="">
                            <div className="history">
                                <div>
                                    <img
                                        src="images/girl_on_the_beach.jpg"
                                        alt="girl_on_the_beach"
                                    />
                                </div>
                                <span>
                                    Aenean ligula molstie viverra fermentum
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a href="">
                            <div className="history">
                                <img src="images/man.jpg" alt="man" />
                                <span>
                                    Vitae adipiscing turpis aenean rutrum leo
                                    aliquet
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a href="">
                            <div className="history">
                                <img
                                    src="images/boat_girl.jpg"
                                    alt="boat_girl"
                                />
                                <span>
                                    Suspen disse pellen tesque dui proin cursus
                                    magna
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a href="">
                            <div className="history">
                                <img
                                    src="images/home_lifestyle_blog_hot_4.jpg"
                                    alt="home_lifestyle_blog_hot_4"
                                />
                                <span>
                                    Proin dui sodales imperdiet sit sapien fames
                                    ac luctus
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="row row-pad">
                        <div className="col-xs-12 col-sm-8 col-md-9 col-pad">
                            <div className="mountains">
                                <div className="mountains_block">
                                    <div className="brackets">
                                        <img src="images/home_lifestyle_blockquote.png" />
                                    </div>
                                    <h4>Quote of the week</h4>
                                    <h2>
                                        Phasellus fringilla nisl in sem
                                        scelerisque, a vestibulum mi elementum.
                                        Aenean. Nam vestibulum elit vel felis
                                        porta posuere. Nullam luctus rhoncus
                                        ligula a scelerisque. Vestibulum
                                        suscipit pulvinar.
                                    </h2>
                                    <h3>- Marcus Ettemus</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-3 col-pad">
                            <div className="author_block">
                                <div className="author_photo">
                                    <img
                                        src="images/home_lifestyle_featured_author.png"
                                        alt="author"
                                    />
                                </div>
                                <h4>Featured Author</h4>
                                <a href="">
                                    <h2>Mark Spencer</h2>
                                </a>
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Ad, velit.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row-pad row-r-l">
                        <div className="row ">
                            <div className="col-xs-12 ">
                                <div className="heading">
                                    <a href="">People and their life</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {PeopleFilter.map(({ id, heading, image }) => (
                                <Grid item xs={12} sm={4} key={id}>
                                    <div className="history">
                                        <img src={image} />
                                        <span>{heading}</span>
                                    </div>
                                </Grid>
                            ))}
                        </div>
                    </div>
                    <div className="row-pad">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-pad">
                                <div className="col-xs-12">
                                    <div className="heading">
                                        <a href="">Places worth</a>
                                    </div>
                                </div>
                                <div className="row">
                                    {PlacesFilter.map(
                                        ({ id, heading, image }) => (
                                            <Grid item xs={12} sm={6} key={id}>
                                                <div className="history">
                                                    <img src={image} />
                                                    <span>{heading}</span>
                                                </div>
                                            </Grid>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-pad">
                                <div className="col-xs-12">
                                    <div className="heading">
                                        <a href="">True stories</a>
                                    </div>
                                </div>
                                <div className="row">
                                    {StoriesFilter.map(
                                        ({ id, heading, image }) => (
                                            <Grid item xs={12} sm={6} key={id}>
                                                <div className="history">
                                                    <img src={image} />
                                                    <span>{heading}</span>
                                                </div>
                                            </Grid>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-pad">
                            <div className="about">
                                <h3>About us</h3>
                            </div>
                            <div className="about_text_black">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Perspiciatis laudantium
                                    dignissimos nesciunt at quos rerum eum
                                    recusandae. Ad nisi deleniti et reiciendis
                                    mollitia porro quas temporibus beatae,
                                    accusantium minima error?
                                </p>
                            </div>
                            <div className="about_text_grey">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit, eveniet
                                    reprehenderit odio at dicta, id enim amet
                                    possimus est, magnam harum! Omnis repellat
                                    quod, necessitatibus repudiandae magnam
                                    nesciunt tenetur mollitia?
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-pad">
                            <div className="about">
                                <h3>Authors</h3>
                            </div>
                            <div className="about_author">
                                <p>Bryan D. Preston</p>
                                <span className="about_text_grey">
                                    Lorem ipsum dolor sit amet, consecte tur
                                    adipisicing elit
                                </span>
                            </div>
                            <div className="about_author">
                                <p>Tatiana R. Kovalsky</p>
                                <span className="about_text_grey">
                                    Lorem ipsum dolor sit amet, consecte tur
                                    adipisicing elit
                                </span>
                            </div>
                            <div className="about_author">
                                <p>Albert W. Steavenson</p>
                                <span className="about_text_grey">
                                    Lorem ipsum dolor sit amet, consecte tur
                                    adipisicing elit
                                </span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-pad">
                            <div className="about">
                                <h3>Become an author</h3>
                            </div>
                            <div className="about_text_black">
                                <p>
                                    Morbi eget dictum lectus, eget porttitor
                                    erat. Vestibulum dictum lacus id turpis
                                    egestas mattis. Vestibulum ac leo ultrices,
                                    porta libero malesuada, mollis sed.
                                </p>
                            </div>
                            <div className="about_text_grey">
                                <p>
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui
                                    officia deserunt.
                                </p>
                            </div>
                            <div className="button">
                                <a href="">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Array.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    category: PropTypes.string.isRequired,
}
export default Main
