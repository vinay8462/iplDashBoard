import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCards: [], isActive: true}

  componentDidMount() {
    this.getIplTeamCards()
  }

  getIplTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const filteredCards = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamUrl: each.team_image_url,
    }))
    this.setState({teamCards: filteredCards, isActive: false})
  }

  renderHome = () => {
    const {teamCards} = this.state
    return (
      <div>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="logo-text">IPL Dashboard</h1>
        </div>
        <ul className="team-cont">
          {teamCards.map(each => (
            <TeamCard cardDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isActive} = this.state
    return (
      <div className="bg-container">
        {isActive ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}

export default Home
