// Filename: backend/aModule.jsw (web modules need to have a .jsw extension)

import {fetch} from 'wix-fetch';
import AWS from 'aws-sdk';
//import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';



	export function call(email, password) {

// For Signup
		// AWS.config.update({region:'us-east-2'});
		// var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();				
		// 	var params = {
		// 		ClientId: '',			
		// 		Password: password,
		// 		Username: email
		// 		};

		// cognitoidentityserviceprovider.signUp(params, function(err, data) {
		// 	 if (err) console.error(err);
		// 	 console.log(data);
		// });


//For Login
		 AWS.config.region = 'us-east-2'; // Region
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'us-east-2:xxxx-xxx-xxx-xxx-xxxxxxxxxx',
		});


		 var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
		var params = {
		AuthFlow: 'USER_PASSWORD_AUTH', /* required */
		ClientId: '', /* required */
		AnalyticsMetadata: {
		
		},
		AuthParameters: {
		'USERNAME' : email,
		'PASSWORD' : password
		},
		ClientMetadata: {
		
			/* '<StringType>': ... */
		},
		UserContextData: {
			
		}
		};
		cognitoidentityserviceprovider.initiateAuth(params, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
		});

   		
	}






