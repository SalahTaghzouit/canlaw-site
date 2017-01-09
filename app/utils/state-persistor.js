export const saveState = (state) => {
  try {
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
