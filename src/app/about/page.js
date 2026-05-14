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
                    <div className="code-lab-by">THE STORY BEHIND</div>
                    <div className="hero-name-image">
                        <Image src="/images/Rocket.lk name.bbt.png" alt="Rocketcode.lk" width={700} height={200} priority style={{ width: '100%', height: 'auto', maxWidth: '700px' }} />
                    </div>
                    <p className="hero-tagline">People, Passion & Purpose</p>
                </div>
            </div>

            <main className="main-content">

                {/* ── COMPANY OVERVIEW ── */}
                <section className="content-section fade-in">
                    <div className="section-container">
                        <h2 className="college">ABOUT THE CODE LAB</h2>
                        <div className="section-content">
                            <p>Rocket Code Lab is a Sri Lankan software development studio established in 2024, built on the belief that world-class digital solutions can be crafted from anywhere. We partner with clients across industries to design, develop, and deliver technology that is elegant in form and powerful in function.</p>
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                        </div>
                        <div className="hero-name-image">
                            <Image src="/images/Rocket.png" alt="Rocketcode.lk" width={700} height={700} priority style={{ width: '100%', height: 'auto', maxWidth: '700px' }} />
                        </div>
                        <h2 className="college">WHY 'ROCKET'?</h2>
                        <div className="section-content">
                            <p>Rocket Code Lab is a Sri Lankan software development studio established in 2024, built on the belief that world-class digital solutions can be crafted from anywhere. We partner with clients across industries to design, develop, and deliver technology that is elegant in form and powerful in function.</p>
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                        </div>
                    </div>
                </section>
                <div className="classic-band">
                    <div className="classic-container">
                        <span className="classic-eyebrow">How it began</span>
                        <div className="classic-divider"></div>
                        <h2 className="collegelight">FOUNDER</h2>
                    </div>
                </div>
                <section className="content-section fade-in">
                    <div className="section-container">
                        <div className="section-content">
                            <p>Rocket Code Lab is a Sri Lankan software development studio established in 2024, built on the belief that world-class digital solutions can be crafted from anywhere. We partner with clients across industries to design, develop, and deliver technology that is elegant in form and powerful in function.</p>
                            <div className="founder-img-wrapper">
                                <div className="founder-img">
                                    <Image src="/images/founder_V1.png" alt="Rocketcode.lk" width={200} height={200} priority style={{ width: '100%', height: 'auto', maxWidth: '350px' }} />
                                </div>
                            </div>
                            <div className="classic-divider"></div>
                            <p className="classic-lead">Engineer. Author. Creator.</p>
                            <p className="classic-lead">BSc(Hons)Software Engineering.UK</p>
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                            {/* ── PUBLISHED WORK ── */}
                            <div style={{ marginBottom: '4rem' }}>
                                <h3 className="classic-subhead">Published Work</h3>
                                <div style={{ display: 'flex', gap: '3rem', alignItems: 'stretch', background: '#659bdeff', border: '2px solid #d0daf0', borderLeft: '6px solid #1e429b', borderRadius: '4px', padding: '2.5rem' }}>

                                    {/* Book Cover */}
                                    <div style={{ flexShrink: 0, width: '180px' }}>
                                        <div style={{ position: 'relative', width: '180px', boxShadow: '6px 6px 20px rgba(30,66,155,0.25), -2px 0 0 #162f70', borderRadius: '3px', overflow: 'hidden' }}>
                                            <Image
                                                src="/images/books/spartan.jpg"
                                                alt="Spartan Gold — Sinhala Edition Cover"
                                                width={180}
                                                height={270}
                                                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                                            />
                                            {/* Spine highlight */}
                                            <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.35), transparent)' }} />
                                        </div>
                                    </div>

                                    {/* Book Details */}
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', background: '#2e66d4', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>Published</span>
                                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', background: '#D4AF37', color: '#0a0f1e', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>NYT Bestseller Translation</span>
                                        </div>
                                        <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.6rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1e429b', marginBottom: '0.3rem' }}>Spartan Gold — Sinhala Edition</h4>
                                        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', color: '#4a5680', marginBottom: '0.3rem' }}>Original by <strong>Clive Cussler</strong> — New York Times Best Selling Author</p>
                                        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', color: '#4a5680', marginBottom: '1rem' }}>Published under copyright licences by <strong>Muses Publishing House (Pvt) Ltd</strong></p>
                                        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.05rem', color: '#1a2550', lineHeight: '1.8', marginBottom: 0 }}>An internationally acclaimed adventure thriller brought to life in Sinhala for Sri Lankan readers. As part-author and translator, Vihanga preserved both the pulse-pounding momentum and narrative depth of the original, making this iconic work accessible to a whole new audience.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="classic-band">
                    <div className="classic-container">
                        <span className="classic-eyebrow">How it began</span>
                        <div className="classic-divider"></div>
                        <h2 className="collegelight">VISION</h2>
                    </div>
                </div>
                <section className="content-section fade-in">
                    <div className="section-container">
                        <div className="section-content">
                            <p>Rocket Code Lab is a Sri Lankan software development studio established in 2024, built on the belief that world-class digital solutions can be crafted from anywhere. We partner with clients across industries to design, develop, and deliver technology that is elegant in form and powerful in function.</p>
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                        </div>
                    </div>
                </section>
                <div className="classic-band">
                    <div className="classic-container">
                        <span className="classic-eyebrow">How it began</span>
                        <div className="classic-divider"></div>
                        <h2 className="collegelight">MISSION</h2>
                    </div>
                </div>
                <section className="content-section fade-in">
                    <div className="section-container">
                        <div className="section-content">
                            <p>Rocket Code Lab is a Sri Lankan software development studio established in 2024, built on the belief that world-class digital solutions can be crafted from anywhere. We partner with clients across industries to design, develop, and deliver technology that is elegant in form and powerful in function.</p>
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                        </div>
                    </div>
                </section>
                <div className="classic-band">
                    <div className="classic-container">
                        <span className="classic-eyebrow">How it began</span>
                        <div className="classic-divider"></div>
                        <h2 className="collegelight">PROJECTS DELIVERED</h2>
                    </div>
                </div>
                <section className="content-section fade-in">
                    <div className="section-container">
                        <div className="section-content">
                            <Image src="/images/reelevo.png" alt="Reelevo" width={300} height={125} priority style={{ maxWidth: '700px' }} />
                            <p>Rocket Code Lab is a Sri Lankan software development studio established in 2024, built on the belief that world-class digital solutions can be crafted from anywhere. We partner with clients across industries to design, develop, and deliver technology that is elegant in form and powerful in function.</p>
                            <Image src="/images/smartstore.png" alt="Smartstore" width={300} height={125} priority style={{ maxWidth: '700px' }} />
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                            <Image src="/images/supercar.png" alt="Smartstore" width={300} height={125} priority style={{ maxWidth: '700px' }} />
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                        </div>
                    </div>
                </section>
                {/* ── CTA ── */}
                <section className="content-section fade-in" style={{ textAlign: 'center' }}>
                    <div className="section-container">
                        <h2 className="college" style={{ fontSize: '64px' }}>LET'S BUILD SOMETHING GREAT</h2>
                        <div className="section-content" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            <p>Have a project in mind? We would love to hear about it. Reach out and let's start the conversation.</p>
                        </div>
                        <div className="cta-buttons">
                            <a href="/#contact" className="primary-btn" style={{ padding: '0.8rem 2rem', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '4px', background: '#ffffff', color: '#1e429b', border: '2px solid #ffffff', display: 'inline-block' }}>Get in Touch</a>
                            <a href="/" className="secondary-btn" style={{ padding: '0.8rem 2rem', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '4px', background: '#2e66d4', color: '#fff', border: '2px solid #2e66d4', display: 'inline-block' }}>View Our Work</a>
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