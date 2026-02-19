'use client';

import { useState } from 'react';

const tabData = [
    {
        name: "Medtronics",
        title: "Medtronic",
        subheading: "Building the Connected Operating Room of the Future",
        description: "Neagen Energist is leading innovation in cold plasma therapy for skin regeneration and scar reduction. Bytec Healthcare created a custom medical cart to house and support the system, ensuring safety, mobility, and reliability in hospitals and clinics, and helping make Neagen's pioneering treatment accessible worldwide.",
        image: "/home/tab-main-1.webp",
        logo: "/home/tab-1.png"
    },
    {
        name: "Echo-Point",
        title: ")( Echopoint",
        subheading: "Revealing the Unseen in Cardiac Care",
        description: "EchoPoint Medical is transforming heart diagnostics with advanced microcatheter technology that reveals conditions traditional tools often miss. Bytec healthcare engineered the complete hardware platform, from the cart and housing to the electronics, turning EchoPoint's concept into a clinically deployable device that helps deliver more accurate and informed cardiac care.",
        image: "/home/tab-main-2.webp",
        logo: "/home/tab-2.png"
    },
    {
        name: "Energist",
        title: "NEOGEN",
        subheading: "Transforming Skin Regeneration",
        description: "Neagen Energist is leading innovation in cold plasma therapy for skin regeneration and scar reduction. Bytec Healthcare created a custom medical cart to house and support the system, ensuring safety, mobility, and reliability in hospitals and clinics, and helping make Neagen's pioneering treatment accessible worldwide.",
        image: "/home/tab-main-3.webp",
        logo: "/home/tab-3.jpg"
    }
];

export default function TabsContent() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="section bg-bg-gray">
            <div className="container">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap rounded-t-3xl overflow-hidden shadow-sm" data-aos="fade-up">
                    {tabData.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`flex-1 py-5 font-bold tracking-widest text-sm uppercase transition-all duration-300 ${activeTab === i ? 'bg-gradient-to-r from-secondary to-primary text-white border-t-4 border-secondary' : 'bg-gray-200 text-primary hover:bg-gray-300'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                {/* Active Tab Content Area */}
                <div className="bg-white p-12 lg:p-20 rounded-b-3xl shadow-sm border-x border-b border-gray-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="mb-6 h-12 flex items-center">
                                <img
                                    src={tabData[activeTab].logo}
                                    alt={tabData[activeTab].title}
                                    className="h-full object-contain"
                                />
                            </div>
                            <h3 className="text-secondary font-bold mb-8 italic" style={{ fontSize: 'var(--fs-h3)' }}>{tabData[activeTab].subheading}</h3>
                            <p className="text-light leading-relaxed mb-8">
                                {tabData[activeTab].description}
                            </p>
                        </div>
                        <div className="aspect-video rounded-2xl overflow-hidden relative shadow-md">
                            <img
                                key={activeTab}
                                src={tabData[activeTab].image}
                                alt={tabData[activeTab].title}
                                className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in fill-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
