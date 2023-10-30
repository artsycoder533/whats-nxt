export const getToken = async () => {
  try {
    const response = await fetch(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(
            `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
          )}`,
        },
        body: "grant_type=client_credentials",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch access token. Status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("Paypal API Response: ", data);
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};
