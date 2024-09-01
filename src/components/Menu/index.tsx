import { MENU } from '@src/utils';
import React from 'react';
import { MenuItem } from './MenuItem';

export const Menu = () => {
    return MENU.map((option) => {
        return <MenuItem key={option.name} {...option} />;
    });
};
