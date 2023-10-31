Selectoc
Selectoc is a dropdown component inspired by the Ant Design's Select component. It allows you to swiftly and efficiently set up an option selector for your React applications.

Installation
To install Selectoc, use npm:

bash
Copy code
npm install selectoc
Usage
Integrate the Selectoc component into your React application:

jsx
Copy code
import React from 'react';
import Selectoc from 'selectoc';

function App() {
const options = [
{ value: 'option1', label: 'Option 1' },
{ value: 'option2', label: 'Option 2' },
// ... Other options
];

    const handleChange = (value) => {
        console.log("Selected value:", value);
    };

    return (
        <div>
            <Selectoc options={options} onChange={handleChange} defaultValue="option1" />
        </div>
    );

}

export default App;
Props
options: An array of objects representing the options. Each object should have value and label keys.
onChange: A callback function that's called when the selected value changes.
defaultValue: The default value of the selector.
Example
Given the options array:

javascript
Copy code
const options = [
{ value: 'option1', label: 'Option 1' },
{ value: 'option2', label: 'Option 2' },
];
And using the Selectoc component like:

jsx
Copy code
<Selectoc options={options} onChange={handleChange} defaultValue="option1" />
You'll see "Option 1" displayed by default, and the handleChange function will be called each time the user selects a new option.

License
MIT
