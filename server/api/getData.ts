import { Deta } from "deta";

export default defineEventHandler(async (event) => {
  const space_cllect: any = event.node.req?.headers["x-space-collection"]
  if (!space_cllect) {
    return {status : 401, message: "unauthorized"}
  }
  const db = Deta(space_cllect).Base("amvstrm-data");
  try {
    return {
      status: 200,
      message: "ok",
      data: await db.get("userData"),
    };
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "server error",
    });
  }
});
