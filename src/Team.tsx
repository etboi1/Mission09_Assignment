/*
This component takes the school, name, city and state of one team from the Teams component.
Then it displays that data in a card, returninf the card to the Teams component
*/

function Team({school, name, city, state} : {
    school: string, 
    name: string, 
    city: string, 
    state: string
}) {
    return (
    <div className="col-md-4"> {/* Responsive column */}
        <div className="card shadow-sm h-100">
            <div className="card-body">
                {/* School Name */}
                <h5 className="card-title text-primary mb-1">
                    {school}
                </h5>

                {/* Mascot */}
                <h6 className="card-subtitle mb-3 text-muted text-uppercase small fw-bold">
                    {name}
                </h6>

                {/* Location Footer */}
                <div className="border-top pt-2">
                    <p className="card-text mb-0 small">
                        <span className="fw-semibold">Location:</span> {city}, {state}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Team