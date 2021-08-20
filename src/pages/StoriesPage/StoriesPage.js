import React from 'react'
import {
    Container,
    CardContent,
    Grid,
    makeStyles,
    Card,
    Button,
} from '@material-ui/core'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

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

const StoriesPage = ({ StoriesFilter, isLiked = false }) => {
    const classes = useStyles()

    return (
        <>
            <Container>
                <CardContent>
                    <Grid container spacing={3}>
                        {StoriesFilter.map(
                            ({ id, heading, description, image }) => (
                                <Grid item key={id}>
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
                                                <Button variant="outlined">
                                                    {isLiked ? (
                                                        <FavoriteIcon />
                                                    ) : (
                                                        <FavoriteBorderIcon />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </Grid>
                            )
                        )}
                    </Grid>
                </CardContent>
            </Container>
        </>
    )
}

StoriesPage.propTypes = {
    id: PropTypes.number,
    StoriesFilter: PropTypes.array,
    isLiked: PropTypes.bool,
}

const mapStateToProps = (state, id) => ({
    isLiked: state[id],
})

export default connect(mapStateToProps)(StoriesPage)
