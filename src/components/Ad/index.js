import React from 'react'
import { AdBg,VideoBg,Vidtext,H1,Container} from './AdElements'
import Video from '../../videos/video2.mp4';

const Ad = () => {
  return (
    <Container>
        <AdBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </AdBg>

        <Vidtext>
          <H1>You Can Create The Story Now</H1>
          <p>The biggist dolls collection is here</p>
        </Vidtext>
      
    </Container>
  )
}

export default Ad
