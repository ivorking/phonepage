## Phonepage Practice

### Requirements
* Use front end technologies to build a data driven component of the website.
* HTML – Your markup must be readable, semantic and concise.
* CSS – You can use whichever pre-processor you like.
* JS – Create a succinct JavaScript solution.
* Use any frameworks you like, but ensure there is reason and purpose behind your choice(s).
* Create a build process.
* Consider future reuse and maintenance of code.
* Provide documentation for both build process and at code level via comments (where needed).
* Page must display in Chrome, IE11 and Firefox.
* On selection of a colour or capacity the image will change and the prices will update.

### Notes on solution

The company website was used as a reference for some aspects of this page, where it was necessary to achieve an exact match to the brief. This was so the task could be completed quickly. 

* For the sake of speed and simplicity, a single page JS, HTML, CSS, jQuery solution has been selected. I have minimised the use of additional libraries and frameworks in the interests of time.
* I have used a simple liquid layout approach. I have avoided fixed widths. This means the page won't render exactly as per the provided reference image, but it will more easily resize for different screen sizes (some smaller screen sizes included in CSS).
* See console log and in-code comments for details of the solution.

### Features I would add with more time
* This solution could be created as a React component, for integration into a larger app/website (this would be the recommended approach). This could also utilise a node.js server for the phone data.
* If using React I would rewrite the jQuery as pure JS selector statements.
* Ordinarily I would incorporate bootstrap/reactstrap for CSS styling, but for simplicity I did not implement Bootstrap here.
* For exact reproduction of relative positions I would use a more time consuming fixed width layout.
* I would change the number of stars appearing depending on the product.

## Build process

No extensive build process was used due to this being a relatively small task. However, it did include:

* Initial layout and design using a liquid layout with divs and tables, referring to Chrome Dev Tools and using Pesticide plugins for accuracy.
* Code quality checking & review - ESLint was used for this.
* Version control via GitHub.
* Check that all commenting is in place and redundant or commented out code removed.
* Final browser checking - responsive design, other browsers.

If this was part of a larger project, my build process would have included:
* Initial timeline, project management aspects.
* Unit testing - would ordinarily include tests for expected outcomes (using e.g. Jasmine, Mocha, Jest)
* Minification of key libraries used (e.g. jQuery).
* Checking other aspects - optimising load times, security of libraries used.

## Copyright

All source code, digital files, assets, images and fonts contained in this GitHub repository:  
"https://github.com/ivorking/phonepage",  
is Copyright (C) Ivor King 2018. All Rights Reserved.
 * Unauthorized copying of any digital files stored in this repository, via any medium, is strictly prohibited.
 * All content in this repository is proprietary and confidential.
 * Written by Ivor King.

This means that all content in this repository may not be copied, modified, distributed or re-used for any purpose whatsoever, without the express permission of the author.

