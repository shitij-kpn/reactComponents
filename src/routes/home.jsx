import React from 'react'

import Header from '../components/header'
import CardList from '../components/cardlist/cardlist'

import {Redirect} from 'react-router-dom'

const initialState = {
    user : {
        id : '',
        name : '',
        email : '',
        year:0,
        section: 0,
        branch: '',
        favourites:[]
    },
    isLoggedIn:false,
    route:'login'
}


class Home extends React.Component {
    
    constructor(){
        super()
        this.state=initialState
    }


    onRouteChange = (route) => {
        if(route === 'signout'){
          this.setState(initialState);
          return <Redirect to="/signup" />
        }
        else if(route === 'home'){
          this.setState({isSignedIn : true})
          return <Redirect to="/"/>
        }
        this.setState({route : route});
    }

    loadUser = (data) => {
        this.setState ({user : {
            id : data.id,
            name : data.name,
            email : data.email,
            year: data.year,
            branch: data.branch,
            section : data.section,
            favourites: [...data.favourites]
        }});
    }

    render(){

        const {isLoggedIn , user , route} = this.state;

        if(isLoggedIn){
            return (
                <div>
                    <Header route={route} isLoggedIn={isLoggedIn}  />
                    <div>
                        <CardList user={user}/>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Header route={route} />
                    sup
                </div>
            )
        }
    }
}

export default Home
