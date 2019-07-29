import React from 'react' 

class OwnerInformation extends React.Component {

    state = {}
    
    render(){
        const { onChange, onClick, onSubmit, ownerInformation, businessInformation } = this.props
        return (
            <div className="container">
            <h3>Owner Information</h3>
            <hr/>
            <h4>{businessInformation.name}</h4>
            <form onSubmit={onSubmit} >
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label >SocialSecurity Number</label>
                        <input value={ownerInformation.socialSecurityNumber} name="socialSecurityNumber" onChange={onChange}  className="form-control"  placeholder="Enter SocialSecurity Number" />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label >Name</label>
                        <input required value={ownerInformation.name} name="name" onChange={onChange}  className="form-control"  placeholder="Enter Name" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label >Email</label>
                        <input value={ownerInformation.email} name="email" onChange={onChange}  className="form-control"  placeholder="Enter Email" />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label >Address</label>
                        <input value={ownerInformation.address} name="address" onChange={onChange}  className="form-control"  placeholder="Enter Address" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label >City</label>
                        <input value={ownerInformation.city} name="city" onChange={onChange}  className="form-control"  placeholder="Enter City" />
                    </div>
                </div>

                <div class="col">
                    <div className="form-group">
                        <label >State</label>
                        <input value={ownerInformation.state} name="state" onChange={onChange}  className="form-control"  placeholder="Enter State" />
                    </div>
                </div>
            </div>
                
                <div className="form-group">
                    <label >Postal Code</label>
                    <input value={ownerInformation.postalCode} name="postalCode" onChange={onChange}  className="form-control"  placeholder="Enter Postal Code" />
                </div>
                <div class="row">
                    <div class="col">
                        <div className="form-group">
                            <button onClick={onClick} className="btn btn-secondary btn-lg">Go Back</button>
                        </div>
                    </div>

                    <div class="col">
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </div>

            </form>
            </div>
     
        )
    }
}
export default OwnerInformation