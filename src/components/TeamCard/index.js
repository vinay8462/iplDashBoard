import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamUrl} = cardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-background">
        <div className="team-card">
          <img src={teamUrl} alt={name} className="team-img" />
          <p className="team-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
