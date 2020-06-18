# Credit Agency sample app

The app demonstrates secure collection of PII data using skyflow-js. Developing secure widgets might be tough. We are supporting field validations for common pii fields. 

## Demo

You can view the demo of the app [here](https://d1octe4ap2s38q.cloudfront.net/#/)

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

```
$npm start
```

You will be prompted to enter your skyflow credentials, app id and vault id. You can find them in the Skyflow vault you just created. 

Once you submit your application in the app you should be able to view the data in Data browser section of skyflow. You can play around with metrics in dashboard, 


## SDK reference

### Quick start guide
```
const skyflow = new Skyflow(<your appId>); 
const elements = skyflow.elements();
const element = elements.create("element_type", {
  name: "vault_field_name",
});

element.mount("#html_element_selector");
const promise = elements.tokenize();

```

### Documentation 

You can find the detailed documentation in [Documentation section](Documetation.md)
