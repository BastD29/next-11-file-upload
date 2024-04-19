import { del, put } from "@vercel/blob";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file.name) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const blob = await put(file.name, file, { access: "public" });

  return NextResponse.json(blob);
}

// export async function DELETE(req: NextApiRequest) {
//   const { url } = req.body;

//   if (!url) {
//     return NextResponse.json({ error: "No URL provided" }, { status: 400 });
//   }

//   await del(url);

//   return NextResponse.json({ success: true });
// }
