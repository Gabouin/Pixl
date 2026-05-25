export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) return Response.json({ error: "No email" }, { status: 400 });

  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Signups`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { Email: email } }),
    },
  );

  const data = await res.json();
  console.log("Airtable response:", data);

  return Response.json({ ok: true, airtable: data });
}
