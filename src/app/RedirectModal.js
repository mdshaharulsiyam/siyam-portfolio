'use client';

import { useEffect, useState } from 'react';

export default function RedirectModal() {
  const [countdown, setCountdown] = useState(10);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://shaharulsiyam.vercel.app';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://shaharulsiyam.vercel.app';
  };

  return (
    <>
      <style>{`
        @keyframes custom-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes custom-fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-custom {
          animation: custom-spin 15s linear infinite;
        }
        .animate-fade-in-custom {
          animation: custom-fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000000',
          zIndex: 999999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontFamily: '"Montserrat", sans-serif',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="animate-fade-in-custom"
          style={{
            maxWidth: '450px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* Animated Accent Graphic */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#111111',
              border: '1px solid #222222',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div
              className="animate-spin-custom"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px dashed #444444',
              }}
            />
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                background: 'linear-gradient(to right, #60a5fa, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {countdown}
            </span>
          </div>

          {/* Messaging */}
          <div style={{ marginBottom: '30px' }}>
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                marginBottom: '12px',
                background: 'linear-gradient(to right, #ffffff, #a3a3a3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Redirecting You
            </h1>
            <p
              style={{
                color: '#a3a3a3',
                fontSize: '1rem',
                lineHeight: '1.6',
                maxWidth: '360px',
                margin: '0 auto',
              }}
            >
              We are moving to our new home. You will be redirected automatically in{' '}
              <span style={{ color: '#60a5fa', fontWeight: '600' }}>
                {countdown} seconds
              </span>
              .
            </p>
          </div>

          {/* Direct Action Button */}
          <div>
            <button
              onClick={handleRedirect}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                padding: '14px 32px',
                backgroundColor: isHovered ? '#e5e5e5' : '#ffffff',
                color: '#000000',
                fontWeight: '600',
                fontSize: '0.95rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.1)',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.2s ease-in-out',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Proceed Immediately</span>
              <svg
                style={{ width: '16px', height: '16px' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
