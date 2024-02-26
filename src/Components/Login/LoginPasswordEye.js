import React from 'react';
import { useState } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';




const LoginPasswordEye = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <FiEye />
            <FiEyeOff />
        </div>
    )
}

export default LoginPasswordEye