import { ImageResponse } from 'next/og';

export const alt = 'Litenova Solutions logo and wordmark';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#0a0a0a',
        color: '#f3f4f6',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,206,99,0.15) 1px, transparent 0)',
          backgroundSize: '30px 30px',
          display: 'flex',
          inset: 0,
          position: 'absolute',
        }}
      />
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 920,
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            background: '#ffce63',
            borderRadius: 18,
            color: '#0a0a0a',
            display: 'flex',
            fontSize: 42,
            fontWeight: 800,
            height: 92,
            justifyContent: 'center',
            width: 92,
          }}
        >
          LN
        </div>
        <div style={{ color: '#ffce63', display: 'flex', fontSize: 26, fontWeight: 700, marginTop: 34 }}>
          LITENOVA SOLUTIONS
        </div>
        <div style={{ display: 'flex', fontSize: 58, fontWeight: 750, letterSpacing: -2, marginTop: 18 }}>
          Distributed systems, built with evidence
        </div>
        <div style={{ color: '#b8bcc5', display: 'flex', fontSize: 25, marginTop: 22 }}>
          .NET engineering | Open source | Engineering Standards v1
        </div>
      </div>
    </div>,
    size,
  );
}
