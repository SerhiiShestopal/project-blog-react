import React from 'react'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'
import Slick from '../../components/Slick/Slick'
import { Route, Switch } from 'react-router-dom'
import PeoplePageHeader from '../../pages/PeoplePage/PeoplePageHeader'
import PlacesPageHeader from '../../pages/PlacesPage/PlacesPageHeader'
import StoriesPageHeader from '../../pages/StoriesPage/StoriesPageHeader'
import ArticlePageHeader from '../../pages/ArticlePage/ArticlePageHeader'

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <div className="header-block">
                        <div className="lifestyle">
                            <div className="header">
                                <div className="col-xs-10 col-sm-5">
                                    <Logo className="logo" />
                                </div>
                                <div className="col-xs-2 col-sm-7">
                                    <nav className="navigation">
                                        <ul className="menu">
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Hot articles</Link>
                                            </li>
                                            <li>
                                                <Link to="/people">People</Link>
                                            </li>
                                            <li>
                                                <Link to="/places">Places</Link>
                                            </li>
                                            <li>
                                                <Link to="/stories">
                                                    Stories
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="">About us</a>
                                            </li>
                                            <li>
                                                <a href="">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="nav-mobile-menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="slogan_lifestyle">
                                <img
                                    src="images/home_lifestyle_slogan.png"
                                    alt="home_lifestyle_slogan"
                                />
                            </div>
                        </div>
                        <div className="container slider">
                            <Slick />
                        </div>
                    </div>
                </Route>
                <Route
                    path="/people"
                    render={() => <PeoplePageHeader />}
                ></Route>
                <Route
                    path="/places"
                    render={() => <PlacesPageHeader />}
                ></Route>
                <Route
                    path="/stories"
                    render={() => <StoriesPageHeader />}
                ></Route>
                <Route path="/article/:id" component={ArticlePageHeader} />
            </Switch>
        </>
    )
}

export default Header
