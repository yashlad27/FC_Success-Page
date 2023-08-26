import React from "react";
import Lottie from "lottie-react";

import successAnimation from "../assests/SuccessTick.json";
import "./Success.page.css";

const Success = () => {
    const defaultOptions = {
        loop:false,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        },
    };
    
    const date = new Date();
    // const showTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return (
        <div className="success-page">
        <Lottie options={defaultOptions} height={400} width={400} />
        <b>Application Approved</b>
        <p>
            Status of Application #1234567890 has been set
            to approve as on {date.toLocaleDateString()}.
        </p>
        </div>
        
    );
}

export default Success;