export async function postData(url = "https://api.truework.com/verification-requests", data = {}): Promise<Response> {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Access-Control-Allow-Origin': "*",
      'Authorization': 'Bearer tw_sk_test_ead99f7d33954e0907a03106e1d2e2005e46a0e7',
      'Content-Type': 'application/json',
      'Request-Sync': 'sync',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'strict-origin-when-cross-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("/verification-requests", {
  "type": "employment-income",
  "permissible_purpose": "risk-assessment",
  "target": {
    "first_name": "Joe",
    "last_name": "Smith",
    "social_security_number": "000-00-0000",
    "contact_email": "joesmith@example.org",
    "company": {
      "name": "Example Inc."
    }
  },
  "request_parameters": {
    "employer_filter": "target-employer",
    "verification_methods": {
      "instant": {
        "enabled": true
      },
      "credentials": {
        "enabled": true
      },
      "smart_outreach": {
        "enabled": true
      }
    }
  }
})
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });