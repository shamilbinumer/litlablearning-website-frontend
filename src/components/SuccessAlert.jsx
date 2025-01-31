import React from 'react';

const SuccessAlert = ({ message, onClose }) => {
  const styles = {
    container: {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '300px',
      animation: 'slideDown 0.5s ease-out'
    },
    icon: {
      marginRight: '10px',
      color: 'white',
      fontSize: '24px'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '20px',
      cursor: 'pointer',
      padding: '0 10px'
    },
    message: {
      flex: 1
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>✓</div>
      <div style={styles.message}>{message}</div>
      <button 
        style={styles.closeButton} 
        onClick={onClose}
      >
        ✕
      </button>
      <style>{`
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateX(-50%) translateY(-100%); 
          }
          to { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessAlert;