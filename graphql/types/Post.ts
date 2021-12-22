import { extendType, objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("description");
    t.string("image");
    t.string("path");
  },
});

export const PostsQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("posts", {
      type: "Post",
      resolve(_root, _args, ctx) {
        return ctx.prisma.post.findMany({});
      },
    });
  },
});
