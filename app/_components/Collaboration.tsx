'use client';

export default function Collaboration() {
    return (
        <section className="py-10 border-b border-gray-50 bg-gray-100 ">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="mb-6 leading-tight" style={{ fontSize: 'var(--fs-h2)' }}>
                            Collaboration that makes adoption, <br />
                            <span className="text-gradient-blue">Smoother, faster, safer!</span>
                        </h2>
                        <p className="text-light text-lg leading-relaxed">
                            Whether you're looking for specialized solutions for point of care and frontline clinician workflows, we provide an essential foundation for digital healthcare and integrated patient management.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center justify-center md:justify-end gap-6 transition-all duration-700">
                        {/* Partner Logos Placeholders */}
                        <img src="/home/collaboration-1.png" width={"150px"} alt="MEVTEC" />
                        <img src="/home/collaboration-2.png" width={"150px"} alt="Canon" />
                        <img src="/home/collaboration-3.png" width={"150px"} alt="Partner" />
                    </div>
                </div>
            </div>
        </section>
    );
}
