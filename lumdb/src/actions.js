export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
//Action type constants:
//do the above (and import) so you can debug better 
//if you spell 'TOGGLE_MESSAGE' as a string & spell wrong, you wont get error, 
//but won't work.

export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE'
  };
}