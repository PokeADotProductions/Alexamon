
## Alexa Skills Data Access - Examples

### Welcome!
These three examples illustrate various ways you can get and use external data in your Alexa Skill Lambda code.
You will learn how to design Alexa skill code to perform data searches on behalf of your user.
The lessons assume you have built a skill with the [Alexa Skills Kit](https://developer.amazon.com/ask) .

If you are new to Alexa, first complete the [tutorial to build the Flash Cards sample skill](https://developer.amazon.com/public/community/post/Tx2YNDI2WP6O21S/New-Alexa-Skills-Kit-Template-Step-by-Step-Guide-to-Build-a-Flash-Cards-Skill) .

### The skill - State Pop
Let's assume that you have an Alexa Skill that expects the user to say the name of a US State.  You can design the skill using the AMAZON.US_STATE built-in slot type.
The user says "Florida" and the Alexa responds with "the population of Florida is twenty million".  The skill will send an Intent and Slot to your code with the following structure:

* Intent: **StateRequestIntent**
* Slot: **usstate**   (Florida)

Go ahead and setup your skill using invocation name "state pop", and use the Interaction Model found in:
* [speechAssets/IntentSchema.json](./SpeechAssets/IntentSchema.json)
* [speechAssets/SampleUtterances.txt](./SpeechAssets/SampleUtterances.txt)

Pause when you get to the Skill Configuration page where you enter the Endpoint as an AWS Lambda ARN.


There are three possible Lambda functions provided under the /src folder, any of which can be used to build the skill endpoint service.
Review and choose one of the following functions.

#### CallService/index.js

This function uses HTTPS to make a web service call to an external service.  The service expects a JSON input with usstate:value and will return a JSON output including the state population.

#### InLineData/index.js
This function code includes a static array of all 50 states, by name.  Each array element contains an object with attributes including Population.  The code will open the array and loop through all values until it finds a match to the **usstate** slot value the user requested.

#### S3/index.js
This function code calls out to the AWS S3 object store.  This behaves similar to a flat file on a local file system.  There is a flat file in CSV format containing one row per state, with population values. The code will open the CSV data, and loop through all lines until it finds a match to the **usstate** slot value the user requested.

### Create the Lambda function
Let's assume we chose the CallService/index.js example to model a call to an external web service.
In a new browser tab, navigate to the [AWS Lambda console](https://console.aws.amazon.com/lambda/home?region=us-east-1#/) and create a new function.
Call the function "CallService" and paste in the code from index.js to the code window.

* Note: If you have selected the S3 example, you will need to select or create a special "role" in the Lambda Function Handler and Role section just below your code window.  Choose existing role "lambda_s3_exec_role". Otherwise, choose the default role of "lambda_basic_execution".


For our CallService example, take a look through the code to see the relevant Javascript sections that perform the call to the external web service.

```javascript
var https = require('https');


                var post_data = {"usstate": myState};  

                var post_options = { 
                    host:  'rmwum5l4zc.execute-api.us-east-1.amazonaws.com', 
                    port: '443', 
                    path: '/prod/stateresource', 
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Content-Length': Buffer.byteLength(JSON.stringify(post_data)) 
                    } };
                      var post_req = https.request(post_options, function(res) { 
                        res.setEncoding('utf8'); 
                        var returnData = ""; 
                        res.on('data', function (chunk) { 
                            returnData += chunk; 
                        }); 
                        res.on('end', function () {
                            // returnData: {"usstate":"Delaware","attributes":[{"population":900000},{"rank":45}]}

                            pop = JSON.parse(returnData).attributes[0].population;

                            say = "The population of " + myState + " is " + pop;


                            // This line concludes the lambda call.  Move this line to within any asynchronous callbacks that return and use data.
                            context.succeed({sessionAttributes: sessionAttributes, response: buildSpeechletResponse(say, shouldEndSession) });

                        }); 
                       });
                  post_req.write(JSON.stringify(post_data));
                 post_req.end();
```

A best-practice to quickly build and test special functions like this is to install Node.JS on your laptop, and write a local testing script so that you can quickly test and debug your logic.
See [tests/test_rest.js](./tests/test_rest.js).  You can run this test by opening a command prompt, navigate to the tests folder and typeing in **node ./test_rest.js**
Setting up your local Node.JS development environment will be fully covered in an upcoming blog post.

### Complete the Skill

Within your Lambda function, copy the Lambda ARN value and paste it into the Skill Endpoint box and click Save.  Your skill should now be ready for testing.

Implement the other two examples provided so that you have all three Lambda Functions available.  You can now return to the Skill Configuration page and adjust the Endpoint ARN so that the same skill can test calling one of the other Lambda functions.


#### Congratulations!
You now have learned some ways to bring in external data to your Alexa Skill code.

#### Documentation
Read more about the techniques used by these examples:

* CallService<br/>
[Node.JS built-in HTTPS module](https://nodejs.org/api/https.html)

* InLineData<br/>
[Node.JS loop through array](http://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript)<br/>
[Node.JS include external code/data files](https://nodejs.org/api/modules.html#modules_file_modules)

* S3<br/>
[AWS S3 getObject for Node.JS Javascript](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property)




Follow me at [@RobMcCauley](https://twitter.com/robmccauley)

