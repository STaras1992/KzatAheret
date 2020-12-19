import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './MainCard.scss';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  media: {
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      height: '130px',
    },
    [theme.breakpoints.up('md')]: {
      height: '200px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '250px',
    },
  },
}));

const MainCard = ({ title, text, image }) => {
  const classes = useStyles();

  return (
    <div className='card-container'>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title='title1' />
          <CardContent style={{ backgroundColor: '#f0e7b2' }}>
            <Typography align='center' gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography align='center' variant='body2' color='textSecondary' component='p'>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MainCard;
