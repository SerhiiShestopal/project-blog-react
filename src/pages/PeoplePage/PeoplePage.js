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
})

const PeoplePage = () => {
    const PeopleFilter = ArticleArray.filter(
        (PeopleFilter) => PeopleFilter.category == 'people'
    )
    const classes = useStyles()
    return (
        <>
            <Container>
                <CardContent>
                    <Grid container spacing={3}>
                        {PeopleFilter.map(
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
                                                <h2>{heading}</h2>
                                                <p>{description}</p>
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

export default PeoplePage
