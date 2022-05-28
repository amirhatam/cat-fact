import { MDBRow } from "mdb-react-ui-kit";
import React from "react";

const SpinnerPage = () => {
    return (
        <MDBRow className="justify-content-center">
            <div className="spinner-border my-5" role="status">
                <span className="text-center sr-only">Loading...</span>
            </div>
        </MDBRow>
    );
}

export default SpinnerPage;