import path from "path";

export default [
  {
    name: "App Router",
    children: [
      {
        name: "/",
        pathname: "/",
      },
      {
        name: "博客",
        pathname: "/blog",
      },
      {
        name: "Aii",
        pathname: "/aii",
      },
    ],
  },
  {
    name: "Pages Router",
    children: [
      { name: "/", pathname: "/" },
      { name: "test", pathname: "/test" },
      {
        name: "AI",
        pathname: "/ai",
      },
    ],
  },
];
