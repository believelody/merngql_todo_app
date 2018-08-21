import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

const TodoCheckbox = ({checked}) =>
  <Checkbox
    checked={checked}
    disableRipple
  />

export default TodoCheckbox;
