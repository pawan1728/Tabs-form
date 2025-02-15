import Profile from '../components/Profile'
import Interests from '../components/Interests'
import Settings from '../components/Settings'
export const Tabs = [{
    name:'Profile',
    component:Profile,
    validation: () =>{
        
    }

},
{
    name:'Interest',
    component:Interests
},
{
    name:'Setting',
    component:Settings
},
]