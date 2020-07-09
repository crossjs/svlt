// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_issues.js` rather than `issues.js`, because
// we don't want to create an `/blog/issues` route — the leading
// underscore tells Sapper not to do that.

const issues = [
  {
    title: 'Cannot set `class` attribute to custom components',
    slug: 'class-attribute-to-custom-component',
    html: '',
  },
];

issues.forEach((issue) => {
  issue.html = issue.html.replace(/^\t{3}/gm, '');
});

export default issues;
