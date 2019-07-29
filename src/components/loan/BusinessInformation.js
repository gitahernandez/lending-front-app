import React from 'react' 

class BusinessInformation extends React.Component {

    state = {}

    render(){
        const { onChange, onSubmit, businessInformation } = this.props
        return (
            <div className="container">
            <h2>LendingFront - Loan Request Form</h2>
            <h3>Business Information</h3>
            <hr/>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label >Tax Id</label>
                            <input value={businessInformation.taxId} name="taxId" onChange={onChange}  className="form-control"  placeholder="Enter Tax Id" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label >Name</label>
                            <input required value={businessInformation.name} name="name" onChange={onChange}  className="form-control"  placeholder="Enter name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label >Address</label>
                            <input value={businessInformation.address} name="address" onChange={onChange}  className="form-control"  placeholder="Enter Address" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label >City</label>
                            <input value={businessInformation.city} name="city" onChange={onChange}  className="form-control"  placeholder="Enter City" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label >State</label>
                            <input value={businessInformation.state} name="state" onChange={onChange}  className="form-control"  placeholder="Enter State" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label >Postal Code</label>
                            <input value={businessInformation.postalCode} name="postalCode" onChange={onChange}  className="form-control"  placeholder="Enter Postal Code" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label >Requested Amount</label>
                    <input required type="number" value={businessInformation.requestedamount} name="requestedamount" onChange={onChange}  className="form-control"  placeholder="Enter Requested Amount" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Next</button>
            </form>
            </div>
     
        )
    }
}
export default BusinessInformation