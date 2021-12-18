import {enumType, extendType, intArg, objectType, stringArg} from 'nexus'

const Role = enumType({
    name: "Role",
    members: ["USER", "ADMIN"],
})

export const User = objectType({
    name: "User",
    definition(t) {
        t.string("id");
        t.string("email");
        t.string("image");
        t.field("role", {type: Role});
    }
});

export const Edge = objectType({
    name: "Edge",
    definition(t) {
        t.string('cursor')
        t.field('node', {
            type: User,
        })
    },
})

export const PageInfo = objectType({
    name: 'PageInfo',
    definition(t) {
        t.string('endCursor')
        t.boolean('hasNextPage')
    },
})

export const Response = objectType({
    name: 'Response',
    definition(t) {
        t.field('pageInfo', {type: PageInfo})
        t.list.field('edges', {
            type: Edge,
        })
    },
})

export const UsersQuery = extendType({
    type: "Query",
    definition(t) {
        t.field("users", {
            type: "Response",
            args: {
                first: intArg(),
                after: stringArg(),
            },
            async resolve(_, args, ctx) {
                let queryResults = null;

                if (args.after) {
                    queryResults = await ctx.prisma.user.findMany({
                        take: args.first,
                        skip: 1,
                        cursor: {
                            id: args.after
                        },
                    })
                } else {
                    queryResults = await ctx.prisma.user.findMany({
                        take: args.first,
                    })
                }

                if (queryResults.length > 0) {
                    const lastUser = queryResults[queryResults.length - 1];
                    const curs = lastUser.id;

                    const qResults = await ctx.prisma.user.findMany({
                        take: args.first,
                        cursor: {
                            id: curs
                        },
                        orderBy: {
                            id: 'asc'
                        }
                    });

                    return {
                        pageInfo: {
                            endCursor: curs,
                            hasNextPage: qResults.length >= args.first
                        },
                        edges: queryResults.map(u => ({
                            cursor: u.id,
                            node: u
                        }))
                    };
                }

                return {
                    pageInfo: {
                        endCursor: null,
                        hasNextPage: false,
                    },
                    edges: [],
                }
            },
        })
    },
});