# sf-style-guide v3.0.0

<!-- TODO: make it work again
  [View the style guide online](http://simplifield.github.io/sf-style-guide/)
  -->

Brand new style guide for Simplifield

## Installation

`yarn` or `npm install`

## Scripts

- `npm test` : build the unminified css file in `/dist`
- There is a prepublish hook that autobuild the normal and the minified version when you publish to npm.

## Structure

Source files are written in Less.

This styleguide is Bootstrap3 dependent, it is included in the `src/external` folder.
Feel free to toggle the different `@import` to remove unused Bootstrap classes and reduce the final file weight 💪.

All helpers such as mixins or atomic helpers classes are located in the `src/core` folder. Fonts and typographic identity are defined here too.

The rest of the stuff is in the `src/components` folder.

## Style of coding

- Try to use the BEM convention (`sf_block__element--modifier`).
- Try to be careful to how you name files.
- Be careful of side effets your changes make.
- Try to write maintainable code.
- Dont overuse LESS nesting, it is tempting but it could cause unexpected css ;)
