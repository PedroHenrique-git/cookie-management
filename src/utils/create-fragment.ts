const createFragment = (template: string) => {
  return document.createRange().createContextualFragment(template);
};

export default createFragment;
