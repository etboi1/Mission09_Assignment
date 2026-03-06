import BBData from './assets/data/CollegeBasketballTeams.json'
import Team from './Team'

/*
This component loops through all of the teams in the college basketball data and returns a grid of 
cards, where each card contains the information for one team
*/

function Teams() {
    return (
        <div className='row g-4'>
            {BBData.teams.map((team) => <Team {...team} />)}
        </div>
    )
}

export default Teams