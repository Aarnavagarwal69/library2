import React from 'react'
import {Apptabnav} from '../components/apptabnav'
import {Sidebar} from '../components/customsidebar'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Settingscreen from '../screens/settingscreen'
import Mydonations from '../screens/mydonations'


export const Appdrawernav = createDrawerNavigator({
    home:{
        screen:Apptabnav
    },
    Mydonations:{
        screen:Mydonations
    },
    setting:{
        screen:Settingscreen
    }
},{initialRouteName:'home'},{contentComponent:Sidebar}
)