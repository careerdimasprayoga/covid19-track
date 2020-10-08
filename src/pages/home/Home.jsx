import React from 'react'
import axios from 'axios'
import imageHeader from '../../images/head.png'
import styles from './Home.module.css'
import Typography from '@material-ui/core/Typography';
import PickCountry from '../../components/pickCountry/pickCountry.jsx'
import Cards from '../../components/cards/cards'
import Box from '@material-ui/core/Box';
// import { Link } from 'react-router-dom'

// Class & Function => di react
class Home extends React.Component {

  state = {
    data: {}
  }

  componentDidMount() {
    this.getData()
  }

  handleCountryChange = (event) => {
    let country = event.target.value
    this.getData(country)
    const setCountry = country ? country : "Global"
    this.props.history.push({
      search: "?country=" + setCountry
    })
  }

  getData = (country) => {
    let setUrl = 'https://covid19.mathdro.id/api'
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl
    axios.get(setUrl)
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { data } = this.state
    const lastUpdate = new Date(data.lastUpdate).toDateString()
    return (
      <div className={styles.container}>
        <img className={styles.gambar} src={imageHeader} alt="Gambar Covid" />
        <Typography color="textSecondary" variant="subtitle2" gutterBottom>
          Last Updated : {lastUpdate}
        </Typography>
        <PickCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Box component="span" m={1} className={styles.footer}>
          <h4>Built with respect by Dimas Prayoga</h4>
        </Box>
        {/* <Link to="/about">About</Link> */}
      </div>
    )
  }
}

export default Home