import React from 'react' 
import OwnerInformation from './OwnerInformation'
import BusinessInformation from './BusinessInformation'
import ValidationResult from './ValidationResult'
import GlobaConfig from '../../config'

class LoanInformation extends React.Component {

    state = {
            ownerInformationVisible: null,
            businessInformationVisible: true,
            validationResutlVisible: null,
            loading: null,
            businessInformation: {
                taxId: '',
                name: '',
                address : '',
                city: '',
                state : '',
                postalCode: '',
                requestedamount :''
            },
            ownerInformation: {
                socialSecurityNumber: '',
                name: '',
                email: '',
                address: '',
                city : '',
                state: '',
                postalCode : ''
            },
            validationResult: null
    }

    handleChangeBusinessForm = e => {
        console.log("handleChangeBusinessForm Changing...")
        this.setState({
            businessInformation: {
                ...this.state.businessInformation,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmitBusinessForm = e => {
        e.preventDefault()
        this.setState({
            ownerInformationVisible : true,
            businessInformationVisible: false
            
        })
        console.log("handleSubmitBusinessForm Sunmmiting....")

    }

    handleChangeOwnerForm = e => {
        console.log("handleChangeOwnerInformation Changing..***.")
        this.setState({
            ownerInformation: {
                ...this.state.ownerInformation,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmitOwnerForm = async e => {
        e.preventDefault()
        console.log("handleSubmitOwnerInformation Sunmmiting....")
        this.setState({
            loading: true,
            ownerInformationVisible: false,
            businessInformationVisible: false,
            validationResutlVisible: false,

        })
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'businessInformation': this.state.businessInformation, 'ownerInformation': this.state.ownerInformation})
            }

            let res = await fetch(`${GlobaConfig.url}/setInformation`, config)
            let json = await res.json();
            this.setState({
                validationResult : {
                    className :`alert alert-${json.label}`,
                    result : json.name
                },
                ownerInformationVisible: false,
                businessInformationVisible: false,
                validationResutlVisible: true,
                loading: false

            })
            console.log(this.state);



        } catch(error){
            console.log(error)
            this.setState({
                validationResult : {
                    className :`alert alert-danger`,
                    result : 'Error sending information'
                },
                ownerInformationVisible: false,
                businessInformationVisible: false,
                validationResutlVisible: true,
                loading: false

            })
        }
    }

    goToBusinessInformation = e => {
        console.log("Backing....")
        this.setState({
            ownerInformationVisible : false,
            businessInformationVisible: true
            
        })
    }

    goToOwnerInformation = e => {
        console.log("Backing....")
        this.setState({
            ownerInformationVisible : true,
            businessInformationVisible: false,
            validationResutlVisible: false
            
        })
    }

    render(){
        if (this.state.ownerInformationVisible) {
            return (
            <div>
                <OwnerInformation 
                    onChange={this.handleChangeOwnerForm} 
                    onClick={this.goToBusinessInformation}
                    onSubmit={this.handleSubmitOwnerForm}
                    ownerInformation={this.state.ownerInformation}
                    businessInformation={this.state.businessInformation}
                />
                </div>
            )
        }
        if (this.state.businessInformationVisible) {
            return (
                <div>
                    <BusinessInformation 
                        onChange={this.handleChangeBusinessForm} 
                        onSubmit={this.handleSubmitBusinessForm}
                        businessInformation={this.state.businessInformation}
                    />
                </div>
            )
        }

        if (this.state.validationResutlVisible) {
            return (
                <div>
                    <ValidationResult
                        businessInformation={this.state.businessInformation}
                        ownerInformation = {this.state.ownerInformation}
                        validationResult={this.state.validationResult} 
                        goToOwnerInformation={this.goToOwnerInformation}
                    />
                </div>
            )
        }

        
        if (this.state.loading) {
            return (
                <div class="text-center">
                    <div class="spinner-border"  role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }



        
    }
}
export default LoanInformation