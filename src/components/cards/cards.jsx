import React from 'react'
import { Grid } from "@material-ui/core"
import styles from './cards.module.css'
import CardComponents from './card/card'

const Cards = ({ data: { confirmed, recovered, deaths } }) => {

  if (!confirmed) {
    return "Loading..."
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={1}>
        <CardComponents className={styles.confirmed} cardTitle="Kasus" value={confirmed.value} cardSubtitle="Jumlah angka kasus" />
        <CardComponents className={styles.recovered} cardTitle="Sembuh" value={recovered.value} cardSubtitle="Jumlah angka sembuh" />
        <CardComponents className={styles.deaths} cardTitle="Meninggal Dunia" value={deaths.value} cardSubtitle="Jumlah angka meninggal" />
      </Grid>
    </div>
  )
}

export default Cards