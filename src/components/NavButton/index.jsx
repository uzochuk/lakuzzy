import { Button} from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos, } from '@material-ui/icons'
import React from 'react'

function NavButton({links, nextPage, prevPage}) {

    return(
               <div style={{display:'flex', justifyContent:'space-around', width:'100%', marginTop:'20px'}}>
               
               <Button variant='contained' color='primary' disabled={!links.previous} value="prev" onClick={()=>prevPage()}>
                <ArrowBackIos></ArrowBackIos>Prev
                </Button>
                
                <Button variant='contained' color='primary' disabled={!links.next} value="next" onClick={()=>nextPage()}>
                    Next <ArrowForwardIos></ArrowForwardIos>
                </Button>
                </div>
            )
    
}

export default NavButton
