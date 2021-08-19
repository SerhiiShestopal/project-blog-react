import React from 'react'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'
import ArticleArray, {
    getArticlesObj,
} from '../../components/Articles/ArticleArray'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const ArticlePageHeader = ({
    match,
    articlesObj = getArticlesObj(ArticleArray),
}) => {
    const id = match.params.id

    return (
        <>
            <div className="article-header">
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
                                    <Link to="/stories">Stories</Link>
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
                <Grid className="sub_heading">
                    <h1>{articlesObj[id].heading}</h1>
                </Grid>
            </div>
        </>
    )
}

ArticlePageHeader.propTypes = {
    articlesObj: PropTypes.object,
    match: PropTypes.object,
}

export default ArticlePageHeader
