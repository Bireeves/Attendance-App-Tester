import React, { Component, useEffect, useRef } from "react";
import { QrReader } from "./QrReader/index";
import useWindowDimensions from "./useWindowDimensions";

function QrCoder() {
  let delay = 100;
  const { height, width } = useWindowDimensions();
  const videoRef = useRef(null);

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  // const getVideo = () => {
  //   console.log("Height: " + height);
  //   console.log("Width: " + width);

  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: { width: 375, height: 667 },
  //     })
  //     .then((stream) => {
  //       let video = videoRef.current;

  //       video.srcObject = stream;

  //       video.play();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <QrReader />

      {/* <video ref={videoRef} /> */}

      {/* <QrCoder /> */}

      {/* <p>{this.state.result}</p> */}
    </div>
  );
}

// class QrCoder extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       delay: 100,
//       result: 'No result',
//     }

//     this.handleScan = this.handleScan.bind(this)
//   }
//   handleScan(data){
//     this.setState({
//       result: data,
//     })
//   }
//   handleError(err){
//     console.error(err)
//   }
//   render(){
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }

//     return(
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           />
//         <p>{this.state.result}</p>
//       </div>
//     )
//   }
// }

export default QrCoder;
