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
    rightArticle: {
        padding: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    center: {
        textAlign: 'center',
    },
})

const StoriesPage = () => {
    const StoriesFilter = ArticleArray.filter(
        (StoriesFilter) => StoriesFilter.category == 'stories'
    )
    const classes = useStyles()
    return (
        <>
            <Container>
                <CardContent>
                    <h1 className={classes.center}>Places worth</h1>

                    <Grid container spacing={3}>
                        {StoriesFilter.map(
                            ({ id, heading, description, image }) => (
                                <Grid item xs={12} key={id}>
                                    <Card className={classes.cardWrap}>
                                        <div className="history">
                                            <img
                                                src={image}
                                                className={classes.media}
                                            />
                                        </div>
                                        <div className={classes.rightArticle}>
                                            <h2>{heading}</h2>
                                            <p>{description}</p>
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

export default StoriesPage
