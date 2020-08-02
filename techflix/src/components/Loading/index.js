import React from 'react';
import ReactLoading from 'react-loading';
import './styles.css';



 
const Loading = ({ type, color }) => (
    <ReactLoading className="circle" type={type} color={color} height={64} width={64} />
);
 
export default Loading;