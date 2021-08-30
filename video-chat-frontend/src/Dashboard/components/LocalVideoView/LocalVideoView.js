import React, { useRef, useEffect } from 'react';

const styles = {
  videoContainer: {
    maxWidth: '150px',
    maxHeight: '150px',
    borderRadius: '18px',
    position: 'absolute',
    top: '5%',
    right: '23%'
  },
  videoElement: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '18px',
  }
};

const LocalVideoView = props => {
  const { localStream } = props;
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    <div style={styles.videoContainer} className='background_secondary_color'>
      <video style={styles.videoElement} ref={localVideoRef} autoPlay muted />
    </div>
  );
};

export default LocalVideoView;
