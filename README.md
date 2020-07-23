# Credit Agency sample app

The app demonstrates secure collection of PII data using skyflow-js. Developing secure widgets might be tough. We are supporting field validations for common pii fields. 

## Demo

You can view the demo of the app [here](https://creditcard-demo.skyflow.app/#/#/)

## Overview

Create secure forms and elements to collect pii data. 

<img src="screenshots/phone-number.png" alt="Secure phone number field" style = "box-shadow: 0 0 0 2px rgba(0,0,0,0.1)" width="610">

The app is an example to integrate skyflow client sdk to your frontend web application. 

|     | Features
:---: | :---:
**Create forms with secure fields**| Skyflow sdk lets you create forms with secure fields of primitive types(inputs, selects etc), composite elements(First name, email etc), privacy preserving elements(ssn)
**Transmit and receive your data over the iframe**| The form data is received and routed over the hosted iframe.
**Predefined Workflows** | The app demonstrates experian workflows to get credit scores.
**Reveal the sensitive data only when required**|  Complete control of revealing the data in privacy fields. 


## To run it locally

You will require a skyflow account. Create a vault using credit agency schema template. 

```
$ git clone https://github.com/skyflowtech/creditagency-sample-app.git
```

```
$ cd creditagency-sample-app
```

```
$ npm i
```

Add your org id, vault id and app id which you will receive once you sign up and create your vault in skyflow studio.

```
$ npm start
```
