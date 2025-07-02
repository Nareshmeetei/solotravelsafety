// No need to import fetch; use the native fetch API provided by Netlify

exports.handler = async (event) => {
  try {
    const { amount, currency, description } = JSON.parse(event.body);

    const response = await fetch('https://api.dodopayments.com/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer O3CN1afY8PsK2-6N.QaGohVLOrbLgd-KIPLW8vMqoVVIPyk6m8uGcrsM0D449bMBx',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount, // in cents
        currency,
        description,
        // Add any other required fields here
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 