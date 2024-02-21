import { myDb } from "@/lib/my-db";
export const myActionOnServer = async () => {
    try {
        const data = await myDb.category.findMany({});
    } catch (error) {
        console.error(error);
    }
    return {
       type: "GET_SOMETHING",
       payload: {},
       errors: "UNKNOWN_ERROR",
     };
   }