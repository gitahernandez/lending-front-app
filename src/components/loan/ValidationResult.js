import React from 'react' 

class ValidationResult extends React.Component {

    state = {}

    render(){
        const { businessInformation, ownerInformation, validationResult, goToOwnerInformation } = this.props
        return (
                <div className="container">
                    <h2>LendingFront - Loan Request Result</h2>
                    <hr/>
                    <div className={validationResult.className} role="alert">
                        <h4 className="alert-heading">{validationResult.result}!</h4>
                        Dear {ownerInformation.name}, The result to your company {businessInformation.name} loan Request is : {validationResult.result}
                        <hr/>
                        <button onClick={goToOwnerInformation} className="btn btn-primary">Go Back</button>
                    </div>
                </div>

           
        )
    }
}
export default ValidationResult