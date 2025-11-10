import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Banner from './Banner';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="my-8">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <Banner
                        imageUrl="https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?semt=ais_hybrid&w=740&q=80"
                        linkUrl="/courses/graphic-design"
                        title="Graphic Design Basics"
                        paragraph="Learn design principles, create social media graphics & logos using Canva and Photoshop."
                        buttonText="View Course"
                        onButtonClick={() => navigate("/skill/7")}
                    />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <Banner
                        imageUrl="https://media.licdn.com/dms/image/v2/D5612AQEeG7oJTTK1Ew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680514548971?e=2147483647&v=beta&t=ZflFgTlsj2QryThKQ9JiTbBZ3SyYxPoPY2NLv8-Aa3o"
                        linkUrl="/courses/graphic-design"
                        title="Frontend Web Development"
                        paragraph="Learn HTML, CSS, and JavaScript fundamentals to build responsive and interactive websites."
                        buttonText="View Course"
                        onButtonClick={() => navigate("/skill/8")}
                    />
                </SwiperSlide>

                {/* slide - 03 */}

                <SwiperSlide>
                    <Banner
                        imageUrl="https://eduurban.com/wp-content/uploads/2022/09/Rev_Web_Banner_Edu_Urban_a_Spoken_English_Main_Banner.jpg"
                        linkUrl="/courses/graphic-design"
                        title="Spoken English Practice"
                        paragraph="Interactive English conversation sessions for non-native speakers. Focus on fluency and pronunciation."
                        buttonText="View Course"
                        onButtonClick={() => navigate("/skill/2")}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
