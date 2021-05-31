import React, { useEffect } from 'react'
import AvailableChats from '../components/AvailableChats'
import JoinedChats from '../components/JoinedChats'
import { ViewTitle } from '../components/shared/ViewTitle';
import  {fetchChats} from '../actions/chats';
import {useDispatch, useSelector} from 'react-redux';



export const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch( fetchChats());
    },[dispatch])

    const chats= useSelector(({chats})=>chats.items)
    return (
        <div className="row no-gutters fh">
          <div className="col-3 fh">
          <JoinedChats chats={chats}/>
          </div>
          
          <div className="col-9 fh">
              <ViewTitle text={"Choose your channel"}/>
             <AvailableChats chats={chats}/>
          </div>
        </div>
    
    )
}
