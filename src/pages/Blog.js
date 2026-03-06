import React, { useEffect, useMemo, useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import './pages.css';
import './Blog.css';
import { API_BASE, fetchJSON } from '../config/apiBase';
import { RichTextPreviewLight } from '../components/RichTextEditor';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true); setError(null);
      const { ok, data } = await fetchJSON('/blogs?published=true');
      if (!active) return;
      if (ok) {
        const items = Array.isArray(data.items) ? data.items : (data.blogs || data.posts || []);
        setPosts(items);
        setLoading(false);
      } else {
        setError(data?.error || 'Failed to load posts');
        setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const featuredPost = useMemo(() => {
    if (!posts.length) return null;
    const explicitlyFeatured = posts.find(post => post.featured === true);
    if (explicitlyFeatured) return explicitlyFeatured;
    return posts[0];
  }, [posts]);

  const regularPosts = posts.filter(post => post !== featuredPost);

  const navigateToPost = (slug) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="dark-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-stars" />
        <div className="page-hero-streak page-hero-streak-1" />
        <div className="page-hero-streak page-hero-streak-2" />
        <div className="page-hero-streak page-hero-streak-3" />
        <div className="page-hero-scan" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <span className="page-label">Blog</span>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={100}>
            <p className="page-pre-title">Insights</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={200}>
            <h1 className="page-hero-title page-hero-title-outline" data-text="thoughts &">thoughts &</h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={320}>
            <h1 className="page-hero-title page-hero-title-solid">perspectives.</h1>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={440}>
            <p className="page-hero-desc">
              Practical guides, tips, and case studies on creating
              exceptional digital experiences.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !loading && (
        <section className="page-section-alt">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            <RevealOnScroll animation="fadeUp">
              <div className="pg-card p-8 sm:p-10 blog-featured-card">
                <span className="pg-tag" style={{ marginBottom: '20px' }}>Featured Insight</span>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                  {featuredPost.title}
                </h2>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '24px' }}>
                  <RichTextPreviewLight content={featuredPost.excerpt} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '28px', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>
                  {featuredPost.author && <span>By {featuredPost.author}</span>}
                  {featuredPost.date && <span>{new Date(featuredPost.date).toLocaleDateString()}</span>}
                  {featuredPost.readTime && <span>{featuredPost.readTime}</span>}
                </div>
                <button
                  type="button"
                  onClick={() => navigateToPost(featuredPost.slug)}
                  className="pg-btn-primary"
                >
                  Read Full Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <RevealOnScroll animation="fadeUp">
            <div className="mb-16">
              <span className="page-section-label">All Posts</span>
              <h2 className="page-section-heading">Latest articles.</h2>
            </div>
          </RevealOnScroll>

          {loading && <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>Loading posts...</p>}
          {error && <p style={{ textAlign: 'center', color: 'rgba(255,100,100,0.7)', fontSize: '0.9rem' }}>{String(error)}</p>}

          {!loading && !error && regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <RevealOnScroll key={post._id || post.id || index} animation="fadeUp" delay={index * 80}>
                  <div
                    className="pg-card p-8 flex flex-col h-full"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigateToPost(post.slug)}
                  >
                    <span className="pg-tag" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                      {(post.category || 'general').replace('-', ' ').toUpperCase()}
                    </span>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, flexGrow: 1, marginBottom: '20px' }}>
                      <RichTextPreviewLight content={post.excerpt} />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontFamily: 'Space Grotesk, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      {post.author && <span>By {post.author}</span>}
                      {(post.createdAt || post.date) && <span>{new Date(post.createdAt || post.date).toLocaleDateString()}</span>}
                      {post.readTime && <span>{post.readTime}</span>}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ) : (!loading && !error && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <svg width="32" height="32" fill="none" stroke="rgba(255,255,255,0.25)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>No posts found</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)' }}>Check back later for new content.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <RevealOnScroll animation="fadeUp">
            <h2 className="page-cta-heading">Ready to start<br />your project?</h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={150}>
            <p className="page-cta-desc">Let's discuss how we can bring your vision to life with cutting-edge technology.</p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={280}>
            <div className="page-cta-buttons">
              <MagneticButton to="/contact" className="pg-btn-primary" strength={0.3}>
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton to="/services" className="pg-btn-ghost" strength={0.2}>View Services</MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Blog;
