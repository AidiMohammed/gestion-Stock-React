import React from 'react'
import {useReducer,useEffect} from 'react'
import SideBarNav from '../components/SideBarNav'
import '../helpers/main.css'


function Dashboard() {
    useEffect(() =>{
        
    },[])
    return (
        <div >
            <SideBarNav />
            <div className="main">
                <h2>Dashboard</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae at quibusdam porro amet, minima blanditiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis voluptas quis quidem itaque, unde nostrum neque incidunt. Perspiciatis voluptate cumque nemo. Doloribus possimus debitis distinctio vel, ullam rem. Dolorum sequi officia vel molestiae sed.</p>

            </div>
        </div>
    )
}
export default Dashboard
