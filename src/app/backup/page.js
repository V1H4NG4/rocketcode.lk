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
                        <Image src="/images/Rocket.lk name.bbt.png" alt="Rocket.lk" width={700} height={200} priority style={{ width: '100%', height: 'auto', maxWidth: '700px' }} />
                    </div>
                    <p className="hero-tagline">People, Passion & Purpose</p>
                </div>
            </div>

            <main className="main-content">

                {/* ── COMPANY OVERVIEW ── */}
                <section className="content-section fade-in">
                    <div className="section-container">
                        <h2 className="college">ABOUT THE COMPANY</h2>
                        <div className="section-content">
                            <p>Rocket Code Lab is a Sri Lankan software development studio established in 2024, built on the belief that world-class digital solutions can be crafted from anywhere. We partner with clients across industries to design, develop, and deliver technology that is elegant in form and powerful in function.</p>
                            <p>Though young in years, the studio carries the ambition of a seasoned enterprise — driven by a founder who brings together academic excellence, a passion for storytelling, and a deep love for engineering.</p>
                        </div>
                    </div>
                </section>

                {/* ── FOUNDER INTRO ── */}
                <section className="classic-section slide-left">
                    <div className="classic-band">
                        <div className="classic-container">
                            <span className="classic-eyebrow">Founder & Lead Engineer</span>
                            <h2 className="collegelight">Vihanga Piyumal Jayakody</h2>
                            <div className="classic-divider"></div>
                            <p className="classic-lead">Engineer. Author. Creator.</p>
                        </div>
                    </div>
                    <div className="classic-body">
                        <div className="classic-container">
                            <div className="classic-split">
                                <div className="classic-img-col">
                                    <div className="classic-img-frame" style={{ background: '#e8edf8', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #2e66d4' }}>
                                        <Image src="/images/founder.png" alt="Vihanga Jayakody" width={380} height={380} />
                                        <span className="classic-img-badge">Born · 28 January 2001</span>
                                    </div>
                                </div>
                                <div className="classic-txt-col">
                                    <h3 className="classic-subhead">Who Is He?</h3>
                                    <p>Vihanga Piyumal Jayakody is the founder and driving force behind Rocket Code Lab. A First Class Honours graduate in Software Engineering, a published translator, and an aspiring author, Vihanga embodies the rare intersection of technical precision and creative vision.</p>
                                    <p>Born on 28 January 2001, he grew up in Sri Lanka and channelled his curiosity into two worlds that rarely meet: software engineering and literature. That dual pursuit shapes everything Rocket Code Lab stands for — solutions that are not just functional, but thoughtfully crafted.</p>
                                    <ul className="classic-check-list">
                                        <li>✔ BSc (Hons) Software Engineering — First Class</li>
                                        <li>✔ Cardiff Metropolitan University Graduate</li>
                                        <li>✔ Published Author & Translator</li>
                                        <li>✔ British Council YLE Certified</li>
                                        <li>✔ Advanced English — IHRA, University of Colombo</li>
                                        <li>✔ Founder of Rocket Code Lab (est. 2024)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── EDUCATION TIMELINE ── */}
                <section className="classic-section classic-alt slide-right">
                    <div className="classic-band">
                        <div className="classic-container">
                            <span className="classic-eyebrow">Academic Journey</span>
                            <h2 className="collegelight">Education & Credentials</h2>
                            <div className="classic-divider"></div>
                            <p className="classic-lead">A Foundation Built on Excellence</p>
                        </div>
                    </div>
                    <div className="classic-body">
                        <div className="classic-container">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                                {/* Primary */}
                                <div style={{ background: '#ffffff', border: '2px solid #d0daf0', borderTop: '5px solid #2e66d4', borderRadius: '4px', padding: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '2.2rem' }}>🏫</span>
                                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2e66d4', background: '#e8edf8', padding: '0.25rem 0.6rem', borderRadius: '2px' }}>2005 – 2010</span>
                                    </div>
                                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1e429b', marginBottom: '0.5rem' }}>Primary Education</h4>
                                    <p style={{ margin: 0 }}>WP/HO Roman Catholic College, Hanwella — where his foundational years of curiosity and learning were nurtured in a structured, values-driven environment.</p>
                                </div>

                                {/* Secondary */}
                                <div style={{ background: '#ffffff', border: '2px solid #d0daf0', borderTop: '5px solid #2e66d4', borderRadius: '4px', padding: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '2.2rem' }}>🏛️</span>
                                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2e66d4', background: '#e8edf8', padding: '0.25rem 0.6rem', borderRadius: '2px' }}>2011 – 2019</span>
                                    </div>
                                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1e429b', marginBottom: '0.5rem' }}>Secondary Education</h4>
                                    <p style={{ margin: 0 }}>CO/Siri Piyarathana Central College (National College) — a distinguished national institution where his academic aptitude and passion for language took shape over nine formative years.</p>
                                </div>

                                {/* English Language */}
                                <div style={{ background: '#ffffff', border: '2px solid #d0daf0', borderTop: '5px solid #4a84f0', borderRadius: '4px', padding: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '2.2rem' }}>🇬🇧</span>
                                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a84f0', background: '#e8edf8', padding: '0.25rem 0.6rem', borderRadius: '2px' }}>British Council</span>
                                    </div>
                                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1e429b', marginBottom: '0.5rem' }}>English Language — YLE Level 6</h4>
                                    <p style={{ margin: 0 }}>Attained Level 6 in the British Council's Young Learners English programme — a rigorous benchmark of English proficiency that laid the groundwork for his literary career as a translator and author.</p>
                                </div>

                                {/* IHRA */}
                                <div style={{ background: '#ffffff', border: '2px solid #d0daf0', borderTop: '5px solid #4a84f0', borderRadius: '4px', padding: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '2.2rem' }}>📜</span>
                                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4a84f0', background: '#e8edf8', padding: '0.25rem 0.6rem', borderRadius: '2px' }}>University of Colombo</span>
                                    </div>
                                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1e429b', marginBottom: '0.5rem' }}>Advanced English Certificate — IHRA</h4>
                                    <p style={{ margin: 0 }}>Completed a 6-month Advanced Level English Language Certificate Course at the Institute for Human Resource Advancement (IHRA), University of Colombo — further cementing his command of the English language.</p>
                                </div>

                                {/* Degree — spans full width */}
                                <div style={{ gridColumn: '1 / -1', background: '#1e429b', border: 'none', borderLeft: '6px solid #4a84f0', borderRadius: '4px', padding: '2.5rem', color: '#fff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '2.5rem' }}>🎓</span>
                                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '2px' }}>Graduated · 16 February 2026</span>
                                    </div>
                                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.6rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '0.75rem' }}>BSc (Hons) Software Engineering — First Class Honours</h4>
                                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)', margin: 0 }}>Awarded a First Class Honours degree in BSc Software Engineering by Cardiff Metropolitan University on 16 February 2026 — the highest distinction attainable — recognising outstanding academic performance across all aspects of software engineering, from systems design and development to advanced computing theory.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LITERARY WORK ── */}
                {/* ── LITERARY WORK ── */}
                <section className="classic-section slide-left">
                    <div className="classic-band">
                        <div className="classic-container">
                            <span className="classic-eyebrow">Beyond the Code</span>
                            <h2 className="collegelight">Author & Translator</h2>
                            <div className="classic-divider"></div>
                            <p className="classic-lead">Words That Travel Across Worlds</p>
                        </div>
                    </div>
                    <div className="classic-body">
                        <div className="classic-container">
                            <p className="classic-intro-block">Vihanga is not only an engineer — he is a storyteller. His literary work brings internationally celebrated thrillers to Sri Lankan readers in their native Sinhala language, bridging global literature with local culture.</p>

                            {/* ── PUBLISHED WORK ── */}
                            <div style={{ marginBottom: '4rem' }}>
                                <h3 className="classic-subhead">Published Work</h3>
                                <div style={{ display: 'flex', gap: '3rem', alignItems: 'stretch', background: '#e8edf8', border: '2px solid #d0daf0', borderLeft: '6px solid #1e429b', borderRadius: '4px', padding: '2.5rem' }}>

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

                            {/* ── WORKS IN PROGRESS ── */}
                            <div>
                                <h3 className="classic-subhead">Works in Progress</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>

                                    {/* The Templar Legacy */}
                                    <div style={{ background: '#fff', border: '2px solid #d0daf0', borderTop: '5px solid #2e66d4', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ position: 'relative', width: '250px', aspectRatio: '2/3', overflow: 'hidden', background: '#d0daf0', margin: '0 auto' }}>
                                            <div className="book-cover-overlay">
                                                <Image
                                                    src="/images/books/templar.jpg"
                                                    alt="The Templar Legacy Cover"
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                        <div style={{ padding: '1.5rem' }}>
                                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', background: '#2e66d4', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>Translation — In Progress</span>
                                            <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#1e429b', margin: '0.8rem 0 0.3rem', lineHeight: '1.3' }}>The Templar Legacy</h4>
                                            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', color: '#4a5680', marginBottom: '0.6rem' }}>by <strong>Steve Berry</strong> — NYT Best Selling Author</p>
                                            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', color: '#1a2550', lineHeight: '1.7', marginBottom: 0 }}>A riveting historical thriller being translated into Sinhala, expanding Steve Berry's Cotton Malone universe to Sri Lankan audiences.</p>
                                        </div>
                                    </div>

                                    {/* The Hour of the Devil */}
                                    <div style={{ background: '#fff', border: '2px solid #d0daf0', borderTop: '5px solid #1e429b', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ position: 'relative', width: '250px', aspectRatio: '2/3', overflow: 'hidden', background: '#d0daf0', margin: '0 auto' }}>
                                            <Image
                                                src="/images/books/devil.png"
                                                alt="The Hour of the Devil Cover"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div style={{ padding: '1.5rem' }}>
                                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', background: '#1e429b', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>Original Work — In Development</span>
                                            <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#1e429b', margin: '0.8rem 0 0.3rem', lineHeight: '1.3' }}>The Hour of the Devil</h4>
                                            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', color: '#4a5680', marginBottom: '0.6rem' }}>The Darkest Chapter of Sherlock Holmes</p>
                                            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', color: '#1a2550', lineHeight: '1.7', marginBottom: 0 }}>An original creation exploring the darkest corner of Conan Doyle's legendary detective universe — a gothic thriller imagining Holmes confronting forces beyond reason.</p>
                                        </div>
                                    </div>

                                    {/* Lost Empire */}
                                    <div style={{ background: '#fff', border: '2px solid #d0daf0', borderTop: '5px solid #1e429b', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ position: 'relative', width: '250px', aspectRatio: '2/3', overflow: 'hidden', background: '#d0daf0', margin: '0 auto' }}>
                                            <Image
                                                src="/images/books/empire.jpg"
                                                alt="Lost Empire Cover"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div style={{ padding: '1.5rem' }}>
                                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', background: '#1e429b', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>Translation — Postponed</span>
                                            <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#1e429b', margin: '0.8rem 0 0.3rem', lineHeight: '1.3' }}>Lost Empire</h4>
                                            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', color: '#4a5680', marginBottom: '0.6rem' }}>An Action Adventure</p>
                                            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', color: '#1a2550', lineHeight: '1.7', marginBottom: 0 }}>A sweeping fantasy saga drawing mixed inspiration from R.L. Stine's atmospheric horror and Stephen King's mastery of dread — a dark world entirely of Vihanga's own creation.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── WHY IT MATTERS ── */}
                <section className="classic-section classic-alt fade-in">
                    <div className="classic-band">
                        <div className="classic-container">
                            <span className="classic-eyebrow">Our Philosophy</span>
                            <h2 className="collegelight">Why We Build</h2>
                            <div className="classic-divider"></div>
                            <p className="classic-lead">Technology Meets Imagination</p>
                        </div>
                    </div>
                    <div className="classic-body">
                        <div className="classic-container">
                            <div className="classic-split">
                                <div className="classic-txt-col">
                                    <h3 className="classic-subhead">The Vision Behind the Lab</h3>
                                    <p>Rocket Code Lab was born from a simple belief: the best software is not just built — it is imagined. Just as a great novel requires not only grammar but vision, great software requires not only code but purpose.</p>
                                    <p>Vihanga founded Rocket Code Lab to bring that dual philosophy to every client engagement — the discipline of an engineer and the empathy of a storyteller. When you work with us, you are not getting a vendor. You are getting a partner who genuinely cares about the story your product tells.</p>
                                    <a href="/#contact" className="classic-btn">Work With Us →</a>
                                </div>
                                <div className="classic-img-col">
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        {[
                                            { icon: '🚀', label: 'Founded', value: '2024' },
                                            { icon: '🎓', label: 'Qualification', value: 'First Class BSc' },
                                            { icon: '📚', label: 'Books Published', value: '1 (& counting)' },
                                            { icon: '🌍', label: 'Based In', value: 'Sri Lanka' },
                                        ].map((item) => (
                                            <div key={item.label} style={{ background: '#e8edf8', border: '2px solid #c0cceb', borderLeft: '4px solid #2e66d4', borderRadius: '3px', padding: '1.5rem', textAlign: 'center' }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                                                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#8fa3cc', marginBottom: '0.25rem' }}>{item.label}</div>
                                                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem', fontWeight: 800, letterSpacing: '0.5px', color: '#1e429b' }}>{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
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