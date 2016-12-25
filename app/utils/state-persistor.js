export const saveState = (state) => {
  try {
    console.log('saving state:');
    console.log(state);
    localStorage.setItem('canlawSiteState', JSON.stringify(state));
  } catch (err) {
    // ignore (log later)
    console.error(err, 'Could not save state');
  }
};

export const getState = () => {
  try {
    return JSON.parse(localStorage.getItem('canlawSiteState')) || undefined;
  } catch (err) {
    return undefined;
  }
};
