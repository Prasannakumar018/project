import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState('');
  const location = useLocation();
  const total = location.state?.total || 0;

  const processPayment = () => {
    // Simulated payment processing
    setPaymentStatus('Processing payment...');

    // Simulate API call or payment gateway integration
    setTimeout(() => {
      setPaymentStatus('Payment successful!');
      // Reset cart or perform other necessary actions
    }, 2000);
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Total: ${total}</p>
      <Button color="success" size="small" variant="contained" onClick={processPayment}> Process payment</Button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}

export default PaymentPage;

