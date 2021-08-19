import React from 'react'
import ArticleArray from '../../components/Articles/ArticleArray'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import PeoplePage from '../../pages/PeoplePage/PeoplePage'
import { Link } from 'react-router-dom'
import PlacesPage from '../../pages/PlacesPage/PlacesPage'
import StoriesPage from '../../pages/StoriesPage/StoriesPage'
import ArticlePage from '../../pages/ArticlePage/ArticlePage'

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
            <Switch>
                <Route path="/" exact>
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
                                                scelerisque, a vestibulum mi
                                                elementum. Aenean. Nam
                                                vestibulum elit vel felis porta
                                                posuere. Nullam luctus rhoncus
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
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Ad,
                                            velit.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row-pad row-r-l">
                                <div className="row ">
                                    <div className="col-xs-12 ">
                                        <div className="heading">
                                            <Link to="/people">
                                                People and their life
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {PeopleFilter.map(
                                        ({ id, heading, image }) => (
                                            <Grid item xs={12} sm={4} key={id}>
                                                <div className="history">
                                                    <img src={image} />
                                                    <span>
                                                        <Link
                                                            to={`/article/${id}`}
                                                            className="heading-decoration heading-main"
                                                        >
                                                            {heading}
                                                        </Link>
                                                    </span>
                                                </div>
                                            </Grid>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="row-pad">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-pad">
                                        <div className="col-xs-12">
                                            <div className="heading">
                                                <Link to="/places">
                                                    Places worth
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {PlacesFilter.map(
                                                ({ id, heading, image }) => (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={6}
                                                        key={id}
                                                    >
                                                        <div className="history">
                                                            <img src={image} />
                                                            <span>
                                                                <Link
                                                                    to={`/article/${id}`}
                                                                    className="heading-decoration heading-main"
                                                                >
                                                                    {heading}
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    </Grid>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-pad">
                                        <div className="col-xs-12">
                                            <div className="heading">
                                                <Link to="/stories">
                                                    True stories
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {StoriesFilter.map(
                                                ({ id, heading, image }) => (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={6}
                                                        key={id}
                                                    >
                                                        <div className="history">
                                                            <img src={image} />
                                                            <span>
                                                                <Link
                                                                    to={`/article/${id}`}
                                                                    className="heading-decoration heading-main"
                                                                >
                                                                    {heading}
                                                                </Link>
                                                            </span>
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
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit.
                                            Perspiciatis laudantium dignissimos
                                            nesciunt at quos rerum eum
                                            recusandae. Ad nisi deleniti et
                                            reiciendis mollitia porro quas
                                            temporibus beatae, accusantium
                                            minima error?
                                        </p>
                                    </div>
                                    <div className="about_text_grey">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Impedit, eveniet reprehenderit odio
                                            at dicta, id enim amet possimus est,
                                            magnam harum! Omnis repellat quod,
                                            necessitatibus repudiandae magnam
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
                                            Lorem ipsum dolor sit amet, consecte
                                            tur adipisicing elit
                                        </span>
                                    </div>
                                    <div className="about_author">
                                        <p>Tatiana R. Kovalsky</p>
                                        <span className="about_text_grey">
                                            Lorem ipsum dolor sit amet, consecte
                                            tur adipisicing elit
                                        </span>
                                    </div>
                                    <div className="about_author">
                                        <p>Albert W. Steavenson</p>
                                        <span className="about_text_grey">
                                            Lorem ipsum dolor sit amet, consecte
                                            tur adipisicing elit
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-pad">
                                    <div className="about">
                                        <h3>Become an author</h3>
                                    </div>
                                    <div className="about_text_black">
                                        <p>
                                            Morbi eget dictum lectus, eget
                                            porttitor erat. Vestibulum dictum
                                            lacus id turpis egestas mattis.
                                            Vestibulum ac leo ultrices, porta
                                            libero malesuada, mollis sed.
                                        </p>
                                    </div>
                                    <div className="about_text_grey">
                                        <p>
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt.
                                        </p>
                                    </div>
                                    <div className="button">
                                        <a href="">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route
                    path="/people"
                    render={() => <PeoplePage PeopleFilter={PeopleFilter} />}
                />
                <Route
                    path="/places"
                    render={() => <PlacesPage PlacesFilter={PlacesFilter} />}
                />
                <Route
                    path="/stories"
                    render={() => <StoriesPage StoriesFilter={StoriesFilter} />}
                />
                <Route path="/article/:id" component={ArticlePage} />
            </Switch>
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
