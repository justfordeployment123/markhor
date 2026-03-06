import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchJSON } from '../config/apiBase';
import { RichTextPreviewDark } from '../components/RichTextEditor';
import './pages.css';

export default function BlogPost() {
  const { id: slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const { ok, data } = await fetchJSON(`/blogs/${slug}`);
        if (ok) {
          setPost(data.post);
        } else {
          setError(data?.error || 'Failed to load blog post');
        }
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="dark-page" style={{ paddingTop: '160px', textAlign: 'center' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ animation: 'pulse 2s ease-in-out infinite' }}>
            <div style={{ height: '32px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', width: '75%', margin: '0 auto 16px' }} />
            <div style={{ height: '16px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', width: '50%', margin: '0 auto 32px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ height: '16px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }} />
              <div style={{ height: '16px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', width: '83%' }} />
              <div style={{ height: '16px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', width: '66%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="dark-page" style={{ paddingTop: '160px', textAlign: 'center' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.5)' }}>{error || 'Post not found.'}</p>
          <div style={{ marginTop: '24px' }}>
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s' }}>
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dark-page">
      {/* Header */}
      <div style={{ paddingTop: '128px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '32px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.3s', letterSpacing: '0.05em' }}>
              <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '24px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            {post.category && (
              <span className="pg-tag">{post.category}</span>
            )}
            {post.author && (
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                By <span style={{ color: 'rgba(255,255,255,0.65)' }}>{post.author}</span>
              </span>
            )}
            {post.readTime && (
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>{post.readTime}</span>
            )}
            {post.date && (
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Excerpt */}
      {post.excerpt && (
        <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '32px 24px' }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              <RichTextPreviewDark content={post.excerpt} />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 24px' }}>
          <div className="pg-card" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
            <article className="prose prose-lg prose-invert max-w-none">
              {post.content ? (
                <RichTextPreviewDark content={post.content} />
              ) : (
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', textAlign: 'center', padding: '32px 0' }}>
                  No content available for this post.
                </p>
              )}
            </article>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ paddingBottom: '64px' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px' }}>
            <Link
              to="/blog"
              style={{ display: 'inline-flex', alignItems: 'center', color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.3s', letterSpacing: '0.05em' }}
            >
              <svg style={{ width: '16px', height: '16px', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
