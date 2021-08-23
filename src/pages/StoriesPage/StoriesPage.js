import React from 'react'
import {
    Container,
    CardContent,
    Grid,
    makeStyles,
    Card,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    media: {
        width: 500,
        height: 'auto',
        transition: '1.5s',
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})

const StoriesPage = ({
    id,
    heading,
    description,
    image,
    isLiked = false,
    addLike,
    removeLike,
}) => {
    const classes = useStyles()

    return (
        <>
            <Container>
                <CardContent>
                    <Grid>
                        <Card>
                            <div className={classes.cardWrap}>
                                <div className="col-xs-12 col-sm-5 history ">
                                    <img
                                        src={image}
                                        className={classes.media}
                                    />
                                </div>
                                <div className="col-xs-12 col-sm-7 rightArticle">
                                    <h2>
                                        <Link
                                            to={`/article/${id}`}
                                            className="heading-decoration"
                                        >
                                            {heading}
                                        </Link>
                                    </h2>
                                    <p className="description-decoration">
                                        {description}
                                    </p>
                                    <div className="block-liked">
                                        <div className="row">
                                            <p className="liked-text">
                                                Do you like it?
                                            </p>
                                            <button
                                                onClick={() =>
                                                    isLiked
                                                        ? removeLike(id)
                                                        : addLike(id)
                                                }
                                                className="liked-button"
                                            >
                                                {isLiked ? (
                                                    <div className="liked" />
                                                ) : (
                                                    <div className="dis-liked" />
                                                )}
                                            </button>
                                        </div>
                                        <div className="read-more-block">
                                            <Link
                                                to={`/article/${id}`}
                                                className="read-more-decoration"
                                            >
                                                <p className="read-more-text">
                                                    Read more
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </CardContent>
            </Container>
        </>
    )
}

StoriesPage.propTypes = {
    id: PropTypes.number,
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    isLiked: PropTypes.bool,
    addLike: PropTypes.func,
    removeLike: PropTypes.func,
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state[id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
})

export default connect(mapStateToProps, mapDispatchToProps)(StoriesPage)
