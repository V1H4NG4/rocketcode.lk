"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css';

export default function About() {
    useEffect(() => {
        const initScrollReveal = async () => {
            const ScrollReveal = (await import('scrollreveal')).default;

            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 1000,
                delay: 200,
                reset: false,
            });

            document.addEventListener('contextmenu', (e) => e.preventDefault());

            sr.reveal('.fade-in', {
                opacity: 0,
                scale: 0.9,
            });

            sr.reveal('.float-in', {
                distance: '100px',
                origin: 'right',
            });

            sr.reveal('.slide-up', {
                distance: '60px',
                origin: 'bottom',
            });

            sr.reveal('.zoom-in', {
                scale: 0.85,
                opacity: 0,
            });

            sr.reveal('.slide-left', {
                distance: '80px',
                origin: 'left',
            });

            sr.reveal('.slide-right', {
                distance: '80px',
                origin: 'right',
            });
        };

        initScrollReveal();
    }, []);

    return (
        <div className="landing-page">
            <Head>
                <title>About | Rocket.lk Code Lab</title>
                <meta name="description" content="Meet the founder and learn the story behind Rocket Code Lab." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* ── NAVBAR ── */}
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <div className="logo-image-wrapper">
                            <Image src="/images/rocket.png" alt="Rocket Logo" width={78} height={78} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/#news">News</a>
                        <a href="/#careers">Careers</a>
                        <a href="/#pricing">Pricing</a>
                        <a href="/#contact">Contact</a>
                        <a href="/#contact" className="contact-btn">Login</a>
                    </div>
                </div>
            </nav>

            {/* ── ABOUT HERO ── */}
            <div className="hero-section" style={{ minHeight: '55vh', height: 'auto', paddingTop: 'calc(var(--navbar-height) + 5rem)', paddingBottom: '5rem' }}>
                <div className="hero-grid-overlay" />
                <div className="hero-content">
                    <div className="code-lab-by">GROW YOUR FUTURE WITH</div>
                    <div className="hero-name-image">
                        <Image src="/images/Rocket.lk name.bbt.png" alt="Rocket.lk" width={700} height={200} priority style={{ width: '100%', height: 'auto', maxWidth: '700px' }} />
                    </div>
                    <p className="hero-tagline">People, Passion & Purpose</p>
                </div>
            </div>

            <main className="main-content">

                {/* ── PRICING ── */}


                {/* ── CTA ── */}
                <section className="content-section fade-in" style={{ textAlign: 'center' }}>
                    <div className="section-container">
                        <h2 className="college" style={{ fontSize: '64px' }}>HAVEN'T SEEN THE POSITION YOU INTEND?</h2>
                        <div className="section-content" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            <p>Send us your resume. We would love to see you by our side.</p>
                        </div>
                        <div className="cta-buttons">
                            <a href="/#contact" className="primary-btn" style={{ padding: '0.8rem 2rem', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '4px', background: '#ffffff', color: '#1e429b', border: '2px solid #ffffff', display: 'inline-block' }}>Get in Touch</a>
                            <a href="/" className="secondary-btn" style={{ padding: '0.8rem 2rem', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '4px', background: '#2e66d4', color: '#fff', border: '2px solid #2e66d4', display: 'inline-block' }}>Upload Resume</a>
                        </div>
                    </div>
                </section>

            </main>

            {/* ── FOOTER ── */}
            <footer className="footer">
                <div className="classic-section fade-in">
                    <div className="footer-container">
                        <div className="footer-logo">
                            <Image src="/images/rocketname.png" alt="Rocket.lk Logo" width={300} height={85} />
                        </div>
                        <div className="footer-nav">
                            <div className="footer-column">
                                <h4>Company</h4>
                                <a href="/about">About Us</a>
                                <a href="/#careers">Careers</a>
                                <a href="/#blog">Blog</a>
                            </div>
                            <div className="footer-column">
                                <h4>Services</h4>
                                <a href="/#uiux">UI/UX Design</a>
                                <a href="/#backend">Backend Development</a>
                                <a href="/#database">Database Solutions</a>
                            </div>
                            <div className="footer-column">
                                <h4>Legal</h4>
                                <a href="#privacy">Privacy Policy</a>
                                <a href="#terms">Terms of Service</a>
                                <a href="#cookies">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© {new Date().getFullYear()} RocketCode.lk. All rights reserved. Designed and Developed by <a href="https://github.com/V1H4N94">Vihanga Jayakody</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}