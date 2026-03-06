import BBData from './assets/data/CollegeBasketballTeams.json'
import Team from './Team'



function Teams() {
    return (
        <div className='row g-4'>
            {BBData.teams.map((team) => <Team {...team} />)}
        </div>
    )
}

export default Teams