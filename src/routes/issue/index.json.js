import issues from './_issues.js';

const contents = JSON.stringify(
  issues.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
    };
  }),
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
