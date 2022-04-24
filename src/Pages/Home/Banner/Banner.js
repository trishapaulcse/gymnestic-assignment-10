
import React from 'react';
import { Button } from 'react-bootstrap';
import LnadingPageImage from '../../../images/myimg.png'
const Banner = () => {
    return (
        <div className="container">
            <div className="align-items-center row">
                <div class="col-md-4"><img src={LnadingPageImage} className="img-fluid" alt="" srcset="" /></div>
                <div class="col-md-8 ">
                    <h2 className='text-center' style={{ fontSize: "5vw" }}>Only Here the Best Results Start your Search and Find
                        for your fitness.....</h2>
                    <h4 className='text-center' style={{ fontSize: "2vw" }}>Leading your best sweating...........</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;