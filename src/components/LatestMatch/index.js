import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestDetails
  return (
    <div>
      <div className="latestMatchCard">
        <div className="first-part">
          <p>{competingTeam}</p>
          <p className="para">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>
        <div className="second-part">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-img"
          />
        </div>
        <div className="third-part">
          <h2 className="heading">First Innings</h2>
          <p className="para">{firstInnings}</p>
          <h2 className="heading">Second Innings</h2>
          <p className="para">{secondInnings}</p>
          <h2 className="heading">Man Of The Match</h2>
          <p className="para">{manOfTheMatch}</p>
          <h2 className="heading">Umpires</h2>
          <p className="para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
