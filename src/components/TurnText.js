import React,{useState,useEffect} from 'react'
import chess from '../apis/chess'



const TurnText = ({text}) => {
  const [loading,setLoading] = useState('loading')

  useEffect(() => {
    checkServer()
  },[])

  const checkServer = async () => {

      const response = await chess.get('/ping')
      console.log(response.data)
      if(response.data==='ping'){
        console.log('ping received')
        setLoading('nope')
      }
      else{
        console.log('loading still')
      }
    }




  if(loading==='loading'){
    return(<p style={{color:'red'}}>Loading Please Wait Before Moving...</p>)
  }
  else{
    return(text)
  }



}

export default TurnText
