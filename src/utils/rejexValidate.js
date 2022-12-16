export const EmailValid = () => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/);
};

export const PhoneValid = () => {
    return (/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/);
};