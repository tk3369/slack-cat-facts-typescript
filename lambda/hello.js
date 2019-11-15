var rp = require('request-promise');

exports.handler = async function(event) {
  console.log("Request: ", JSON.stringify(event, undefined, 2));

  return await rp({
    uri: 'https://catfact.ninja/fact',
    method: 'GET',
    json: true
  }).then(function (parsedBody) {
    console.log('request to catfact.ninja was successful: ', 
      JSON.stringify(parsedBody, undefined, 2));
    var cat_text = 'Did you know... ' + parsedBody.fact;
    var result = { 
      'response_type': 'in_channel',
      'text': cat_text
    };
    console.log('result: ', result);
    var return_val = {
      statusCode: 200,
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(result)
    };
    console.log('return_val: ', return_val);
    return return_val;
  })
  .catch(function (err) {
    console.log('request to catfact.ninja failed with error: ' + err);
    return {
      statusCode: 500,
      body: 'Sorry, unable to hit catfact api!'
    };
  });

}