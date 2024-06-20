# Vue js components package

In this package I am going to build a lot of components for the developers to be able to use reusable code and make a consistent

## How to install

``` 
npm install @klaxe/vue-components-package
```

## Usage

import the Component into your project using this

``` JavaScript
import FieldInput from '@klaxe/vue-components-package'
```

This will give you a component of input field which can be used for these possible inputs

- ## username
- ## email
- ## password

| attributes  | value                          | description                                                                          | required |
| ----------- | ------------------------------ | ------------------------------------------------------------------------------------ | -------- |
| type        | username or  password or email | use one of this as attributes and get the specified input field to use               | true     |
| label       | label                          | You can give any text as a label for the input                                       | true     |
| placeholder | placeholder text               | placeholder text to be placed inside the input                                       | optional |
| required    | no value                       | will make the input required                                                         | optional |
| expand      | no value                       | default is 300px if this is used then it will take the container width which is 100% | optional |

## Example Usage 

``` vue
    <FieldInput
      type="username"
      label="User Name"
      placeholder="Please enter your user name"
      @input="handleInput"
      required
      expand
    />
    <FieldInput
      type="email"
      label="Email"
      placeholder="Please enter your email"
      @input="handleInput"
      required
      expand
    />
    <FieldInput
      type="password"
      label="Password"
      placeholder="Please enter your user Password"
      @input="handleInput"
      required
      expand
    />
```

and make a handle input method in the page so you can handle the variable you would like to be updated with the input values

## Validations done

- ### User Name
	- not empty
	- not less than 3 chars
	- no space between chars
	- no special character other than __
- ## Password
	- not less than 8 chars
	- has atleast 1 special char
	- has atleast 1 uppercase char
	- has atleast 1 lowercase char
	- has atleast 1 number char
- Email
	- used regex to validate mail


# Thank you

this package is my practise and I will produce more packages for the Developers
### About Me

I am Murali Krishna professionally known as **klaxe** and here are my socials you can check out
[LinkedIn](https://www.linkedin.com/in/murali-krishna-sake/)
[GitHub](https://github.com/Kanna116)
[npm store](https://www.npmjs.com/~klaxe)
[twitter](https://x.com/klax_e)
[Portfolio](https://klaxe-portfolio.vercel.app/)