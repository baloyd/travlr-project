import React from 'react';

const roundedCornerComment = {
    borderRadius: "10px"
}

const Recommended=()=>{
    return(
        <div className="container-fluid bg-light bg-opacity-10 d-flex justify-content-center w-50 border border-2 border-secondary" style={roundedCornerComment}>
            <div className="w-75">
                <div className="row mb-2 border border-1 border-secondary mt-3" style={roundedCornerComment}>
                    <div className="col bg-white" style={roundedCornerComment}>
                        <h2>USERNAME HERE</h2>
                        <h4>NAME OF PLACE,  LOCATION</h4>
                    </div>
                </div>
                <div className="row bg-white border border-1 border-secondary mb-3" style={roundedCornerComment}>
                    <h5>USER COMMENT GOES HERE</h5>
                </div>
            </div>
        </div>
    )

}

export default Recommended;