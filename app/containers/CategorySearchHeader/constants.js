/*
 * Category Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'canlaw/ComponentName' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const ACTION_CONSTANT = 'canlaw/ContainerName/ACTION_CONSTANT';
 */
export const CHOOSE_CATEGORY = 'canlaw/App/CHOOSE_CATEGORY';
