import React from 'react';

const UserOptions = ({name,value}) => (
    <li key={name}>{name}: {value}</li>
);

export default UserOptions;
