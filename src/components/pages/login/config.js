export const inputs = [
    {
        label: 'email',
        type: 'email',
        name: 'email',
        required: true,
        isShowInvalidMsg: true
    },
    {
        label: 'first name',
        type: 'text',
        name: 'firstName',
        pattern: "[a-zA-Z\u0590-\u05FF]{2,15}",
        title: 'Insert 3-15 characters',
        required: true,
        isShowInvalidMsg: true
    },
    {
        label: 'last name',
        type: 'text',
        name: 'lastName',
        pattern: "[a-zA-Z\u0590-\u05FF]{2,15}",
        title: 'Insert 3-15 characters',
        required: true,
        isShowInvalidMsg: true
    },
    {
        label: 'password',
        type: 'password',
        name: 'password',
        pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$",
        title: "Minimum 8 characters, at least one uppercase and lowercase letter, and one number",
        required: true,
        isShowInvalidMsg: true
    }
];
