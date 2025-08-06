export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '8px 8px 0 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        minWidth: '600px',
        minHeight: '400px'
      }}>
        {/* Classic Mac OS Title Bar */}
        <div style={{
          background: 'linear-gradient(to bottom, #e0e0e0, #c0c0c0)',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 8px',
          borderBottom: '1px solid #808080',
          position: 'relative'
        }}>
          {/* Traffic Light Buttons */}
          <div style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#ff5f57',
              border: '1px solid #cc0000'
            }}></div>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#ffbd2e',
              border: '1px solid #cc6600'
            }}></div>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#28ca42',
              border: '1px solid #006600'
            }}></div>
          </div>
          
          {/* Window Title */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#000',
            fontFamily: 'Geneva, Arial, sans-serif'
          }}>
            QuantumScape
          </div>
        </div>
        
        {/* Content Area */}
        <div style={{
          padding: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '360px'
        }}>
          <img
            src="/quantumscape.svg"
            alt="QuantumScape Logo"
            className="logo-spin"
            style={{
              width: '300px',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </div>
  );
}
