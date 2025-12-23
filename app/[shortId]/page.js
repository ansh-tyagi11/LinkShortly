import connectDB from "@/db/connectDB";
import ShortUrl from "@/models/ShortUrl";
import { redirect, notFound } from "next/navigation";

export default async function RedirectPage({ params }) {
  await connectDB();

  const { shortId } = await params;

  const record = await ShortUrl.findOne({ shortId }).lean();

  if (!record) {
    notFound();
  }

  await ShortUrl.updateOne(
    { shortId },
    { $inc: { clicks: 1 } }
  );

  redirect(record.originalUrl);
}
