"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from './components/Carousel';
import './styles/globals.css';

export default function Home() {

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
        <title>Rocket.lk | Code Lab</title>
        <meta name="description" content="Code Lab by Rocket — cutting-edge software solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ── NAVBAR ── UNTOUCHED */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <div className="logo-image-wrapper">
              <Image src="/images/rocket.png" alt="Rocket Logo" width={78} height={78} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className="nav-links">
            <a href="#about">Home</a>
            <a href="/about">About</a>
            <a href="#news">News</a>
            <a href="#careers">Careers</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="contact-btn">Login</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── UNTOUCHED */}
      <div className="hero-section">
        <div className="hero-grid-overlay" />
        <div className="hero-content">
          <div className="code-lab-by">
            CODE LAB BY
          </div>
          <div className="hero-name-image">
            <Image src="/images/Rocket.lk name.bbt.png" alt="Rocket.lk" width={700} height={200} priority style={{ width: '100%', height: 'auto', maxWidth: '700px' }} />
          </div>
          <p className="hero-tagline">Crafting Tomorrow's Digital Solutions</p>
          <div className="cta-buttons">
            <button className="primary-btn">Our Services</button>
            <button className="secondary-btn">Get in Touch</button>
          </div>
        </div>
      </div>

      <main className="main-content">

        {/* ── ABOUT ── UNTOUCHED */}
        <section id="about" className="content-section fade-in">
          <div className="section-container">
            <h2 className="college">ABOUT ROCKET CODE LAB</h2>
            <div className="section-content">
              <p>Rocket Code Lab is a software development company established in year 2024. At Rocket Code, we're passionate about transforming ideas into powerful digital solutions. With our expert team of developers, designers, and strategists, we create software that not only meets today's needs but anticipates tomorrow's challenges. Founded on principles of innovation, quality, and client satisfaction, we've established ourselves as a trusted partner for businesses across industries.</p>
              <p>Our approach combines technical excellence with creative problem-solving, delivering solutions that are both functionally robust and aesthetically appealing.</p>
              <a href="#about" className="classic-btn">Learn more →</a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2015–2020 CLASSIC STYLE SECTIONS
            ══════════════════════════════════════ */}

        {/* UI/UX */}
        <section id="uiux" className="classic-section slide-left">
          <div className="classic-band">
            <div className="classic-container">
              <span className="classic-eyebrow">What We Do</span>
              <h2 className="collegelight">Interactive UI/UX Designs</h2>
              <div className="classic-divider"></div>
              <p className="classic-lead">Beautiful. Intuitive. Purposeful.</p>
            </div>
          </div>
          <div className="classic-body">
            <div className="classic-container">
              <div className="classic-split">
                <div className="classic-img-col">
                  <div className="classic-img-frame">
                    <Image src="/gifs/uiux.gif" alt="UI/UX" width={540} height={340} />
                    <span className="classic-img-badge">Design First</span>
                  </div>
                </div>
                <div className="classic-txt-col">
                  <h3 className="classic-subhead">User-Centered from Day One</h3>
                  <p>We believe that great software starts with exceptional user experience. Our UI/UX team specializes in creating intuitive, engaging interfaces that delight users while achieving business objectives. We combine aesthetic appeal with functional design, ensuring every interaction feels natural and purposeful.</p>
                  <p>From wireframing to prototyping to final implementation, we apply user-centered design principles to create experiences that are not just visually stunning, but genuinely enhance how people interact with technology.</p>
                  <ul className="classic-check-list">
                    <li>✔ Wireframing &amp; Prototyping</li>
                    <li>✔ Responsive Web Design</li>
                    <li>✔ Mobile-First Approach</li>
                    <li>✔ Usability Testing</li>
                  </ul>
                  <a href="#contact" className="classic-btn">Start a Project →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <div className="stats-banner">
          <div className="classic-container">
            <div className="stats-grid">
              <div className="stat-item"><span className="stat-number">10+</span><span className="stat-label">Projects Delivered</span></div>
              <div className="stat-item"><span className="stat-number">10+</span><span className="stat-label">Happy Clients</span></div>
              <div className="stat-item"><span className="stat-number">2+</span><span className="stat-label">Years Experience</span></div>
              <div className="stat-item"><span className="stat-number">99%</span><span className="stat-label">Client Retention</span></div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <section id="backend" className="classic-section classic-alt slide-right">
          <div className="classic-band">
            <div className="classic-container">
              <span className="classic-eyebrow">Engineering</span>
              <h2 className="collegelight">Our Backend Mechanism</h2>
              <div className="classic-divider"></div>
              <p className="classic-lead">Scalable. Secure. Solid.</p>
            </div>
          </div>
          <div className="classic-body">
            <div className="classic-container">
              <div className="classic-split classic-split-rev">
                <div className="classic-txt-col">
                  <h3 className="classic-subhead">Built for Performance &amp; Scale</h3>
                  <p>Powering the visible aspects of our applications is a robust backend architecture designed for performance, security, and scalability. We build systems that can handle growing demands, process complex operations efficiently, and maintain data integrity across all interactions.</p>
                  <p>Our backend developers specialize in microservices architecture, RESTful APIs, and cloud-native solutions that provide the foundation for reliable and flexible applications.</p>
                  <div className="tech-tags">
                    <span>Node.js</span><span>Python</span><span>REST APIs</span>
                    <span>Microservices</span><span>Docker</span><span>AWS</span>
                  </div>
                  <a href="#contact" className="classic-btn">Talk to Us →</a>
                </div>
                <div className="classic-img-col">
                  <div className="classic-img-frame">
                    <Image src="/gifs/backend.gif" alt="Backend" width={540} height={340} />
                    <span className="classic-img-badge">High Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News */}
        <section id="news" className="classic-section slide-up">
          <div className="classic-band">
            <div className="classic-container">
              <span className="classic-eyebrow">Stay Informed</span>
              <h2 className="collegelight">Latest News &amp; Updates</h2>
              <div className="classic-divider"></div>
              <p className="classic-lead">What's happening at Rocket Code Lab</p>
            </div>
          </div>
          <div className="classic-body">
            <div className="classic-container">
              <div className="news-grid">
                <div className="news-card news-card-featured">
                  <div className="news-meta"><span className="news-tag">Company News</span><span className="news-date">May 2026</span></div>
                  <h3>Rocket Code Lab Launches Next-Gen Cloud Infrastructure Division</h3>
                  <p>We're thrilled to announce the launch of our new cloud infrastructure services division, offering enterprise-grade hosting, DevOps pipelines, and managed Kubernetes clusters to our growing client base across South Asia.</p>
                  <a href="#" className="news-more">Read More →</a>
                </div>
                <div className="news-card">
                  <div className="news-meta"><span className="news-tag">Tech</span><span className="news-date">April 2026</span></div>
                  <h3>Partnering with TechHub Colombo for Developer Training</h3>
                  <p>Rocketcode.lk joins forces with TechHub Colombo to offer hands-on development bootcamps for aspiring Sri Lankan engineers.</p>
                  <a href="#" className="news-more">Read More →</a>
                </div>
                <div className="news-card">
                  <div className="news-meta"><span className="news-tag">Award</span><span className="news-date">March 2026</span></div>
                  <h3>Best Software Company 2026 — Western Province Chamber</h3>
                  <p>Rocketcode.lk has been recognized as the Best Software Company in the Western Province by the Chamber of Commerce annual awards.</p>
                  <a href="#" className="news-more">Read More →</a>
                </div>
                <div className="news-card">
                  <div className="news-meta"><span className="news-tag">Product</span><span className="news-date">February 2026</span></div>
                  <h3>Introducing RocketDesk — Our Project Management Suite</h3>
                  <p>After 18 months of development, we're releasing RocketDesk to select clients — a full project management and CRM platform built in-house.</p>
                  <a href="#" className="news-more">Read More →</a>
                </div>
              </div>
              <div className="news-footer-row"><a href="#" className="classic-btn">View All News →</a></div>
            </div>
          </div>
        </section>

        {/* Database */}
        <section id="database" className="classic-section classic-alt fade-in">
          <div className="classic-band">
            <div className="classic-container">
              <span className="classic-eyebrow">Data Layer</span>
              <h2 className="collegelight">Our Database Developments</h2>
              <div className="classic-divider"></div>
              <p className="classic-lead">Your data, organized and protected.</p>
            </div>
          </div>
          <div className="classic-body">
            <div className="classic-container">
              <div className="classic-intro-block">
                <p>Data is the lifeblood of modern applications. Our database solutions are designed to organize, secure, and optimize your valuable information assets. Whether you need relational databases for structured data, NoSQL solutions for flexibility, or a hybrid approach, we implement database architectures that align with your specific requirements.</p>
                <p>We prioritize data integrity, performance optimization, and security in every database we design, ensuring your information is both accessible when needed and protected from unauthorized access.</p>
              </div>
              <div className="db-cards">
                <div className="db-card">
                  <div className="db-card-icon"><Image src="/tech/postgresql.png" alt="PostgreSQL" width={70} height={70} /></div>
                  <h4>PostgreSQL</h4>
                  <p>Enterprise-grade relational database with advanced SQL support and ACID compliance.</p>
                </div>
                <div className="db-card">
                  <div className="db-card-icon"><Image src="/tech/mongodb-icon.svg" alt="MongoDB" width={70} height={70} /></div>
                  <h4>MongoDB</h4>
                  <p>Flexible document database for modern, dynamic, and rapidly evolving applications.</p>
                </div>
                <div className="db-card">
                  <div className="db-card-icon"><Image src="/tech/mysql-logo.svg" alt="MySQL" width={70} height={70} /></div>
                  <h4>MySQL</h4>
                  <p>The world's most popular open-source relational database, proven at scale.</p>
                </div>
                <div className="db-card">
                  <div className="db-card-icon"><Image src="/tech/firebase.png" alt="Firebase" width={70} height={70} /></div>
                  <h4>Firebase RTDB</h4>
                  <p>Real-time syncing database built for live, reactive, collaborative applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="classic-section zoom-in">
          <div className="classic-band">
            <div className="classic-container">
              <span className="classic-eyebrow">Join the Team</span>
              <h2 className="collegelight">Aspiring Software Engineer?</h2>
              <div className="classic-divider"></div>
              <p className="classic-lead">Build the future with us.</p>
            </div>
          </div>
          <div className="classic-body">
            <div className="classic-container">
              <div className="classic-split">
                <div className="classic-txt-col">
                  <h3 className="classic-subhead">Grow Fast. Build Real.</h3>
                  <p>Join our team of passionate technologists working on cutting-edge solutions. At RocketCode.lk, we foster an environment of continuous learning, innovation, and growth. We believe in empowering our team members to explore new technologies, contribute ideas, and develop their skills.</p>
                  <p>We're always looking for talented individuals who share our commitment to quality and innovation. Check out our open positions or send us your resume to be considered for future opportunities.</p>
                  <div className="perks-grid">
                    <div className="perk">🚀 <span>Hands on experience</span></div>
                    <div className="perk">💻 <span>Remote Friendly</span></div>
                    <div className="perk">📚 <span>Learn and do</span></div>
                    <div className="perk">🏆 <span>Top Achievements</span></div>
                  </div>
                  <button className="classic-btn classic-btn-solid">Join us Today!</button>
                </div>
                <div className="classic-img-col">
                  <div className="classic-img-frame">
                    <Image src="/images/dev.png" alt="Careers" width={460} height={460} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Carousel */}
        <section id="tech" className="classic-section classic-alt float-in">
          <div className="classic-band">
            <div className="classic-container">
              <span className="classic-eyebrow">Our Stack</span>
              <h2 className="collegelight">Supported Technologies</h2>
              <div className="classic-divider"></div>
              <p className="classic-lead">We leverage a diverse stack of cutting-edge tools.</p>
            </div>
          </div>
          <div className="classic-body">
            <div className="classic-container">
              <p className="classic-intro-block">Our technical expertise spans across the following and many more — always choosing the right tool for the right job to deliver the best outcome for our clients.</p>
              <div className="carousel-container"><Carousel /></div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="classic-section fade-in">
          <div className="classic-band">
            <div className="classic-container">
              <span className="classic-eyebrow">Get in Touch</span>
              <h2 className="collegelight">Let Us Know Your Thoughts</h2>
              <div className="classic-divider"></div>
              <p className="classic-lead">We'd love to hear from you.</p>
            </div>
          </div>
          <div className="classic-body">
            <div className="classic-container">
              <div className="contact-cols">
                <div className="contact-form-col">
                  <h3 className="classic-subhead">Send Us a Message</h3>
                  <form>
                    <div className="c-form-group">
                      <label>Your Name</label>
                      <input type="text" placeholder="John Silva" required />
                    </div>
                    <div className="c-form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="c-form-group">
                      <label>Service Required</label>
                      <select>
                        <option value="" disabled defaultValue="">Select Service</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="backend">Desktop App Development</option>
                        <option value="database">Database Solutions</option>
                        <option value="full-stack">Full Stack Development</option>
                        <option value="consultation">Technical Consultation</option>
                      </select>
                    </div>
                    <div className="c-form-group">
                      <label>Your Message</label>
                      <textarea placeholder="Tell us about your project..." rows="4" required></textarea>
                    </div>
                    <button type="submit" className="classic-btn classic-btn-solid">Send Message →</button>
                  </form>
                </div>
                <div className="contact-info-col">
                  <h3 className="classic-subhead">Contact Information</h3>
                  <div className="c-info-item">
                    <span className="c-info-icon">📍</span>
                    <div><strong>Address</strong><p>123 Some Park, Some Road, Colombo, CO 00100</p></div>
                  </div>
                  <div className="c-info-item">
                    <span className="c-info-icon">📧</span>
                    <div><strong>Email</strong><p>contact@rocketcode.lk</p></div>
                  </div>
                  <div className="c-info-item">
                    <span className="c-info-icon">📞</span>
                    <div><strong>Phone</strong><p>+94 (07) 123-4567</p></div>
                  </div>
                  <div className="c-map-box"><span>📍 Colombo, Sri Lanka</span></div>
                  <div className="c-social-row">
                    <a href="#" className="c-social-btn">GitHub</a>
                    <a href="#" className="c-social-btn">LinkedIn</a>
                    <a href="#" className="c-social-btn">X / Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 
      Designed and Developed by <-Vihanga Jayakody->
      last updated on 5.8.2026
      Contact on - Github.com/V1H4N94/
      */}

      {/* ── FOOTER ── UNTOUCHED */}
      <footer className="footer">
        <div className="classic-section fade-in">
          <div className="footer-container">
            <div className="footer-logo">
              <Image src="/images/rocketname.png" alt="Rocket.lk Logo" width={300} height={85} />
            </div>
            <div className="footer-nav">
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#careers">Careers</a>
                <a href="#blog">Blog</a>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#uiux">UI/UX Design</a>
                <a href="#backend">Backend Development</a>
                <a href="#database">Database Solutions</a>
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