import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import video from '../../assets/web-video.mp4';
import ScrollReveal from 'scrollreveal';
import './SolutionContent.css';

function SolutionContent() {

  const [sr, setSr] = useState(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    setSr(scrollReveal);

    return () => {
      if (sr) {
        sr.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (sr) {
      sr.reveal('.slide-left', {
        origin: 'left',
        scale: 1.2,
        delay:300,
        interval: 300,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  useEffect(() => {
    if (sr) {
      sr.reveal('.slide-right', {
        origin: 'right',
        scale: 1.2,
        delay: 500, // Delay after the image animation
        interval: 250,
        easing: 'ease-out',
      });
    }
  }, [sr]);

;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoElementRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoElementRef.current;
      if (!videoElement) return;

      const { top, bottom } = videoElement.getBoundingClientRect();
      const isVideoVisible = top < window.innerHeight && bottom >= 0;

      if (isVideoVisible && !isVideoPlaying) {
        videoElement.play();
        setIsVideoPlaying(true);
      } else if (!isVideoVisible && isVideoPlaying) {
        videoElement.pause();
        setIsVideoPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVideoPlaying]);

  const handleVideoClick = () => {
    const videoElement = videoElementRef.current;

    if (isVideoPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }

    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className='container-back'>
      <Container fluid className='overflow-hidden' >
        <Row className=''>
          <Col lg={8} md={8} sm={12} className='mb-4 slide-left'>
            <video
              ref={videoElementRef}
              id="solution-video"
              className="img-fluid mt-lg-5 mb-lg-5 pb-sm-0"
              muted
              autoPlay
              loop
              onClick={handleVideoClick}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col lg={4} md={4} sm={12} className='d-flex align-items-center slide-right'>
            <div className=' mt-sm-3  '>
              <h2 className=''>Behind the Scenes: Crafting Your Dynamic Website</h2>
              <p>
              Step behind the curtain and witness our creative process unfold. Explore how we infuse innovation into every step, from concept to completion. Guiding your business towards digital excellence, we combine expertise, insight, and a touch of magic to craft captivating websites that stand out in the online landscape.
              </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SolutionContent;
