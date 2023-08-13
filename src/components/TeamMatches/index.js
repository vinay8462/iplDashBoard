import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: {}, recentMatches: [], teamBanner: '', isActive: true}

  componentDidMount() {
    this.getEachByTeam()
  }

  getEachByTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const teamBannerUrl = data.team_banner_url
    const filterLatestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const filterRecentMatch = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      latestMatch: filterLatestMatch,
      recentMatches: filterRecentMatch,
      teamBanner: teamBannerUrl,
      isActive: false,
    })
  }

  renderTeamMatch = () => {
    const {recentMatches, latestMatch, teamBanner} = this.state
    return (
      <div>
        <div className="team-matches-container">
          <div className="team-banner-container">
            <img src={teamBanner} alt="team banner" className="team-banner" />
          </div>
          <div>
            <h1 className="latest-match-heading">Latest Matches</h1>
            <div className="latest-match-container">
              <LatestMatch latestDetails={latestMatch} key={latestMatch.id} />
            </div>
          </div>
          <div>
            <div>
              {recentMatches.map(each => (
                <MatchCard recentDetails={each} key={each.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isActive} = this.state
    return (
      <div>
        {isActive ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
      </div>
    )
  }
}

export default TeamMatches
