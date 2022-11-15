import * as React from 'react';

import { styles } from './styles';
import { useQrReader } from './hooks';
import useWindowDimensions from "../useWindowDimensions";


export const QrReader = ({
  videoContainerStyle,
  containerStyle,
  videoStyle,
  constraints,
  ViewFinder,
  scanDelay,
  className,
  onResult,
  videoId,
}) => {
  
  const { height, width } = useWindowDimensions();
  const videoRef = React.useRef(null);
  
  React.useEffect(() => {
    getVideo();
  })
  
  const getVideo = () => {
    console.log("Height: " + height);
    console.log("Width: " + width);
    
    navigator.mediaDevices
    .getUserMedia({
        video: { width: 375, height: 667 },
      })
      .then((stream) => {
        let video = videoRef.current;
        
        video.srcObject = stream;
        
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
    };
    
    useQrReader({
      constraints,
      scanDelay,
      onResult,
      videoId,
    });
    
    return (
      <section >
      <div
        // style={{
          //   ...styles.container,
          //   ...videoContainerStyle,
          // }}
          >
        {!!ViewFinder && <ViewFinder />}
        <video
          ref={videoRef}
          muted
          id={videoId}
          style={{
            // ...styles.video,
            // ...videoStyle,
            transform: constraints?.facingMode === 'user' && 'scaleX(-1)',
          }}
        />
      </div>
    </section>
  );
};

QrReader.displayName = 'QrReader';
QrReader.defaultProps = {
  video: {
  
  },
  constraints: {
    facingMode: 'environment',
  },
  videoId: 'video',
  scanDelay: 500,
};





















// import * as React from 'react';

// import { styles } from './styles';
// import { useQrReader } from './hooks';

// export const QrReader = ({
//   videoContainerStyle,
//   containerStyle,
//   videoStyle,
//   constraints,
//   ViewFinder,
//   scanDelay,
//   className,
//   onResult,
//   videoId,
// }) => {
//   useQrReader({
//     constraints,
//     scanDelay,
//     onResult,
//     videoId,
//   });

//   return (
//     <section className={className} style={containerStyle}>
//       <div
//         style={{
//           ...styles.container,
//           ...videoContainerStyle,
//         }}
//       >
//         {!!ViewFinder && <ViewFinder />}
//         <video
//           muted
//           id={videoId}
//           style={{
//             ...styles.video,
//             ...videoStyle,
//             transform: constraints?.facingMode === 'user' && 'scaleX(-1)',
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// QrReader.displayName = 'QrReader';
// QrReader.defaultProps = {
//   constraints: {
//     facingMode: 'user',
//   },
//   videoId: 'video',
//   scanDelay: 500,
// };
