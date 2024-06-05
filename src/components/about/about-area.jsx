import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const contents = {
  title:'Open minded and ready to embrace new opportunities',
  video_title:'',
  video_id:'8D6b3McyhhU',
  right_text_1:"Our team of professional support staff and management with wide experience in the industry, providing both the technical and practical capabilities to carry out a wide variety of works",
  right_text_2:"We are extremely flexible and aim to meet the requirements of our clients and adapt to their expectations. We strive to deliver solutions, quality services, on time, on budget and most importantly… safely.",
  client_icon:'/assets/img/about/testi-7.png',
  client_name:'RCF-SPECIALISTS',
  client_title:'REINFORCED CONCRETE FRAMES SPECIALISTS',
  desc:"YSL CIVILS have vast experience constructing reinforced concrete frames for residential and commercial projects. Cast to any shape you require and for any number of required storeys, we are able to help.",
  about_img:'/assets/img/breadcrum/ab-1.2.jpg',
  client2_icon:'/assets/img/about/testi-18.png',
  client2_name:'YSL CIVILS GROUNDWORKS',
  client2_title:'',
  desc2:"Underpinning - Retaining foundations & walls - Sub DPC - Block & beam works - Concrete slab & oversite works - Utility service trenching - Site clearance work - Underground drainage installations& repairs - Earth moving - Roads, drives and car park .",
  about2_img:'/assets/img/breadcrum/ab-1.2.jpg',
}
const {about_img,client_icon,client_name,client_title,desc,right_text_1,right_text_2,title,video_id,client2_icon,client2_name,client2_title,desc2,about2_img} = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title"><a href="#">{title}</a></h3>
                  {/* <div className="ac-play-button">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div> */}
                </div>
              </div> 
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img src={client_icon} alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name"><a href="#">{client_name}</a></h4>
                    <span>{client_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-right"></i></span>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <img src={about_img} alt="" />
              </div>
            </div>
          </div>
          {/* client_2 */}
          <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img src={client2_icon} alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name"><a href="#">{client2_name}</a></h4>
                    <span>{client2_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-right"></i></span>{desc2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <img src={about2_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;