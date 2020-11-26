import * as types from '../constants/treeTbConstants';

const openAction = (keyID, child, branch) => ({
  branch,
  type: `${branch}/${types.TOGGLE_TREE}`,
  keyID,
  child
});

export default openAction;
