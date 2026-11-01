import { useState, useRef } from 'react';
import DriftWall from './DriftWall/DriftWall';
import TechText from './TechText/TechText';

// Daftar gambar milik Anda
const myWallImages = [
  { image: '/wall1.jpg', title: 'Foto 1' },
  { image: '/wall2.jpg', title: 'Foto 2' },
  { image: '/wall3.jpg', title: 'Foto 3' },
  { image: '/wall4.jpg', title: 'Foto 4' },
  { image: '/wall5.jpg', title: 'Foto 5' },
  { image: '/wall6.jpg', title: 'Foto 6' },
  { image: '/wall7.jpg', title: 'Foto 7' },
  { image: '/wall8.jpg', title: 'Foto 8' },
  { image: '/wall9.jpg', title: 'Foto 9' },
  { image: '/wall10.jpg', title: 'Foto 10' },
  { image: '/wall11.jpg', title: 'Foto 11' },
  { image: '/wall12.jpg', title: 'Foto 12' },
  { image: '/wall13.jpg', title: 'Foto 13' },
  { image: '/wall14.jpg', title: 'Foto 14' },
  { image: '/wall15.jpg', title: 'Foto 15' },
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#060010' }}>
      
      {/* File Audio BGM (Simpan lagu di folder public/bgm.mp3) */}
      <audio ref={audioRef} src="/bgm.mp3" loop />

      {/* Background Layer: DriftWall */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DriftWall
          items={myWallImages}
          columns={8}
          tileWidth={240}
          tileHeight={150}
          gap={20}
          fade={0}
          dim={0.55} /* Kecerahan ubin dibuat seragam di seluruh layar */
          tilt={10}
          turn={-6}
          perspective={1000}
          speed={30}
        />
      </div>

      {/* Foreground Layer: TechText & Tombol Pesan */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <div style={{ width: '90%', height: '360px', pointerEvents: 'auto' }}>
          <TechText
            text="Happy Birthday Piw 💖 🎂"
            fontWeight={600}
            fontSize={100}
            reveal="letter"
            dashLength={4}
            dashGap={4}
            specks={15}
            intro="assemble"
            introDuration={2}
            clickKick
            guides={false}
            letterSpacing={-0.03}
            accentColor="#ffffff"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="#ffffff"
            align="center"
            draggable
            sweep
          />
        </div>

        {/* Tombol Buka Pesan */}
        <button
          onClick={() => setShowLetter(true)}
          style={{
            pointerEvents: 'auto',
            marginTop: '10px',
            padding: '12px 28px',
            borderRadius: '30px',
            border: '1px solid rgba(255,255,255,0.25)',
            backgroundColor: 'rgba(15, 10, 25, 0.75)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(15, 10, 25, 0.75)';
          }}
        >
          With Love, Always 💌
        </button>
      </div>

      {/* Tombol Floating Pemutar Musik (Pojok Kanan Bawah) */}
      <button
        onClick={toggleAudio}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          zIndex: 20,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'rgba(15, 10, 25, 0.8)',
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>

      {/* Modal / Popup Pesan Ucapan */}
      {showLetter && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
          onClick={() => setShowLetter(false)}
        >
          <div
            style={{
              backgroundColor: '#141021',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              padding: '32px',
              maxWidth: '480px',
              width: '100%',
              color: '#f0f0f5',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ margin: '0 0 16px', fontSize: '22px', fontWeight: 700, color: '#ffffff' }}>
              Happy Birthday, Piw! 🎉
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', margin: '0 0 24px' }}>
              Selamat hari lahir piwwww, bismillah slalu diberikan kesehatan, rezeki yang berkah, melimpah, umur yang panjang, dan selalu dalam lindungan Allah SWT.
              Semoga semua cita-cita dan impiannya tercapai, dan setiap harinya dipenuhi dengan kebahagiaan dan cinta. 
              Semangat terus yaa piwww, dan jangan lupa selalu bersyukur 💖, Love Piw.....
            </p>
            <button
              onClick={() => setShowLetter(false)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: '#ffffff',
                color: '#060010',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
}