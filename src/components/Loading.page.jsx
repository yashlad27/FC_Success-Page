import React from 'react'

// import { DsStack, DsTypography } from '@am92/react-design-system'
import Lottie from 'lottie-react'

import loadingAnimation from '../assests/loading.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    // <DsStack
    //   width="100%"
    //   height="100vh"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    //   <DsStack
    //     width="373px"
    //     alignItems="center"
    //     justifyContent="center"
    //     direction="column"
    //     textAlign="center"
    //   >
        <Lottie
          options={defaultOptions}
          animationData={loadingAnimation}
          style={{
            width: '188px',
            height: '188px'
          }}
        />

    //     <DsTypography variant="headingBoldLarge">
    //       Loading...
    //     </DsTypography>
    //   </DsStack>
    // </DsStack>
  )
}

export default Loading