import React from 'react'
import {
    Container,
    CardContent,
    Grid,
    makeStyles,
    Card,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import ArticleArray from '../../components/Articles/ArticleArray'
import { Link } from 'react-router-dom'

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

const PlacesPage = () => {
    const PlacesFilter = ArticleArray.filter(
        (PlacesFilter) => PlacesFilter.category == 'places'
    )
    const classes = useStyles()
    return (
        <>
            <Container>
                <CardContent>
                    <Grid container spacing={3}>
                        {PlacesFilter.map(
                            ({ id, heading, description, image }) => (
                                <Grid item xs={12} key={id}>
                                    <Card>
                                        <div className={classes.cardWrap}>
                                            <div className="history col-xs-12 col-sm-5">
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

Array.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    category: PropTypes.string.isRequired,
}

export default PlacesPage
