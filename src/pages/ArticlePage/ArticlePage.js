import React from 'react'
import ArticleArray, {
    getArticlesObj,
} from '../../components/Articles/ArticleArray'
import PropTypes from 'prop-types'

const ArticlePage = ({ match, articlesObj = getArticlesObj(ArticleArray) }) => {
    const id = match.params.id

    return (
        <>
            <div className="article-container article-style">
                <h1>{articlesObj[id].description}</h1>
                <img
                    className="article-image"
                    src={articlesObj[id].image}
                ></img>
                <div
                    dangerouslySetInnerHTML={{
                        __html: articlesObj[id].fullDescription,
                    }}
                ></div>
                <img src={articlesObj[id].image1} className="article-image1" />
                <p className="article-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudan tium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
        </>
    )
}

ArticlePage.propTypes = {
    articlesObj: PropTypes.object,
    match: PropTypes.object,
}

export default ArticlePage
