import React, {useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)





    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(card, {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',

                    }
                }
            )
        })
        gsap.fromTo(project1Ref.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 2,
            }
        )
    }, []);

    return (
        <section id={'work'} ref={sectionRef} className={'app-showcase'}>
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <a href="https://skateboard-six.vercel.app/" target={"_blank"}>
                            <div className="image-wrapper">
                                <img src="/images/project1.png" alt="Surburbia"/>
                            </div>
                            <div className="text-content">
                                <h2>Skateboard Shop Store Front</h2>
                                <p className={'text-white-50 md:text-xl'}>
                                    Interactive e-commerce homepage (Next.js, Tailwind, Three.js, Prismic).
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="project-list-wrapper overflow-hidden">
                        <a href="https://interview-ai-topaz.vercel.app/" target={"_blank"}>
                            <div className="project" ref={project2Ref}>
                                <div className={'image-wrapper bg-[#ffe7eb]'}>
                                    <img src="/images/project2.png" alt="Mock Interview"/>
                                </div>
                                <h2>AI Interview Platform</h2>
                            </div>
                        </a>
                        <a href="https://uni-assign.netlify.app/" target={"_blank"}>
                            <div className="project" ref={project3Ref}>
                                <div className={'image-wrapper bg-[#ffe7eb]'}>
                                    <img src="/images/project3.png" alt="old School restaurent site"/>
                                </div>
                                <h2>Mock Restaurant Site</h2>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ShowcaseSection
