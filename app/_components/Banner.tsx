'use client';
import { useState, useRef, useEffect } from 'react';

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_01.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_02.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_03.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_04.webm",
];

export default function Banner() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentVideoIndex) {
                    video.currentTime = 0;
                    video.play().catch((err) => console.log("Video play failed", err));
                } else {
                    video.pause();
                }
            }
        });
    }, [currentVideoIndex]);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Hero Image Placeholder */}
            <div className="absolute inset-0 bg-[#1a1a1a]">
                {/* The user will place image here */}
                {/* The user will place image here */}
                {bannerVideos.map((src, index) => (
                    <video
                        key={index}
                        ref={(el) => {
                            if (el) videoRefs.current[index] = el;
                        }}
                        src={src}
                        muted
                        playsInline
                        onEnded={index === currentVideoIndex ? handleVideoEnd : undefined}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${index === currentVideoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        preload="auto"
                    />
                ))}
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/0 to-transparent z-10"></div>
            </div>

            <div className="container relative z-10">
                <div className="max-w-2xl text-white">
                    <h1 data-aos="fade-right" data-aos-delay="500" className="mb-6 drop-shadow-2xl font-heading leading-tight" style={{ fontSize: 'var(--fs-h1)' }}>
                        Mobile Platforms, <br />
                        <span className="text-secondary">you can count on.</span>
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="700" className="text-xl opacity-90 leading-relaxed max-w-lg mb-10 font-sans" >
                        Bytec Healthcare standard mobile workstations and ergonomic product line for today's modern healthcare environments.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="900" className="flex gap-4">
                        <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-3 group shadow-xl shadow-black/20">
                            Explore Solutions
                            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
