import { Deta } from "deta";

export default defineEventHandler(async (event) => {
  const space_cllect: any = event.node.req?.headers["x-space-collection"]
  if (!space_cllect) {
    return createError({
      statusCode: 401,
      statusMessage: "unauthorized"
    })
  }
  const db = Deta(space_cllect).Base(
    "amvstrm-data"
  );
  const post = await readBody(event);
  const q = getQuery(event);
  try {
    if (!(await db.get("userData"))) {
      await db.put(
        {
          app_bookmark_data: [],
          app_player_data: {},
          app_user_last_data: {},
        },
        "userData"
      );
    }
    if (q.mutate === "add_bookmark") {
      await db.update(
        {
          app_bookmark_data: post.bookmarks,
        },
        "userData"
      );
    } else if (q.mutate === "add_latest_watch") {
      await db.update(
        {
          app_user_last_data: post.latest_watch,
        },
        "userData"
      );
    } else if (q.mutate === "save_plyr_data") {
      await db.update(
        {
          app_player_data: post.plyr_data,
        },
        "userData"
      );
    } else if (q.mutate === "saved_all") {
      await db.update(
        {
          app_bookmark_data: post.bookmarks,
          app_user_last_data: post.latest_watch,
          app_player_data: post.plyr_data,
        },
        "userData"
      );
    } else {
      return createError({
        statusCode: 400,
        statusMessage: "bad request",
      })
    }
    return {
      status: 200,
      message: "saved",
    };
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: 'server error'
    })
  }
});
