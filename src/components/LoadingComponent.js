import React from 'react';
import {Spinner} from 'reactstrap';
export const Loading = () => {
    return(
        <div class="text-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
};