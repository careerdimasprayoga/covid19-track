import React from 'react'
import { Grid, Card, CardContent, Typography } from "@material-ui/core"
import CountUp from 'react-countup';
import cn from 'classnames'
import styles from './card.module.css'

const CardComponent = ({ className, cardTitle, value, cardSubtitle }) => {
  return (
    <Grid container item xs={12} lg={4} component={Card} className={cn(styles.card, className)}>
      <CardContent>
        <Typography color="textSecondary" gutterBloom>{cardTitle}</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={3.5} separator="." />
        </Typography>
        <Typography color="TextSecondary">Orang</Typography>
        <Typography variant="body2" components='p'>{cardSubtitle}</Typography>
      </CardContent>
    </Grid >
  )
}

export default CardComponent