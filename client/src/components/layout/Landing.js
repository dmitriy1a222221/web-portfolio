import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 80 + '%',
        minWidth: 275,
        margin: `20px auto`,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 36,
        fontWeight: 700
    },
    text: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
};

const Landing = (props) => {

    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2">
                    Е-Портфоліо Головна сторінка
                </Typography>
                <Typography className={classes.text} component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at atque corporis cum deserunt distinctio eius est et fugit illo ipsam laborum maiores maxime nam nisi nostrum perspiciatis quasi qui quis quos, reiciendis reprehenderit soluta ullam vero voluptatum! Dolorum eligendi esse modi nam nihil qui reiciendis sint velit. Accusamus accusantium ad animi architecto dicta, earum eum fuga nulla porro praesentium, quae quam repudiandae sequi sint totam voluptas voluptates. Accusamus beatae consequuntur dignissimos dolorum eligendi, est eum facere facilis hic itaque nam officia perspiciatis quis repellat repudiandae saepe soluta, voluptate. A aliquid amet asperiores autem cumque cupiditate deserunt dolore doloremque eius, esse eum explicabo hic illum iste libero minima molestiae molestias odit omnis possimus quaerat recusandae, repellat reprehenderit sapiente suscipit tempore, unde velit voluptatem voluptatibus voluptatum? Aliquam dicta dolor nemo. Ab aspernatur, cumque deserunt dolorum error eveniet magni nemo nobis provident quia recusandae rem sed, sunt tempore vero voluptatem voluptatum? Aspernatur!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);