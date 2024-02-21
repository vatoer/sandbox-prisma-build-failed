import Image from "next/image";
import { myActionOnServer } from "./_actions";

export default async function Home() {
  const myAction = async () => {
   return {
      type: "GET_SOMETHING",
      payload: {},
      errors: "UNKNOWN_ERROR",
    };
  }

  const x = await myAction();
  const y = await myActionOnServer();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-3xl font-bold">Test Build</h1>
          <p className="text-lg font-thin">Test Build</p>
        </div>
      </div>
    </main>
  );
}
