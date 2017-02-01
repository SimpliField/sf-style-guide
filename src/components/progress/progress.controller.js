export default class ProgressController {
  $onInit() {
    this.val = this.val ? this.val : 0; // eslint-disable-line no-magic-numbers
    this.progressClass = getClass(this.val / this.max);
  }
}

export function getClass(percent) {
  if(1 <= percent) { // eslint-disable-line no-magic-numbers
    return 'full';
  } else if(0.50 <= percent && 1 > percent) { // eslint-disable-line no-magic-numbers
    return 'half';
  }
  return 'beggining';
}
