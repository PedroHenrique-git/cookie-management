const createComponent = (template: string) => {
    return document.createRange().createContextualFragment(template);
} 

export default createComponent;