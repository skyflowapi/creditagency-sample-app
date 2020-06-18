# Documentation

Elements 

```:
create(elementType: string, options: Options): Element;
getElement(elementType: string, elementName: string, value:? string): Element | null; // value is for radio and checkbox
tokenize(): Promise<Record<string, string | string[]>>; // array for checkbox
```

Element 

```
mount(htmlSelector: string): void;
unmount(): void;
update(options: Options): void;
getState(): State;
getOptions(): Options;
on(eventName: string, callback: Function): void; // listen to the input events like blur, focus, change, ready, escape, click, error
blur(): void; // to blur the element
focus(): void;
destroy(): void;
```

Element Types

Currently supported elements are text, textarea, checkbox, radio, password, number, dropdown, firstName, lastName, email, dob, mobileNumber, ssn, address, street, zipCode, city, state, income;

Of the above SSN is sensitive element