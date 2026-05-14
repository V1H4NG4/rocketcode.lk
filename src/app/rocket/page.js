"use client";

import { useEffect, useRef } from "react";
import "../styles/rocket.css";

export default function Home() {
    const rocketRef = useRef(null);

    useEffect(() => {
        // Parallax star twinkle randomization
        const stars = document.querySelectorAll(".star");
        stars.forEach((star) => {
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        });
    }, []);

    return (
        <div className="launch-page">
            {/* Starfield */}
            <div className="starfield">
                {Array.from({ length: 80 }).map((_, i) => (
                    <div
                        key={i}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 70}%`,
                            width: `${1 + Math.random() * 2}px`,
                            height: `${1 + Math.random() * 2}px`,
                        }}
                    />
                ))}
            </div>

            {/* Sky gradient layers */}
            <div className="sky-layer sky-deep" />
            <div className="sky-layer sky-mid" />
            <div className="sky-layer sky-horizon" />

            {/* Moon */}
            <div className="moon">
                <div className="moon-crater" style={{ top: "20%", left: "25%", width: "18px", height: "18px" }} />
                <div className="moon-crater" style={{ top: "55%", left: "55%", width: "10px", height: "10px" }} />
                <div className="moon-crater" style={{ top: "30%", left: "60%", width: "14px", height: "14px" }} />
            </div>

            {/* Main rocket scene */}
            <div className="scene">
                {/* Smoke cloud cluster — at the bottom */}
                <div className="smoke-cluster">
                    <div className="smoke-puff puff-1" />
                    <div className="smoke-puff puff-2" />
                    <div className="smoke-puff puff-3" />
                    <div className="smoke-puff puff-4" />
                    <div className="smoke-puff puff-5" />
                    <div className="smoke-puff puff-6" />
                    <div className="smoke-ring ring-1" />
                    <div className="smoke-ring ring-2" />
                </div>

                {/* Rocket assembly */}
                <div className="rocket-wrapper" ref={rocketRef}>
                    {/* Exhaust flame trail */}
                    <div className="exhaust-trail">
                        <div className="trail-segment seg-1" />
                        <div className="trail-segment seg-2" />
                        <div className="trail-segment seg-3" />
                    </div>

                    {/* Flame silhouette */}
                    <div className="flame-group">
                        <div className="flame flame-outer" />
                        <div className="flame flame-mid" />
                        <div className="flame flame-inner" />
                        <div className="flame flame-core" />
                    </div>

                    {/* Rocket body */}
                    <div className="rocket">
                        {/* Nose cone */}
                        <div className="nose-cone" />

                        {/* Body */}
                        <div className="rocket-body">
                            {/* Window */}
                            <div className="porthole">
                                <div className="porthole-inner" />
                                <div className="porthole-shine" />
                            </div>
                            {/* Body stripe */}
                            <div className="body-stripe" />
                            {/* Side boosters */}
                            <div className="side-booster booster-left" />
                            <div className="side-booster booster-right" />
                        </div>

                        {/* Fins */}
                        <div className="fins">
                            <div className="fin fin-left" />
                            <div className="fin fin-right" />
                        </div>

                        {/* Nozzle */}
                        <div className="nozzle" />
                    </div>
                </div>
            </div>

            {/* Brand overlay */}
            <div className="brand-overlay">
                <div className="brand-tagline">launching</div>
                <h1 className="brand-name">rocket<span>.lk</span></h1>
                <p className="brand-sub">We build things that go places.</p>
                <div className="cta-row">
                    <button className="cta-primary">Ignite Your Project</button>
                    <button className="cta-ghost">Learn More</button>
                </div>
            </div>

            {/* Ground */}
            <div className="ground-layer">
                <div className="ground-glow" />
                <div className="launch-pad" />
                <div className="launch-pad-arm arm-left" />
                <div className="launch-pad-arm arm-right" />
            </div>
        </div>
    );
}