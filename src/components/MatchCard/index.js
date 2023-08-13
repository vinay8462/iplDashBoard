const MatchCard = props => {
  const {recentDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
    matchStatus,
  } = recentDetails
  return (
    <li>
      <div>
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
