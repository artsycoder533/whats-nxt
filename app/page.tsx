import { getToken } from "./paypal/paypal";
import { cookies } from "next/headers";

export default async function Home() {
  const getAccessToken = async () => {
    "use server";
    const accessToken = await getToken();
    cookies().set("accessToken", accessToken);
    console.log("access token==>", accessToken);
    return accessToken;
  };

  getAccessToken();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is my home page!</h1>
    </main>
  );
}
