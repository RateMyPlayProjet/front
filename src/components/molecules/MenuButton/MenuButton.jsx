import React from 'react';
import { Button } from '../../atoms';

const MenuButton = ({icon=(<></>)}, ...props) => {
    return (
        <Button text={props.children} icon={icon}></Button>
    );
};

export default MenuButton;