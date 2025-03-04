import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { OrbitingSkills } from '../components/OrbitCircular.jsx';
import { NeonGradientCard } from '../components/animations/borderAnimation.jsx';
import { Canvas } from '@react-three/fiber';
import { Keyboard } from '../components/animations/keyboard.jsx';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const handleCopy = () => {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };
    const options = [8, 7, 9, 10, 11];
    const [selected, setSelected] = useState(9);
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <NeonGradientCard borderSize={1} className=" flex items-center justify-center text-center">
                            <img src="assets/about1.jpg" alt="grid-1" className=" rounded-md" />
                        </NeonGradientCard>
                        <div>
                            <p className="grid-headtext">Hi, I’m Kiranjeet Kour</p>
                            <p className="grid-subtext">
                                With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                                and responsive websites.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <OrbitingSkills />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Ludhiana, India', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Ludhiana, Croatia and open to remote work worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <Canvas className="w-full h-full">
                            <Suspense fallback={<CanvasLoader />}>

                                <PerspectiveCamera makeDefault position={[0, 10, -7]} />
                                <OrbitControls enableZoom={false} />

                                <ambientLight intensity={0.5} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                                <pointLight position={[-10, -10, -10]} intensity={0.5} />


                                <Keyboard position={[0, 0, 0]} rotation={[0.1, -Math.PI, 0]} scale={[2.5, 3, 3]} />
                            </Suspense>

                        </Canvas>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                            <div className="relative flex items-center gap-4">
                                {options.map((num, index) => (
                                    <button
                                        key={num}
                                        className={`relative flex items-center justify-center w-12 h-12 text-gray-400 bg-gray-800 rounded-full transition-all duration-300 
              ${selected === num ? "w-16 h-20 text-white animate-pulse bg-gray-800 border-2 border-[#00FFF1] animate-border-pulse" : "hover:text-white hover:bg-gray-700"}            `}
                                        onClick={() => setSelected(num)}
                                    >
                                        {num}
                                    </button>                                ))}
                            </div>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;